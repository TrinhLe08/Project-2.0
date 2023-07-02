import React from "react";

import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";
import Img1 from "../SubComponent/Img1";

import Header from "../Header/Header";

export default function AboutUs() {
  const Vip = useContext(VipContext);

  return (
    <div>
      <div className="About" id="routingComponent">
        <Header></Header>
        {Vip.subAbout.map((about, index) => (
          <Img1 Img={about} index={index} />
        ))}
      </div>
    </div>
  );
}
