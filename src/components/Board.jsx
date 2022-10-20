import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
const hovered = {};
export const Board = ({ img, position, onClick, shouldLookAt }) => {
  const ref = useRef();
  const [z, setZ] = useState(0);
  const [backCamera, setBackCamera] = useState(null);
  const getY = (diff) => {
    if (diff < 0) {
      return -1000;
    }
    if (diff < 50) {
      return ((50 * 50 * 50) / (diff * diff * diff)) * -20;
    } else if (diff < 100) {
      return -20;
    } else {
      return ((diff * diff * diff) / (100 * 100 * 100)) * -20;
    }
  };
  useFrame((state) => {
    if (!ref.current) {
      return;
    }
    for (
      let idx = 0;
      idx < ref.current.geometry.attributes.position.count;
      idx++
    ) {
      const row = idx % 150;
      ref.current.geometry.attributes.position.array[3 * idx + 2] =
        Math.sin(state.clock.elapsedTime + (row / 150) * Math.PI * 2) +
        Math.sin((state.clock.elapsedTime + (row / 150) * Math.PI * 2) * 3);
    }
    if (shouldLookAt) {
      if (!backCamera) setBackCamera(state.camera.position);
      state.camera.position.x = -20;
      state.camera.position.z = z + 60;
      state.camera.needsUpdate = true;
    } else if (backCamera) {
      state.camera.position.x = 0;
      state.camera.position.y = backCamera.y;
      state.camera.position.z = backCamera.z + 40;
      state.camera.rotation.x = 0;
      state.camera.rotation.y = 0;
      state.camera.rotation.z = 0;
      setBackCamera(null);
    }
    ref.current.rotation.x = shouldLookAt
      ? 0
      : state.camera.position.z - ref.current.position.z > 150
      ? -10
      : -1000 / Math.pow(state.camera.position.z - ref.current.position.z, 2);
    ref.current.position.y = shouldLookAt
      ? 0
      : getY(state.camera.position.z - ref.current.position.z);
    ref.current.geometry.attributes.position.needsUpdate = true;
    const before = hovered[img];
    hovered[img] = state.raycaster.intersectObject(ref.current, false)?.length;
    if (before !== hovered[img]) {
      document.body.style.cursor = Object.values(hovered).some((val) => !!val)
        ? "pointer"
        : !!before
        ? "auto"
        : "pointer";
    }
  });
  const map = useTexture(img);
  return (
    <mesh
      ref={ref}
      position={position}
      rotation={[0, 0, 0]}
      onClick={(ev) => {
        onClick();
        setZ(ev.eventObject.position.z);
      }}
    >
      <planeGeometry args={[100, 60, 300, 180]} />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};
