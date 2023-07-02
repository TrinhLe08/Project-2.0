import { useState, useEffect, useRef } from "react";
import $ from "jquery";

import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

import LogoVip from "../Logo/LogoVip.png";

export default function Header() {
  const Vip = useContext(VipContext);

  const [sub, setSub] = useState(true);

  const Routing = useRef(null);

  const location = useLocation();

  const Header = useRef(null);
  const Menu = useRef(null);
  const A = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      Header.current = this.document.querySelector(".header");
      Menu.current = this.document.querySelectorAll("#menu");
      A.current = this.document.querySelector(".a");
      Header.current.classList.toggle("Scroll", window.scrollY > 300);
      Menu.current.forEach((value, index) => {
        Menu.current[index].classList.toggle("Scroll", window.scrollY > 300);
      });
    });
  }, []);

  const Click = (
    Width,
    Vip,
    ScrollTop1,
    ScrollBody,
    ScrollTop2,
    ScrollTop3,
    ScrollTop4
  ) => {
    if (window.innerWidth < Width) {
      if (location.pathname != "/Project-2.0") {
        window.history.back();
        setTimeout(() => {
          const scrollTask = $(Vip).offset().top + ScrollTop1;

          $("html, body").animate(
            {
              scrollTop: scrollTask,
            },
            ScrollBody
          );
        }, ScrollTop1);

        return;
      }

      const scrollTask = $(Vip).offset().top - ScrollTop2;

      $("html, body").animate(
        {
          scrollTop: scrollTask,
        },
        ScrollTop3
      );

      setSub(!sub);
      return;
    }

    if (location.pathname != "/Project-2.0") {
      window.history.back();
      console.log(12);
      setTimeout(() => {
        const scrollTask = $(Vip).offset().top + ScrollTop1;

        $("html, body").animate(
          {
            scrollTop: scrollTask,
          },
          ScrollBody
        );
      }, ScrollTop1);

      return;
    }

    const scrollTask = $(Vip).offset().top + ScrollTop4;

    $("html, body").animate(
      {
        scrollTop: scrollTask,
      },
      ScrollBody
    );
  };

  const ClickHome = () => {
    let Home = ".Vip1";

    Click(700, Home, 5, 500, 90, 900, -20);
  };

  const ClickSections = () => {
    let Section = ".Vip6";

    Click(700, Section, 100, 500, -90, 900, 100);
  };

  const ClickPages = () => {
    let Pages = ".Vip7";

    Click(700, Pages, 100, 500, 90, 900, 100);
  };

  const ClickDemo = () => {
    let Demo = ".Vip8";

    Click(700, Demo, 1, 500, -90, 900, -20);
  };

  const ClickIcon = () => {
    let Icon = ".Vip9";

    Click(700, Icon, 1, 500, 90, 900, -50);
  };

  const ClickBuy = () => {
    let Buy = ".Vip12";

    Click(700, Buy, 10, 500, 90, 900, 10);
  };

  const ClickSub = () => {
    if (window.innerWidth < 700) {
      setSub(!sub);
      return;
    }
  };

  return (
    <div
      className="header"
      style={sub ? { marginTop: "0px" } : { marginTop: "-495px" }}
    >
      <div className="Topic">
        <a href="#" className="a">
          NOW UI KIT Pro
        </a>
      </div>
      <div className="logo">
        <a href="#" className="a">
          <img src={LogoVip} alt="" className="logo" />
        </a>
      </div>

      <div className="menu">
        <p className="home" id="menu" onClick={ClickHome}>
          {" "}
          {!Vip.vietSub ? "Trang Chủ" : "Home"}
        </p>
        <p className="sections" id="menu" onClick={ClickSections}>
          {!Vip.vietSub ? "Thành Phần Chính" : "Sections"}
        </p>
        <p className="pages" id="menu" onClick={ClickPages}>
          {!Vip.vietSub ? "Trang Tham Khảo" : "Example Pages"}
        </p>
        <p className="demo" id="menu" onClick={ClickDemo}>
          {!Vip.vietSub ? "Minh Họa GitHGub" : "Demo GitHub"}
        </p>
        <p className="icon" id="menu" onClick={ClickIcon}>
          {!Vip.vietSub ? "Biểu Tượng Tùy Chỉnh" : "Custom Icons"}
        </p>
        <p className="buy" id="menu" onClick={ClickBuy}>
          {!Vip.vietSub ? "Mua " : "Buy Now"}
        </p>
        <select className="Language" id="menu" onChange={Vip.Translate}>
          <option value="en" className="English" id="menu">
            English
          </option>
          <option value="vi" className="VietNam" id="menu">
            Việt Nam
          </option>
        </select>
        <p className="sub" id="submenu" onClick={ClickSub}>
          {sub ? "⥠" : "⥡"}
        </p>
      </div>
    </div>
  );
}
