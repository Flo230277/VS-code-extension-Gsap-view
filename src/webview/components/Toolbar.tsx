import React from "react";

export const Toolbar: React.FC = () => (
  <div style={{height: 48, borderBottom: "1px solid #ccc", display: "flex", alignItems: "center", padding: "0 16px", background: "#f5f5f5"}}>
    <button>Nouvel élément</button>
    <button>Exporter HTML/JS</button>
  </div>
);
