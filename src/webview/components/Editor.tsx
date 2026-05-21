import React, { useRef } from "react";
import { exportHtmlJs } from "../utils/export";

export const Editor: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    if ((window as any).gsap && boxRef.current) {
      (window as any).gsap.to(boxRef.current, { x: 200, rotation: 360, duration: 1 });
    }
  };

  const handleExport = () => {
    const result = exportHtmlJs();
    alert("Export:\n" + result.js);
  };

  return (
    <div>
      <button onClick={handlePlay}>Animer le carré</button>
      <button onClick={handleExport} style={{ marginLeft: 16 }}>Exporter</button>
      <div
        ref={boxRef}
        style={{ width: 100, height: 100, background: "limegreen", marginTop: 32 }}
      />
    </div>
  );
};
