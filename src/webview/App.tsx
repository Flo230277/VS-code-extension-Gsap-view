import React from "react";
import { Editor } from "./components/Editor";

export const App: React.FC = () => (
  <div style={{ padding: 24 }}>
    <h2>GSAP Animation Studio</h2>
    <Editor />
  </div>
);

export default App;
