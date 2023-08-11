import { Vector3 } from "three";
import { proxy } from "valtio";

export const origin = new Vector3();

export const colorState = proxy({
  state: false,
  current: "",
  items: { "Material.020": "#45C9FF" },
  pickerPosition: { left: 0, top: 0 },
});
