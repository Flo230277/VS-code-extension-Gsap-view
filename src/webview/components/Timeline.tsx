import React from "react";
import { useAnimationStore } from "../store/animationStore";

export const Timeline: React.FC = () => {
  const [state, dispatch] = useAnimationStore();
  // TODO: afficher l'ensemble des layers et keyframes, gestion drag and drop, zoom…
  return (
    <div style={{height: 120, borderTop: "1px solid #ccc", background: "#f9f9f9"}}>
      <strong>Timeline – à compléter (keyframes, pistes, zoom, drag...)</strong>
      <pre style={{fontSize: 12, overflow: "auto"}}>{JSON.stringify(state.layers, null, 2)}</pre>
    </div>
  );
};
