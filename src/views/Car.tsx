/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 lamborghini_centenario_lp-770_baby_blue_sdc.glb --keepnames -t 
Author: SDC PERFORMANCE™️ (https://sketchfab.com/3Duae)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-centenario-lp-770-baby-blue-sdc-f15037dd5fcd4f09b13fb9f2ce9e21cc
Title: Lamborghini Centenario LP-770 Baby Blue SDC
*/

import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useAnimations, Center, useCursor } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Group, LoopOnce } from "three";
import { useCarCtx } from "@/context/car";
import { ThreeEvent, applyProps } from "@react-three/fiber";
import { colorState } from "./contact";
import { useSnapshot } from "valtio";
import { Sign } from "@/components/Sign";
import { AngleLimitByHtml } from "@/components/AngleLimit/Html";
import { throttle } from "lodash-es";

type GLTFResult = GLTF & {
  nodes: {
    Object_64: THREE.Mesh;
    Object_65: THREE.Mesh;
    Object_66: THREE.Mesh;
    Object_68: THREE.Mesh;
    Object_70: THREE.Mesh;
    Object_71: THREE.Mesh;
    Object_72: THREE.Mesh;
    Object_73: THREE.Mesh;
    Object_74: THREE.Mesh;
    Object_77: THREE.Mesh;
    Object_78: THREE.Mesh;
    Object_79: THREE.Mesh;
    Object_81: THREE.Mesh;
    Object_83: THREE.Mesh;
    Object_84: THREE.Mesh;
    Object_85: THREE.Mesh;
    Object_86: THREE.Mesh;
    Object_87: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_35: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_37: THREE.Mesh;
    Object_38: THREE.Mesh;
    Object_39: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_41: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_43: THREE.Mesh;
    Object_44: THREE.Mesh;
    Object_45: THREE.Mesh;
    Object_47: THREE.Mesh;
    Object_48: THREE.Mesh;
    Object_49: THREE.Mesh;
    Object_50: THREE.Mesh;
    Object_51: THREE.Mesh;
    Object_52: THREE.Mesh;
    Object_54: THREE.Mesh;
    Object_55: THREE.Mesh;
    Object_56: THREE.Mesh;
    Object_57: THREE.Mesh;
    Object_58: THREE.Mesh;
    Object_60: THREE.Mesh;
    Object_61: THREE.Mesh;
    Object_89: THREE.Mesh;
    Object_90: THREE.Mesh;
    Object_91: THREE.Mesh;
    Object_92: THREE.Mesh;
    Object_94: THREE.Mesh;
    Object_95: THREE.Mesh;
    Object_96: THREE.Mesh;
    Object_97: THREE.Mesh;
    Object_98: THREE.Mesh;
    Object_99: THREE.Mesh;
    Object_100: THREE.Mesh;
    Object_101: THREE.Mesh;
    Object_102: THREE.Mesh;
    Object_103: THREE.Mesh;
    Object_104: THREE.Mesh;
    Object_105: THREE.Mesh;
    Object_106: THREE.Mesh;
    Object_108: THREE.Mesh;
    Object_110: THREE.Mesh;
    Object_111: THREE.Mesh;
    Object_112: THREE.Mesh;
  };
  materials: {
    ["Material.019"]: THREE.MeshStandardMaterial;
    Carbon_M: THREE.MeshStandardMaterial;
    material_32: THREE.MeshStandardMaterial;
    material_33: THREE.MeshStandardMaterial;
    Carbon_R: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    material_21: THREE.MeshStandardMaterial;
    PLAS: THREE.MeshStandardMaterial;
    CUIR: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    CRBN_JANTE: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["pneu.005"]: THREE.MeshStandardMaterial;
    TIRE32: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    Display: THREE.MeshStandardMaterial;
    LOGO: THREE.MeshStandardMaterial;
    Body_Colour: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    Vents: THREE.MeshStandardMaterial;
    Plastic_Dash: THREE.MeshStandardMaterial;
    Seat_Belt: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    material_24: THREE.MeshStandardMaterial;
    material_25: THREE.MeshStandardMaterial;
    material_19: THREE.MeshStandardMaterial;
    LOGO: THREE.MeshStandardMaterial;
    Steering_Wheel_Logo: THREE.MeshStandardMaterial;
    material_27: THREE.MeshStandardMaterial;
    plastique: THREE.MeshStandardMaterial;
    chrome: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    GLS_AR: THREE.MeshStandardMaterial;
    material_36: THREE.MeshStandardMaterial;
    Metal_C: THREE.MeshStandardMaterial;
    LIGT_RED: THREE.MeshStandardMaterial;
    LIGT_BLC: THREE.MeshStandardMaterial;
    DTL_FER: THREE.MeshStandardMaterial;
    MIROR: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    CENTENARIO: THREE.MeshStandardMaterial;
    ["Material.020"]: THREE.MeshStandardMaterial;
    ["Material.021"]: THREE.MeshStandardMaterial;
    ["Material.022"]: THREE.MeshStandardMaterial;
    material_0: THREE.MeshStandardMaterial;
  };
};

