import React from "react";
import { Timeline } from "./components/Timeline";
import { Canvas } from "./components/Canvas";
import { PropertiesPanel } from "./components/PropertiesPanel";
import { Toolbar } from "./components/Toolbar";
import { LayerList } from "./components/LayerList";
import { AnimationStoreProvider } from "./store/animationStore";

const App: React.FC = () => (
  <AnimationStoreProvider>
    <div style={{display: "flex", height: "100vh", flexDirection: "column"}}>
      <Toolbar />
      <div style={{display: "flex", flex: 1}}>
        <LayerList />
        <Canvas />
        <PropertiesPanel />
      </div>
      <Timeline />
    </div>
  </AnimationStoreProvider>
);
export default App;
