"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
  score: number;
};

function Orb({ score }: Props) {
  const mesh = useRef<THREE.Mesh>(null);

  const color =
    score >= 80 ? "#22c55e" : score >= 50 ? "#eab308" : "#ef4444";

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.35;
      mesh.current.rotation.x += delta * 0.12;
    }
  });

  return (
    <mesh ref={mesh} scale={1 + score / 500}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color={color}
        metalness={0.35}
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

export default function LeadIntelligenceScene({ score }: Props) {
  return (
    <div className="h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 4]} intensity={2} />
        <pointLight position={[-3, -2, 2]} intensity={1} />

        <Orb score={score} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableDamping
        />
      </Canvas>
    </div>
  );
}