export function Car(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<Group>();
  const { nodes, materials, animations } = useGLTF(
    "/models/lamborghini_centenario_lp-770_baby_blue_sdc.glb"
  ) as GLTFResult;

  const { actions } = useAnimations(animations, group);

  const snap = useSnapshot(colorState);

  const {
    state: { carDoorOpen: carDoorStatus },
    dispatch,
  } = useCarCtx();

  // @ts-ignore
  applyProps(materials["LIGT_BLC"], { emissive: "#fff" });
  // @ts-ignore
  applyProps(materials["LIGT_RED"], { emissive: "#f00" });

  useEffect(() => {
    const action = actions["Animation"]!;
    action.setLoop(LoopOnce, 1);
    action.clampWhenFinished = true;
  });

  const handlerPointerOver = throttle((e: ThreeEvent<PointerEvent>) => {
    // @ts-ignore
    // e.stopPropagation();

    if (!colorState.state) {
      document.body.style.cursor = "auto";
      return;
    }
    // @ts-ignore
    const name = e.object?.material.name;

    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
      <path fill="rgba(255, 255, 255, 0.5)"
        d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#fff" />
      <g filter="url(#filter0_d)">
        <path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z"
          fill="${snap.items[name]}" />
      </g>
      <path d="M2 2l11 2.947L4.947 13 2 2z" fill="#fff" /><text fill="#fff" style="#fff-space:pre"
        font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em">
        <tspan x="35" y="63">${name}</tspan>
      </text>
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h64v64H0z" />
      </clipPath>
      <filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
    </svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="rgba(255, 255, 255, 0.5)"
      d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#fff" />
    <path d="M2 2l11 2.947L4.947 13 2 2z" fill="#fff" />
    </svg>`;

    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      cursor
    )}'), auto`;
  }, 500);

  const handlerPointerOut = throttle((e: ThreeEvent<PointerEvent>) => {
    e.intersections.length === 0 && (document.body.style.cursor = "auto");
  }, 500);

  function handlerCarDoorClick() {
    if (carDoorStatus) carDoorClose();
    else carDoorOpen();
  }

  function carDoorOpen() {
    dispatch({ type: "open", payload: true });
    const action = actions["Animation"]!;
    action.time = 2;
    action.timeScale = 1;
    action.paused = false;
    action.play();
  }

  function carDoorClose() {
    const action = actions["Animation"]!;
    action.time = 4;
    action.timeScale = -1;
    action.paused = false;
    action.play();

    const mixer = action.getMixer();

    const handlerFinished = () => {
      dispatch({ type: "open", payload: false });
      mixer.removeEventListener("finished", handlerFinished);
    };

    mixer.addEventListener("finished", handlerFinished);
  }

  function handlerCarMaterialClick(e: ThreeEvent<MouseEvent>) {
    e.stopPropagation();
    if (!colorState.state) return;
    // @ts-ignore
    const name = e.object?.material.name;
    colorState.current = name;
    colorState.pickerPosition.left = e.offsetX;
    colorState.pickerPosition.top = e.offsetY;
  }

  return (
    <>
      <group
        ref={group}
        name="Sketchfab_model"
        rotation={[-Math.PI / 2, 0, 0]}
        {...props}
      >
        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
          <group
            name="Empty001_16"
            position={[0.913, 0.686, 0.893]}
            rotation={[-0.004, 0, 0]}
            scale={0.121}
            onClick={handlerCarDoorClick}
          >
            <group
              name="CR001_12"
              position={[-7.573, -15.296, -7.41]}
              scale={8.299}
            >
              <mesh
                name="Object_64"
                geometry={nodes.Object_64.geometry}
                material={materials["Material.019"]}
                material-color={snap.items["Material.020"]}
              />
              <mesh
                name="Object_65"
                geometry={nodes.Object_65.geometry}
                material={materials.Carbon_M}
              />
              <mesh
                name="Object_66"
                geometry={nodes.Object_66.geometry}
                material={materials.material_32}
              />
            </group>
            <group
              name="KLM001_13"
              position={[-7.573, -5.694, -7.41]}
              scale={8.299}
            >
              <mesh
                name="Object_68"
                geometry={nodes.Object_68.geometry}
                material={materials.material_33}
              />
            </group>
            <group
              name="Left_Door002_15"
              position={[-7.573, -7.417, -7.41]}
              scale={8.299}
            >
              <mesh
                name="Object_70"
                geometry={nodes.Object_70.geometry}
                material={materials.Carbon_R}
              />
              <mesh
                name="Object_71"
                geometry={nodes.Object_71.geometry}
                material={materials["Material.013"]}
              />
              <mesh
                name="Object_72"
                geometry={nodes.Object_72.geometry}
                material={materials.material_21}
              />
              <mesh
                name="Object_73"
                geometry={nodes.Object_73.geometry}
                material={materials.PLAS}
              />
              <mesh
                name="Object_74"
                geometry={nodes.Object_74.geometry}
                material={materials.CUIR}
              />
            </group>
          </group>
          <group
            name="Empty002_20"
            position={[-0.841, 0.696, 0.869]}
            scale={0.15}
            onClick={handlerCarDoorClick}
          >
            <group
              name="CR002_17"
              position={[5.623, -4.656, -5.815]}
              scale={6.689}
            >
              <mesh
                name="Object_77"
                geometry={nodes.Object_77.geometry}
                material={materials["Material.019"]}
                material-color={snap.items["Material.020"]}
              />
              <mesh
                name="Object_78"
                geometry={nodes.Object_78.geometry}
                material={materials.Carbon_M}
              />
              <mesh
                name="Object_79"
                geometry={nodes.Object_79.geometry}
                material={materials.material_32}
              />
            </group>
            <group
              name="KLM003_18"
              position={[5.623, -4.656, -5.815]}
              scale={6.689}
            >
              <mesh
                name="Object_81"
                geometry={nodes.Object_81.geometry}
                material={materials.material_33}
              />
            </group>
            <group
              name="Left_Door001_19"
              position={[5.623, 1.695, -5.815]}
              scale={6.689}
            >
              <mesh
                name="Object_83"
                geometry={nodes.Object_83.geometry}
                material={materials.Carbon_R}
              />
              <mesh
                name="Object_84"
                geometry={nodes.Object_84.geometry}
                material={materials["Material.013"]}
              />
              <mesh
                name="Object_85"
                geometry={nodes.Object_85.geometry}
                material={materials.material_21}
              />
              <mesh
                name="Object_86"
                geometry={nodes.Object_86.geometry}
                material={materials.PLAS}
              />
              <mesh
                name="Object_87"
                geometry={nodes.Object_87.geometry}
                material={materials.CUIR}
              />
            </group>
          </group>
          <group
            name="<Wheel_0"
            position={[0, 0.021, 0]}
            rotation={[2.531, 0, Math.PI]}
            scale={[1, 1.171, 1.171]}
          >
            <mesh
              name="Object_4"
              geometry={nodes.Object_4.geometry}
              material={materials.material}
            />
            <mesh
              name="Object_5"
              geometry={nodes.Object_5.geometry}
              material={materials.CRBN_JANTE}
            />
            <mesh
              name="Object_6"
              geometry={nodes.Object_6.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              name="Object_7"
              geometry={nodes.Object_7.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              name="Object_8"
              geometry={nodes.Object_8.geometry}
              material={materials["pneu.005"]}
            />
            <mesh
              name="Object_9"
              geometry={nodes.Object_9.geometry}
              material={materials["pneu.005"]}
            />
            <mesh
              name="Object_10"
              geometry={nodes.Object_10.geometry}
              material={materials.TIRE32}
            />
          </group>
          <group
            name="<Wheel001_1"
            rotation={[2.531, 0, Math.PI]}
            scale={[1, 1.171, 1.171]}
          >
            <mesh
              name="Object_12"
              geometry={nodes.Object_12.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            name="<Wheel003_2"
            position={[0, 0.021, 1.308]}
            rotation={[2.531, 0, Math.PI]}
            scale={[1, 1.171, 1.171]}
          >
            <mesh
              name="Object_14"
              geometry={nodes.Object_14.geometry}
              material={materials.material}
            />
            <mesh
              name="Object_15"
              geometry={nodes.Object_15.geometry}
              material={materials.CRBN_JANTE}
            />
            <mesh
              name="Object_16"
              geometry={nodes.Object_16.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              name="Object_17"
              geometry={nodes.Object_17.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              name="Object_18"
              geometry={nodes.Object_18.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              name="Object_19"
              geometry={nodes.Object_19.geometry}
              material={materials["pneu.005"]}
            />
            <mesh
              name="Object_20"
              geometry={nodes.Object_20.geometry}
              material={materials["pneu.005"]}
            />
            <mesh
              name="Object_21"
              geometry={nodes.Object_21.geometry}
              material={materials.TIRE32}
            />
          </group>
          <group
            name="<Wheel002_3"
            rotation={[2.531, 0, Math.PI]}
            scale={[1.925, 2.255, 2.255]}
          >
            <mesh
              name="Object_23"
              geometry={nodes.Object_23.geometry}
              material={materials["Material.010"]}
            />
          </group>
          <group
            name="<Wheel004_4"
            rotation={[2.531, 0, Math.PI]}
            scale={[1.925, 2.255, 2.255]}
          >
            <mesh
              name="Object_25"
              geometry={nodes.Object_25.geometry}
              material={materials["Material.010"]}
            />
          </group>
          <group
            name="Empty_10"
            position={[0, 1.197, -0.121]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.443}
          >
            <group name="Display_5" position={[0, -2.502, 0]} scale={1.953}>
              <mesh
                name="Object_28"
                geometry={nodes.Object_28.geometry}
                material={materials.Display}
              />
              <mesh
                name="Object_29"
                geometry={nodes.Object_29.geometry}
                material={materials.LOGO}
              />
            </group>
            <group name="Interior_6" position={[0, -2.502, 0]} scale={1.953}>
              <mesh
                name="Object_31"
                geometry={nodes.Object_31.geometry}
                material={materials.Carbon_R}
              />
              <mesh
                name="Object_32"
                geometry={nodes.Object_32.geometry}
                material={materials.Body_Colour}
              />
              <mesh
                name="Object_33"
                geometry={nodes.Object_33.geometry}
                material={materials["Material.012"]}
              />
              <mesh
                name="Object_34"
                geometry={nodes.Object_34.geometry}
                material={materials["Material.016"]}
              />
              <mesh
                name="Object_35"
                geometry={nodes.Object_35.geometry}
                material={materials.Vents}
              />
              <mesh
                name="Object_36"
                geometry={nodes.Object_36.geometry}
                material={materials.Plastic_Dash}
              />
              <mesh
                name="Object_37"
                geometry={nodes.Object_37.geometry}
                material={materials.Seat_Belt}
              />
              <mesh
                name="Object_38"
                geometry={nodes.Object_38.geometry}
                material={materials.CUIR}
              />
              <mesh
                name="Object_39"
                geometry={nodes.Object_39.geometry}
                material={materials["Material.013"]}
              />
              <mesh
                name="Object_40"
                geometry={nodes.Object_40.geometry}
                material={materials.material_21}
              />
              <mesh
                name="Object_41"
                geometry={nodes.Object_41.geometry}
                material={materials.PLAS}
              />
              <mesh
                name="Object_42"
                geometry={nodes.Object_42.geometry}
                material={materials["Material.014"]}
              />
              <mesh
                name="Object_43"
                geometry={nodes.Object_43.geometry}
                material={materials.material_24}
              />
              <mesh
                name="Object_44"
                geometry={nodes.Object_44.geometry}
                material={materials.material_25}
              />
              <mesh
                name="Object_45"
                geometry={nodes.Object_45.geometry}
                material={materials.material_19}
              />
            </group>
            <group
              name="movsteer_10_7"
              position={[0, -2.502, 0]}
              rotation={[-Math.PI / 10, 0, 0]}
              scale={1.953}
            >
              <mesh
                name="Object_47"
                geometry={nodes.Object_47.geometry}
                material={materials.LOGO}
              />
              <mesh
                name="Object_48"
                geometry={nodes.Object_48.geometry}
                material={materials.Steering_Wheel_Logo}
              />
              <mesh
                name="Object_49"
                geometry={nodes.Object_49.geometry}
                material={materials.CUIR}
              />
              <mesh
                name="Object_50"
                geometry={nodes.Object_50.geometry}
                material={materials.material_21}
              />
              <mesh
                name="Object_51"
                geometry={nodes.Object_51.geometry}
                material={materials["Material.013"]}
              />
              <mesh
                name="Object_52"
                geometry={nodes.Object_52.geometry}
                material={materials.PLAS}
              />
            </group>
            <group name="Seats_9" position={[0, -2.502, 0]} scale={1.953}>
              <mesh
                name="Object_54"
                geometry={nodes.Object_54.geometry}
                material={materials["Material.013"]}
              />
              <mesh
                name="Object_55"
                geometry={nodes.Object_55.geometry}
                material={materials.material_19}
              />
              <mesh
                name="Object_56"
                geometry={nodes.Object_56.geometry}
                material={materials.Carbon_R}
              />
              <mesh
                name="Object_57"
                geometry={nodes.Object_57.geometry}
                material={materials.material_27}
              />
              <mesh
                name="Object_58"
                geometry={nodes.Object_58.geometry}
                material={materials.material_21}
              />
            </group>
          </group>
          <group
            name="moteur_11"
            position={[0.228, 4.92, 6.973]}
            rotation={[-Math.PI, 1.545, -Math.PI]}
            scale={0.527}
          >
            <mesh
              name="Object_60"
              geometry={nodes.Object_60.geometry}
              material={materials.plastique}
            />
            <mesh
              name="Object_61"
              geometry={nodes.Object_61.geometry}
              material={materials.chrome}
            />
          </group>
          <group name="KLM_26" position={[0.001, -0.001, 0]}>
            <mesh
              name="Object_89"
              geometry={nodes.Object_89.geometry}
              material={materials.Glass}
            />
            <mesh
              name="Object_90"
              geometry={nodes.Object_90.geometry}
              material={materials.material_33}
            />
            <mesh
              name="Object_91"
              geometry={nodes.Object_91.geometry}
              material={materials.GLS_AR}
            />
            <mesh
              name="Object_92"
              geometry={nodes.Object_92.geometry}
              material={materials.material_36}
            />
          </group>
          <group name="CR_27">
            <mesh
              name="Object_94"
              geometry={nodes.Object_94.geometry}
              material={materials.Carbon_R}
            />
            <mesh
              name="Object_95"
              geometry={nodes.Object_95.geometry}
              material={materials.Carbon_M}
            />
            <mesh
              name="Object_96"
              geometry={nodes.Object_96.geometry}
              material={materials.Metal_C}
            />
            <mesh
              name="Object_97"
              geometry={nodes.Object_97.geometry}
              material={materials.LIGT_RED}
            />
            <mesh
              name="Object_98"
              geometry={nodes.Object_98.geometry}
              material={materials.LIGT_BLC}
            />
            <mesh
              name="Object_99"
              geometry={nodes.Object_99.geometry}
              material={materials.DTL_FER}
            />
            <mesh
              name="Object_100"
              geometry={nodes.Object_100.geometry}
              material={materials.MIROR}
            />
            <mesh
              name="Object_101"
              geometry={nodes.Object_101.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Object_102"
              geometry={nodes.Object_102.geometry}
              material={materials.CENTENARIO}
            />
            <mesh
              name="Object_103"
              geometry={nodes.Object_103.geometry}
              material={materials["Material.020"]}
              material-color={snap.items["Material.020"]}
              onPointerOver={handlerPointerOver}
              onPointerOut={handlerPointerOut}
              onPointerMissed={() => (colorState.current = "")}
              onClick={handlerCarMaterialClick}
            />
            <mesh
              name="Object_104"
              geometry={nodes.Object_104.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              name="Object_105"
              geometry={nodes.Object_105.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              name="Object_106"
              geometry={nodes.Object_106.geometry}
              material={materials.material_0}
            />
          </group>
          <group name="SDC_28">
            <mesh
              name="Object_108"
              geometry={nodes.Object_108.geometry}
              material={materials.material_32}
            />
          </group>
          <group name="CR003_29">
            <mesh
              name="Object_110"
              geometry={nodes.Object_110.geometry}
              material={materials.Carbon_M}
            />
            <mesh
              name="Object_111"
              geometry={nodes.Object_111.geometry}
              material={materials["Material.020"]}
              material-color={snap.items["Material.020"]}
            />
            <mesh
              name="Object_112"
              geometry={nodes.Object_112.geometry}
              material={materials.material_0}
            />
          </group>
        </group>
      </group>

      <CarDoorSign onClick={handlerCarDoorClick} />
    </>
  );
}

const CarDoorSign = memo((props: { onClick?: (...props: any) => void }) => {
  const { state } = useCarCtx();

  return (
    <>
      <AngleLimitByHtml
        position={[1, 0.8, -0.2]}
        distanceFactor={3}
        minHorizontalAngle={Math.PI * 0.1}
        maxHorizontalAngle={Math.PI * 0.9}
        minVerticalAngle={Math.PI / 5}
        maxVerticalAngle={Math.PI / 2}
      >
        <Sign
          color="#fff"
          onClick={props?.onClick}
          style={{
            display: state.carDoorOpen ? "none" : "flex",
          }}
        />
      </AngleLimitByHtml>

      <AngleLimitByHtml
        position={[-1, 0.8, -0.2]}
        distanceFactor={3}
        minHorizontalAngle={-Math.PI * 1.9}
        maxHorizontalAngle={-Math.PI * 0.1}
        minVerticalAngle={Math.PI / 5}
        maxVerticalAngle={Math.PI / 2}
      >
        <Sign
          color="#fff"
          onClick={props?.onClick}
          style={{
            display: state.carDoorOpen ? "none" : "flex",
          }}
        />
      </AngleLimitByHtml>
    </>
  );
});

useGLTF.preload("/models/lamborghini_centenario_lp-770_baby_blue_sdc.glb");
