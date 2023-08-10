import { useTexture } from "@react-three/drei";

export function Pedestal() {
  // const [colorTexure, aoTexture, noramlTexture, roughnessTexture] = useTexture([
  //   "material/Tiles129B_1K-JPG/Tiles129B_1K_Color.jpg",
  //   "material/Tiles129B_1K-JPG/Tiles129B_1K_AmbientOcclusion.jpg",
  //   "material/Tiles129B_1K-JPG/Tiles129B_1K_NormalGL.jpg",
  //   "material/Tiles129B_1K-JPG/Tiles129B_1K_Roughness.jpg",
  // ]);

  return (
    <>
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[20, 20, 0.05, 80]} />
        <meshStandardMaterial color={"#272727"} />
      </mesh>

      {/* <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          roughness={0.5}
          map={colorTexure}
          aoMap={aoTexture}
          normalMap={noramlTexture}
          // roughnessMap={roughnessTexture}
        />
      </mesh> */}
    </>
  );
}
