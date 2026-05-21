import React from "react";
import { useAnimationStore } from "../store/animationStore";

export const PropertiesPanel: React.FC = () => {
  const [state, dispatch] = useAnimationStore();
  const selected = state.layers.find(l => l.id === state.selectedLayerId);

  return (
    <div style={{width: 280, borderLeft: "1px solid #ccc", padding: 20, background: "#fafafa"}}>
      <strong>Propriétés GSAP</strong>
      {selected ? (
        <div>
          <div>Nom : <input value={selected.name} onChange={e => {}} /></div>
          {/* Ajoute d’autres champs pour x, y, scale... */}
        </div>
      ) : (
        <div>Sélectionne un calque</div>
      )}
    </div>
  );
};
