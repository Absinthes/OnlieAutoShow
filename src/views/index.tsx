import {
  AccumulativeShadows,
  Center,
  ContactShadows,
  Environment,
  Float,
  Html,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  Stats,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Car } from "./Car";
import { Depth } from "@react-three/postprocessing";
import { useRef } from "react";
import { BackSide, Color } from "three";
import { Effect } from "./Effect";
import { useControls } from "leva";
import { Pedestal } from "./Pedestal";
import { PerformancePlane } from "@/components/PerformancePlane";
import { AngleLimit } from "@/components/AngleLimit";
import { Wordbox } from "@/components/Wordbox";
import { AngleLimitByHtml } from "@/components/AngleLimit/Html";
import { Line } from "./components/Line";
import { Lines } from "./Lines";
import { Labels } from "./Label";

export function Index() {
  const { color } = useControls({
    color: "#323334",
  });
  return (
    <>
      <Canvas
        camera={{
          position: [3.5349923362521283, 2.335183880146674, 2.5772356186885763],
        }}
      >
        <Stats />
        <color attach="background" args={[color]} />
        <ambientLight />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          makeDefault
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Scene />
        {/* <Effect /> */}
        <PerformancePlane />
      </Canvas>
    </>
  );
}

function Scene() {
  return (
    <>
      <ContactShadows
        resolution={1024}
        frames={1}
        scale={15}
        blur={0.5}
        opacity={0.5}
        far={20}
      />
      <Lightformers />
      <spotLight angle={1} position={[-80, 200, -100]} intensity={1} />
      <Env />
      <Pedestal />
      <Center top>
        <Car />
      </Center>
      <Lines />
      <Labels />
    </>
  );
}

function Env() {
  const texture = useTexture("/image/Scene_1108.jpg");

  // const { position1, position2 } = useControls({
  //   position1: { value: [0, 0.1, 0], step: 0.1 },
  //   position2: { value: [0, 0.1, 0], step: 0.1 },
  // });

  return (
    <>
      {/* <mesh scale={3} position={position1} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <mesh scale={3} position={position2} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh> */}
      <mesh position={[0, 4, 0]}>
        <sphereGeometry args={[15, 32, 32]} />
        <meshStandardMaterial map={texture} side={BackSide} />
      </mesh>
    </>
  );
}

function Lightformers() {
  return (
    <>
      <Environment resolution={512}>
        {/* Ceiling */}
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -9]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 0]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 9]}
          scale={[10, 1, 1]}
        />
        {/* Sides */}
        <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-50, 2, 0]}
          scale={[100, 2, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={-Math.PI / 2}
          position={[50, 2, 0]}
          scale={[100, 2, 1]}
        />
        {/* Key */}
        <Lightformer
          form="ring"
          color="red"
          intensity={10}
          scale={2}
          position={[10, 5, 10]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
    </>
  );
}
