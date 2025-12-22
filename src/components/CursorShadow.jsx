import { useEffect, useRef } from "react";

export default function CursorShadow() {
  const shadowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let x = 0;
    let y = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      x += (mouseX - x) * 0.52;
      y += (mouseY - y) * 0.52;

      if (shadowRef.current) {
        shadowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={shadowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        borderRadius: "50%",
        pointerEvents: "none",
        background: "rgb(255, 255, 255)",
        filter: "blur(90px)",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
}
