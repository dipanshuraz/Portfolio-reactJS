"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import type { Group } from "three";

function Model() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/models/fluxs_pit_stop.glb");
  const scrollRef = useRef(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    const p = scrollRef.current;
    group.current.rotation.y = t * 0.2 + p * Math.PI * 0.6;
    group.current.rotation.x = 0.2 + Math.sin(t * 0.3) * 0.1;
    group.current.position.y = Math.sin(t * 0.4) * 0.1 - p * 0.2;
  });

  return (
    <group ref={group} scale={1.4}>
      <primitive object={scene} />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="model-shell" aria-hidden>
      <Canvas camera={{ position: [0, 0.4, 3.6], fov: 40 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 4]} intensity={1.2} />
        <pointLight position={[-2, -2, 2]} intensity={0.6} />
        <Model />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/fluxs_pit_stop.glb");
