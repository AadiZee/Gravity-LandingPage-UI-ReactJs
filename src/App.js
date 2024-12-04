import { useState, useEffect } from "react";
import NAV from "./components/nav/nav";
import Header from "./components/header/header";
import Features from "./components/features/features";
import Featured from "./components/featured/featured";
import Skills from "./components/skills/skills";
import Staff from "./components/staff/staff";
import Team from "./components/team/team";
import Think from "./components/think/think";
import Stats from "./components/stats/stats";
import Testimonials from "./components/testimonials/testimonials";
import DesignCode from "./components/designcode/designcode";
import Relation from "./components/relation/relation";
import Train from "./components/train/train";
import Creative from "./components/creative/creative";
import MinimalCoder from "./components/minimalcoder/minimalcoder";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const resizeWindow = () => {
      // console.log('---X---', screenWidth)
      setScreenWidth(window?.innerWidth);
    };

    resizeWindow();

    window.addEventListener("resize", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="row w-100 flex-column align-items-center justify-content-between mx-auto min-vh-100">
        <NAV screenWidth={screenWidth} />

        <div className="p-0 flex-grow-1">
          <Header />
          <Features />
          <Featured />
          <Skills />
          <Staff />
          <Team />
          <Think />
          <Stats />
          <Testimonials />
          <DesignCode />
          <Relation />
          <Train />
          <Creative />
          <MinimalCoder />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
