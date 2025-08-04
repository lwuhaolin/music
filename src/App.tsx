import routes from "@/router";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import "./App.css";
import AppPlayerBar from "@/pages/player/appPlayerBar";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#ffffff" }}>
      <Header />
      {/*懒加载，如果没有加载完毕，就显示loading,可以传组件,站位*/}
      <Suspense fallback={"loading"}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <Footer />

      {/* 播放器工具栏*/}
      <AppPlayerBar />
    </div>
  );
}

export default App;
