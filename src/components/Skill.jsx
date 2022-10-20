import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import html2canvas from "html2canvas";
export const Skill = ({ id, position, rotation, title }) => {
  const ref = useRef();
  const divToDisplay = document.getElementById(id);
  const [canvas, setCanvas] = useState(null);
  useEffect(() => {
    async function fetchCanvas() {
      const canvas = await html2canvas(divToDisplay, {
        backgroundColor: "null",
        onclone: function (clonedDoc) {
          clonedDoc.getElementById(id).style.display = "block";
        },
      });
      setCanvas(canvas);
    }
    fetchCanvas();
    // eslint-disable-next-line
  }, []);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.z =
      state.camera.position.z - position[2] > 150
        ? 1000
        : Math.min(position[2], state.camera.position.z - 100);
  });
  return canvas ? (
    <mesh
      ref={ref}
      position={position}
      rotation={rotation}
      onPointerEnter={(ev) => {
        document.getElementById("tooltip").style.left = ev.clientX + "px";
        document.getElementById("tooltip").style.top = ev.clientY + "px";
        document.getElementById("tooltip").innerText = title;
      }}
      onPointerLeave={() => {
        document.getElementById("tooltip").style.left = "-30px";
        document.getElementById("tooltip").style.top = "-30px";
        document.getElementById("tooltip").innerText = "";
      }}
    >
      <planeGeometry args={[10, 10, 30, 30]} />
      <meshBasicMaterial transparent={true}>
        <canvasTexture image={canvas} attach="map" color="green" />
      </meshBasicMaterial>
    </mesh>
  ) : null;
};
