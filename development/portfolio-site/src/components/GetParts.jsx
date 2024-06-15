import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { MeshStandardMaterial } from 'three';

const GLTF_ITEMS = {curret : null};
export default function GetParts () {
  const { nodes, materials } = useGLTF('/scene.glb')

  if (GLTF_ITEMS.curret !== null) {
    return GLTF_ITEMS.curret
  }

  const items = {
    "Egg": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Egg_Slice_Egg_0.geometry}
          material={materials.material}
        />,
    "Bread": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bread_Slice_Bread_0.geometry}
          material={materials.Bread}
        />,
    "Cheese": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cheese_Slice_Cheese_0.geometry}
          material={materials.Cheese}
        />,
    "Lettuce": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lettuce_Slice_Lettuce_0.geometry}
          material={materials.Lettuce}
        />,
    "Tomato": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tomato_Slice_Tomato_0.geometry}
          material={materials.Tomato}
        />,
    "Ham": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ham_Slice_Ham_0.geometry}
          material={materials.material_14}
        />,
    "Salami": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Salami_Slice_Salami_0.geometry}
          material={materials.Salami}
        />,
    "Cucumber": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cucumber_Slice_Cucumber_0.geometry}
          material={materials.Cucumber}
        />,
    "Pickles": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pickle_Slice_Pickles_0.geometry}
          material={materials.Pickles}
        />,
    "Bacon": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bacon_Slice_Bacon_0.geometry}
          material={materials.Bacon}
        />,
    "Pepper": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pepper_Slice_Pepper_0.geometry}
          material={materials.Pepper}
        />,
    "Onion": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Onion_Slice_Onion_0.geometry}
          material={materials.Onion}
        />,
    "Chicken": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chicken_Slice_Chicken_0.geometry}
          material={materials.Chicken}
        />,
    "Mushroom": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mushroom_Slice_Mushroom_0.geometry}
          material={materials.Mushroom}
        />,
    "Patty": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Patty_Slice_Patty_0.geometry}
          material={materials.Patty}
        />,
    "Ribs": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ribs_Slice_Ribs_0.geometry}
          material={materials.Ribs}
        />,
    "Shrimp": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrimp_Slice_Shrimp_0.geometry}
          material={materials.Shrimp}
        />,
    "Ketchup": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ketchup_Slice_Ketchup_0.geometry}
          material={materials.Ketchup}
        />,
    "Mayo": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mayo_Slice_Mayo_0.geometry}
          material={materials.Mayo}
        />,
    "Mustrard": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mustard_Slice_Mustrard_0.geometry}
          material={materials.Mustrard}
        />,
    "BBQSauce": <mesh
          castShadow
          receiveShadow
          geometry={nodes.BBQ_Sauce_Slice_BBQ_sauce_0.geometry}
          material={materials.BBQ_sauce}
        />,
    "Sausage": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sausage_Slice_Sausage_0.geometry}
          material={materials.Sausage}
        />,
    "Fries": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fries_Slice_Fries_0.geometry}
          material={materials.Fries}
        />,
    "Halloumi": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Halloumi_Slice_Halloumi_0.geometry}
          material={materials.Halloumi}
        />,
    "Avocado": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Avocado_Slice_Avocado_0.geometry}
          material={materials.Avocado}
        />,
    "Fish": <mesh
          castShadow
          receiveShadow
          geometry={nodes.anchovies_Slice_Fish_0.geometry}
          material={materials.Fish}
        />,
    "Pizza": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pizza_Slice_Meat_Feast_0.geometry}
          material={materials.Meat_Feast}
        />,
    "Roast": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roast_Slice_Roast_0.geometry}
          material={materials.Roast}
        />,
    "Salmon": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Salmon_Slice_Salmon_0.geometry}
          material={materials.Salmon}
        />,
    "Waffle": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Waffle_Slice_Waffle_0.geometry}
          material={materials.Waffle}
        />,
    "Oilives": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Olive_Slice_Oilives_0.geometry}
          material={materials.Oilives}
        />,
    "Butter": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Melted_Butter_Butter_0.geometry}
          material={materials.Butter}
        />,
    "Pineapple": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pineapple_Slice_Pineapple_0.geometry}
          material={materials.Pineapple}
        />,
    "Qiiwi": <mesh
          castShadow
          receiveShadow
          geometry={nodes.Qiiwi_Slice_Qiiwi_0.geometry}
          material={materials.Qiiwi}
        />
    }
    GLTF_ITEMS.curret = items

    return items;
}
