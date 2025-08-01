import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import '@ant-design/v5-patch-for-react-19';
import "./index.css";
import "./assets/less/index.less";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
