import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/spacesuit.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().play();
    return () => {
      actions[names[0]].reset();
    };
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_99"
          geometry={nodes.Object_99.geometry}
          material={materials.material_0}
          skeleton={nodes.Object_99.skeleton}
          scale={0.01314533}
        />
        <skinnedMesh
          name="Object_100"
          geometry={nodes.Object_100.geometry}
          material={materials.material_0}
          skeleton={nodes.Object_100.skeleton}
          scale={0.01314533}
        />
        <skinnedMesh
          name="Object_103"
          geometry={nodes.Object_103.geometry}
          material={materials.material_1}
          skeleton={nodes.Object_103.skeleton}
          scale={0.01314533}
        />
        <skinnedMesh
          name="Object_106"
          geometry={nodes.Object_106.geometry}
          material={materials.material_2}
          skeleton={nodes.Object_106.skeleton}
          scale={0.01314533}
        />
      </group>
    </group>
  );

}

useGLTF.preload("/spacesuit.glb");
