"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  varying vec2 vUv;

  // Creates a smooth layered aurora-like color field.
  void main() {
    vec2 uv = vUv;

    // Correct the shape for different screen sizes.
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;

    // Center the coordinate system.
    vec2 centered = uv - vec2(aspect * 0.5, 0.5);

    // Slowly moving wave layers driven by time.
    float wave1 = sin(centered.x * 3.0 + u_time * 0.35);
    float wave2 = sin(centered.y * 5.0 - u_time * 0.25);
    float wave3 = sin((centered.x + centered.y) * 4.0 + u_time * 0.2);

    // Mouse gently influences the light position.
    vec2 mouse = (u_mouse - 0.5) * vec2(aspect, 1.0);
    float mouseGlow = 0.18 / (length(centered - mouse) + 0.18);

    // Combine the waves into a smooth intensity value.
    float intensity = 0.5 + 0.5 * sin(wave1 + wave2 + wave3);

    // Custom FlyRank-inspired cyan / blue / violet palette.
    vec3 deepBlue = vec3(0.015, 0.025, 0.10);
    vec3 cyan = vec3(0.0, 0.65, 0.95);
    vec3 violet = vec3(0.45, 0.15, 0.95);

    vec3 color = mix(deepBlue, cyan, intensity * 0.55);
    color = mix(color, violet, intensity * 0.35);

    // Add a soft glow around the mouse position.
    color += cyan * mouseGlow * 0.35;

    // Darken the edges so foreground text remains readable.
    float vignette = smoothstep(1.25, 0.15, length(centered));
    color *= 0.65 + vignette * 0.35;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderPlane() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const { size, gl } = useThree();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2() },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    []
  );

  // Update shader resolution while keeping device pixel ratio capped.
  useEffect(() => {
    const pixelRatio = Math.min(gl.getPixelRatio(), 1.5);

    uniforms.u_resolution.value.set(
      size.width * pixelRatio,
      size.height * pixelRatio
    );
  }, [gl, size, uniforms]);

  // Update the animation time every rendered frame.
  useFrame((state) => {
    if (!material.current) return;

    material.current.uniforms.u_time.value =
      state.clock.getElapsedTime();
  });

  return (
    <mesh
      onPointerMove={(event) => {
        // R3F provides normalized UV coordinates from 0 to 1.
        uniforms.u_mouse.value.set(
          event.uv?.x ?? 0.5,
          event.uv?.y ?? 0.5
        );
      }}
    >
      <planeGeometry args={[2, 2]} />

      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function ShaderHero() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    // Respect the user's reduced-motion preference.
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotion();

    mediaQuery.addEventListener("change", updateMotion);

    // Pause WebGL rendering when the browser tab is hidden.
    const handleVisibility = () => {
      setPageVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      mediaQuery.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // Static gradient fallback for reduced-motion users.
  if (reducedMotion) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950">
        <HeroContent />
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Fullscreen WebGL shader background */}
      <div className="absolute inset-0">
        <Canvas
          dpr={[1, 1.5]}
          frameloop={pageVisible ? "always" : "never"}
          camera={{ position: [0, 0, 1] }}
        >
          <ShaderPlane />
        </Canvas>
      </div>

      {/* Foreground content remains above the shader */}
      <div className="relative z-10">
        <HeroContent />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="flex min-h-screen items-center px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            FlyRank AI
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Build the Future with{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Intelligent lead qualification and automation powered by a
            personalized WebGL experience.
          </p>

          <div className="mt-8">
            <a
              href="/dashboard"
              className="inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Explore Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}