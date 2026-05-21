import React from "react";
import { useAnimationStore } from "../store/animationStore";

export const Canvas: React.FC = () => {
  const [state] = useAnimationStore();
  return (
    <div style={{flex: 1, background: "#eee", margin: 20, minHeight: 300, position: "relative"}}>
      <strong>Aperçu GSAP – Dépose/drag tes éléments ici</strong>
      {state.layers.map(layer => (
        <div
          key={layer.id}
          style={{
            position: "absolute",
            left: (layer.keyframes[0]?.props.x || 0),
            top: (layer.keyframes[0]?.props.y || 0),
            width: 100,
            height: 100,
            background: layer.type === "div" ? "#69f" : undefined,
            color: "#fff"
          }}
        >
          {layer.name}
        </div>
      ))}
    </div>
  );
};
