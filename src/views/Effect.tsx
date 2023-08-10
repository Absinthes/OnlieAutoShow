import { useLoader } from "@react-three/fiber";
import { Bloom, EffectComposer, LUT, SSR } from "@react-three/postprocessing";
import { LUTCubeLoader } from "postprocessing";

export function Effect() {
  // @ts-ignore
  const texture = useLoader(LUTCubeLoader, "/lut/DwlG-F-6800-STD.cube");

  return (
    <EffectComposer>
      {/* <SSR /> */}
      <Bloom
        luminanceThreshold={0.2}
        mipmapBlur
        luminanceSmoothing={0}
        intensity={1.75}
      />
    </EffectComposer>
  );
}
