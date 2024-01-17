"use client";

import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Model } from "./Model";
import gsap from "gsap";

// import { editable as e, SheetProvider } from "@theatre/r3f";
// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";
// import { getProject } from "@theatre/core";

// const demoSheet = getProject("Demo Project").sheet("Demo Sheet");
// studio.initialize();
// studio.extend(extension);

const Group = () => {
  const [widthScreen, setMax] = useState(0);
  const groupRef = useRef();

  const [cameraX, setCameraX] = useState(0);
  const [cameraY, setCameraY] = useState(0);

  useEffect(() => {
    setMax(document.documentElement.clientWidth);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const mouseX = (clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(clientY / window.innerHeight) * 2 + 1;

        setCameraX((prev) => (mouseX - prev) * 0.9);
        setCameraY((prev) => (mouseY - prev) * 0.9);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    });
  }, []);

  useFrame(() => {
    gsap.to(groupRef.current.rotation, {
      y: cameraX * -0.05,
      duration: 0.5,
      ease: "power2.out",
    });
  });
  return (
    <group ref={groupRef}>
      <group position={[1.65, -1.66, -0.47]} rotation={[0, 2.8, 0.15]}>
        <group position={[-0.08, 0, 0.52]} rotation={[0.3, -0.64, 0.1]}>
          <group>
          <Model />
          </group>
        </group>
        <mesh scale={[0.7, 0.7, 0.7]} position={[100, -40, 0]}>
          <sphereGeometry args={[30, 64, 64]} />
          <meshStandardMaterial
            emissiveIntensity={1.5}
            toneMapped={false}
            emissive="lightBlue"
          />
        </mesh>
      </group>
    </group>
  );
};

const Scene = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex justify-center items-center">
          <p className="lg:translate-x-60"></p>
        </div>
      }>
      <div className="w-full h-screen absolute top-0 left-0 z-0">
        <Canvas
          shadows={"soft"}
          dpr={[1, 2]}
          camera={{ position: [9, 2.5, 0], fov: 35 }}>
          {/* <SheetProvider sheet={demoSheet}>  */}
          <Group />
          {/* </SheetProvider> */}
          <spotLight
            color={"white"}
            intensity={200}
            angle={1}
            penumbra={1}
            position={[10, 10, 0]}
            castShadow
            shadow-bias={-0.0001}
          />
          <color args={[0,0,0]} attach={"background"} />
          <directionalLight position={[0, 2, 0]} intensity={6} />
          {/* <Environment preset="city" /> */}
          {/* <OrbitControls /> */}
          <EffectComposer>
            <Bloom luminanceThreshold={0.7} mipmapBlur />
          </EffectComposer>
        </Canvas>
      </div>
    </Suspense>
  );
};

export default Scene;
