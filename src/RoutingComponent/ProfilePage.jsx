import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";
import Img1 from "../SubComponent/Img1";

import Header from "../Header/Header";

export default function ProfilePage() {
  const Vip = useContext(VipContext);

  return (
    <div className="ProfilePage" id="routingComponent">
      <Header></Header>
      {Vip.subProfile.map((profile, index) => (
        <Img1 Img={profile} index={index} />
      ))}
    </div>
  );
}
