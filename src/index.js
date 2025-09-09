import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div style={{padding:20,fontFamily:"Segoe UI"}}>ElderX app bootstrapped</div>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
