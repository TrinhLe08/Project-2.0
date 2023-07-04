import Sub from "./sub.png";

import Img1 from "../SubComponent/Img1";
import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";

import { useState, useEffect, useRef } from "react";

export default function ImgSlide() {
  const Vip = useContext(VipContext);

  return (
    <div
      className="ImgSlide"
      style={{ transform: `translateX(-${Vip.img}px)` }}
    >
      {Vip.advertiseImg.map((img, index) => (
        <Img1 Img={img} index={index} />
      ))}
    </div>
  );
}
