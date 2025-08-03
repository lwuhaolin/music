import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@ant-design/v5-patch-for-react-19";
import "./index.css";
import "./assets/less/index.less";

import App from "./App";
import { Provider } from "react-redux";
import store from "@/store";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
