import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

// 초기 css는 루트 컴포넌트에서 불러온다.
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
