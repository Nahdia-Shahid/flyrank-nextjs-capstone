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
      mesh.current.rotation.y += delta * 1.2;
      mesh.current.rotation.x += delta * 0.5;
    }
  });

  return (
    <mesh ref={mesh} scale={1 + score / 300}>
      <sphereGeometry args={[1.4, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.5}
        roughness={0.2}
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
        <ambientLight intensity={1} />
        <directionalLight position={[4, 4, 5]} intensity={3} />
        <pointLight position={[-4, -2, 3]} intensity={2} />

        <Orb score={score} />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableDamping
        />
      </Canvas>
    </div>
  );
}