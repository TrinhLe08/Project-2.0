import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";

import { Link } from "react-router-dom";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import Img4 from "../SubComponent/Img4";
import Img5 from "../SubComponent/Img5";

import $ from "jquery";

export default function Vip12() {
  const Vip = useContext(VipContext);

  const ClickScroll = () => {
    setTimeout(() => {
      const scrollTask = $(".buy").offset().top - 1000;

      $("html, body").animate(
        {
          scrollTop: scrollTask,
        },
        100
      );
      return;
    }, 100);
  };

  return (
    <div className="Vip12">
      <div className="div1">
        {Vip.Vip12Img.map((sub, index) => (
          <Img4 SubImg={sub} index={index} />
        ))}
      </div>

      <div className="div2">
        <h1 className="h1">
          {" "}
          {!Vip.vietSub
            ? "Bạn đã sẵn sàng tải Now UI Kit PRO chưa ?"
            : "Ready to grab Now UI Kit PRO ?"}
        </h1>

        <button className="buttonBuy" onClick={ClickScroll}>
          <Link to="/Buy">{!Vip.vietSub ? "Mua Ngay" : "Buy Now"}</Link>
        </button>

        <p className="p">
          {" "}
          {!Vip.vietSub
            ? "Cảm ơn bạn đã ủng hộ chúng tôi!"
            : "Thank you for supporting us!"}
        </p>

        <div className="icon">
          {Vip.Vip12Icon.map((icon) => (
            <Img5 Icon={icon} key={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
