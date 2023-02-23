import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Sparkles, CameraShake } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/robot.gltf");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.BlackMetal}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.ButterflyBody}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.ButterflyWings}
        />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Glow} />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.OrangePaint}
        />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Screen} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Stripes} />
      </group>
    </group>
  );
}

useGLTF.preload("robot.gltf");

export default function Robot() {
  return (
    <Canvas camera={{ fov: 50, near: 0.1, far: 20, position: [-1, 0, 2.3] }}>
      <ambientLight intensity={0.3} />
      <CameraShake
        maxPitch={0.1}
        maxRoll={0.1}
        maxYaw={0.1}
        pitchFrequency={0.2}
        rollFrequency={0.2}
        yawFrequency={0.2}
      />
      <directionalLight position={[-2, 5, 2]} intensity={5} color="#ae67fa" />
      <directionalLight position={[5, 5, 2]} intensity={5} color="#000" />

      <Suspense fallback={null}>
        <Sparkles
          size={3}
          opacity={0.3}
          amount={270}
          speed={0.9}
          noise={1}
          random={true}
          scale={1.3}
          color="#ae67fa"
        />
        <Model scale={0.1} position={[0, -1, 0]} />
      </Suspense>
    </Canvas>
  );
}
