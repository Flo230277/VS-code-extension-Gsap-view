import React from "react";

/**
 * Timeline visuelle (Scaffold PRO Webflow-like)
 * Drag, zoom, multi-layer, insertion possible, base scalable à l’infini.
 */
export const Timeline: React.FC = () => {
  // Pour simplifier, une timeline statique évolutive (clé = ms)
  const layers = [
    { id: 1, name: "Carré bleu", color: "#34e0ff" },
    { id: 2, name: "Carré violet", color: "#9d34ff" }
  ];
  const timeScale = Array.from({length: 20}, (_, i) => i * 250); // échelle ms

  return (
    <div style={{ padding: 20, border: '1px solid #999', background: '#fff' }}>
      <div style={{ marginBottom: 8, fontWeight: 'bold' }}>Timeline (démo structure drag/zoom)</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: 95, fontSize: 13, color: '#666' }}>Layers</div>
        <div style={{ flex: 1, display: 'flex', gap: 15 }}>
          {timeScale.map(t => (
            <div key={t} style={{ minWidth: 30, fontSize: 10, color: '#aaa', textAlign: 'center' }}>{t}ms</div>
          ))}
        </div>
      </div>
      {layers.map((layer, li) => (
        <div key={layer.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
          <div style={{ width: 95, background: layer.color, color: '#fff', padding: 6, borderRadius: 6 }}>
            {layer.name}
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', height: 22, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 60, top: 5, width: 30, height: 12, background: layer.color, borderRadius: 4, opacity: .7 }} />
            {/* A brancher : Drag, resize, zoom, keyframes dynamiques ici */}
          </div>
        </div>
      ))}
      <div style={{ marginTop: 12, fontSize: 12, color: '#4d4', fontWeight: 'bold' }}>
        (Drag/zoom/édition multi-couche : structure prête à brancher logique avancée)
      </div>
    </div>
  );
};
