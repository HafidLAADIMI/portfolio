"use client";
import React, { Suspense  } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import { useMediaQuery } from "react-responsive";
const Computers = (props) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh {...props}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight intensity={1} />
      <primitive object={computer.scene} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const DevComputer = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <Canvas
      style={{
        width: "100%",
        height: "50vh",
      }}
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Center>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={1.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1.5} />
          <spotLight position={[0, 5, 0]} intensity={1} />
          <Computers
            position={isMobile ? [2.3, -2.2, 0.3] : [2.5, -2.2, 0.3]}
            scale={isMobile ? 0.8 : 1.1}
          />
        </Suspense>

        <Preload all />
      </Center>
    </Canvas>
  );
};

export default DevComputer;
