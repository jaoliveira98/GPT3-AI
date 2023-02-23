import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  Float,
  OrbitControls,
} from "@react-three/drei";

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/vrRobot.gltf");
  useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group
            name="99bb25453ae64b8c9ac16992b24eafaefbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="metarig"
                  position={[0, -126.16, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={141.78}
                >
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.naranja}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.naranja}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.turqueza}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.luz_neon}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.azul}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.azul}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.azul}
                      skeleton={nodes.Object_15.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/vrRobot.gltf");

export default function VrRobot() {
  return (
    <Canvas camera={{ fov: 50, near: 0.1, far: 20, position: [0, 0, 0.9] }}>
      <ambientLight intensity={0.3} />
      <OrbitControls />
      <directionalLight position={[-2, 5, 2]} intensity={5} color="#ae67fa" />
      <directionalLight position={[5, 5, 2]} intensity={5} color="#000" />
      <Suspense fallback={null}>
        <Float
          position={[0, -0.2, 0]}
          floatingRange={[undefined, 0]}
          rotationIntensity={2}
          floatIntensity={3}
          speed={5}
        >
          <Model scale={0.2} position={[0, 0.2, 0]} />
        </Float>
      </Suspense>
    </Canvas>
  );
}
