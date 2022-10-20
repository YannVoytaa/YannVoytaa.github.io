import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
export const Color = () => {
  const { scene } = useThree();
  const texture = useTexture("/galaxy.jpeg");
  scene.background = texture;
  return null;
};
