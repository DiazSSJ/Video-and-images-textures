import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/static/original_anime_girls.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={10.21}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.girl_skin2_1.geometry}
            material={materials.mtl_skin2}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.girl_face2_1.geometry}
          material={materials.mtl_face2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.girl_cloth2_1.geometry}
          material={materials.mtl_cloth2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.girl_hair_1.geometry}
          material={materials.mtl_hair}
        />
        <group position={[0, 0, 0.75]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.eyelash003_1.geometry}
            material={materials.white}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.girl_skin_1.geometry}
          material={materials.mtl_skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.girl_cloth_1.geometry}
          material={materials.mtl_cloth}
        />
        <group position={[4.57, -13.85, 20.97]} rotation={[0.91, 0.27, 0.16]} />
        <group
          position={[7.11, -0.14, 17.13]}
          rotation={[-0.78, 0.56, -0.61]}
          scale={[-1, 1, 1]}
        />
        <group
          position={[-8.15, -1.06, 18.02]}
          rotation={[-1.33, -0.24, 0.03]}
          scale={[-1, 1, 1]}
        />
        <group
          position={[-24.74, 4.92, 20.32]}
          rotation={[-1.33, -0.24, 0.03]}
          scale={[-1, 1, 1]}
        />
        <group
          position={[0.69, 6.74, 29.27]}
          rotation={[-0.97, 0.2, 0.01]}
          scale={[-1, 1, 1]}
        />
        <group position={[1.01, -16.75, 14.1]} rotation={[1.34, 0.56, 0.07]} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.girl_face_1.geometry}
          material={materials.mtl_face}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pants2_1.geometry}
          material={materials.Root}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.girl_hair2_1.geometry}
          material={materials.mtl_hair2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pants_1.geometry}
          material={materials.white}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/original_anime_girls.glb");