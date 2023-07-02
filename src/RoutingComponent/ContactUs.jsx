import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";

import Img1 from "../SubComponent/Img1";

import Header from "../Header/Header";

export default function ContactUs() {
  const Vip = useContext(VipContext);

  return (
    <div className="Contact" id="routingComponent">
      <Header></Header>

      {Vip.subContact.map((contact, index) => (
        <Img1 Img={contact} index={index} />
      ))}
    </div>
  );
}
