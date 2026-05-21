import React from "react";
import { useAnimationStore } from "../store/animationStore";

export const LayerList: React.FC = () => {
  const [state, dispatch] = useAnimationStore();
  return (
    <div style={{width: 180, borderRight: "1px solid #ccc", background: "#fcfcfc", padding: 12}}>
      <strong>Éléments</strong>
      <ul>
        {state.layers.map(l => (
          <li key={l.id}>{l.name}</li>
        ))}
      </ul>
    </div>
  );
};
