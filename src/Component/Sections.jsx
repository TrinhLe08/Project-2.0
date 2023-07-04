import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";

import Img1 from "../SubComponent/Img1";

export default function Vip6() {
  const Vip = useContext(VipContext);

  return (
    <div className="Vip6" ref={Vip.Section}>
      <div className="div">
        <h1 className="h1">
          {" "}
          {!Vip.vietSub
            ? "Các Thành Phần Bạn Sẽ Thích"
            : "Sections you will love"}
        </h1>
        <p className="p">
          {" "}
          {!Vip.vietSub
            ? "Xây dựng các trang nhanh chóng bằng cách sử dụng các phần được tạo sẵn! Từ đầu trang đến chân trang, bạn sẽ có thể chọn kết hợp tốt nhất cho dự án của mình. Chúng tôi đã tạo nhiều phần để bạn tập hợp và tùy chỉnh thành các trang ví dụ pixel hoàn hảo."
            : " Build pages in no time using pre-made sections! From headers to footers,  you will be able to choose the best combination for your project. We have created multiple   sections for you to put together and customise into pixel perfect example pages."}
        </p>
        <button className="button">
          <a href="https://main--glittery-madeleine-334d88.netlify.app/"> {!Vip.vietSub ? "Xem tất cả" : "View All Sections"}</a>
        </button>
      </div>

      <div className="img">
        {Vip.Vip6.map((img, index) => (
          <Img1 index={index} Img={img} key={index} />
        ))}
      </div>
    </div>
  );
}
