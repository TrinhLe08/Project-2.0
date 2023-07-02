import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";

export default function Vip1() {
  const Vip = useContext(VipContext);

  return (
    <div className="Vip1">
      <h1 className="h1">NOW UI KIT </h1>
      <button className="button">PRO</button>
      <p className="p1">
        {!Vip.vietSub
          ? "Bộ giao diện người dùng Bootstrap 4 cao cấp tuyệt đẹp."
          : "A beautiful premium Bootstrap 4 UI Kit."}
      </p>
      <div className="img">
        <img
          src="https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/nuk-pro-buildings.651576ab.png"
          alt=""
          className="img"
        />
      </div>
    </div>
  );
}
