import { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
export const Scroll = ({ start }) => {
  const [scroll, setScroll] = useState(0);
  const [[x, y], setXY] = useState([0, 0]);
  const [isEnd, setEnd] = useState(false);
  useFrame((state) => {
    if (!start) {
      state.camera.position.z -= scroll;
    }
    if (state.camera.position.z <= -350) {
      if (!isEnd)
        gsap.to("#modal", {
          opacity: 1,
          display: "block",
          transform: "translateY(0)",
          duration: 3,
        });
      setEnd(true);
    } else {
      if (isEnd)
        gsap.to("#modal", {
          opacity: 0,
          display: "none",
          transform: "translateY(100vh)",
          duration: 3,
        });
      setEnd(false);
    }
    const desY = 1 / 2 - x / window.innerWidth;
    const desX = 1 / 2 - y / window.innerHeight;
    state.camera.rotation.y = desY / 3;
    state.camera.rotation.x = desX / 3;
    setScroll((scroll) => scroll * 0.9);
  });

  useEffect(() => {
    window.addEventListener("mousemove", (ev) => {
      setXY([ev.clientX, ev.clientY]);
    });
    window.addEventListener("wheel", (ev) => {
      setScroll(ev.deltaY * 0.03);
    });
  }, []);
  return null;
};
