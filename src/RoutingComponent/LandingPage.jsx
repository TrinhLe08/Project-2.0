import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";
import Img1 from "../SubComponent/Img1";

import Header from "../Header/Header";

export default function LandingPage() {
  const Vip = useContext(VipContext);

  return (
    <div className="LandingPage" id="routingComponent">
      <Header></Header>
      {Vip.subLanding.map((landing, index) => (
        <Img1 Img={landing} index={index} />
      ))}
    </div>
  );
}
