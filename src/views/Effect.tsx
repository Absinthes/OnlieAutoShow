import { useLoader } from "@react-three/fiber";
import { Bloom, EffectComposer, LUT, SSR } from "@react-three/postprocessing";
import { useControls } from "leva";
import { LUTCubeLoader } from "postprocessing";

export function Effect() {
  // @ts-ignore
  const texture = useLoader(LUTCubeLoader, "/lut/DwlG-F-6800-STD.cube");

  const { enabled } = useControls("Effect", {
    enabled: false,
  });

  return (
    <EffectComposer enabled={enabled}>
      {/* <SSR /> */}
      <Bloom
        luminanceThreshold={1}
        mipmapBlur
        luminanceSmoothing={0}
        intensity={1.75}
      />
    </EffectComposer>
  );
}
