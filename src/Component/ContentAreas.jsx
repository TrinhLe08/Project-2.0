import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";

import Img1 from "../SubComponent/Img1";

export default function Vip5() {
  const Vip = useContext(VipContext);

  return (
    <div className="Vip5">
      <div className="img">
        {Vip.Vip5.map((img, index) => (
          <Img1 index={index} Img={img} key={index} />
        ))}
      </div>
      <div className="div">
        <h1 className="h1">
          {" "}
          {!Vip.vietSub ? "Khu vực nội dung" : "Content Areas"}
        </h1>
        <p className="p1">
          {" "}
          {!Vip.vietSub
            ? "DÀNH CHO NHỮNG KHU VỰC CẦN THÊM KHÔNG GIAN"
            : "FOR AREAS THAT NEED MORE SPACE"}
        </p>
        <p className="p2">
          {" "}
          {!Vip.vietSub
            ? "Chúng tôi đã xem xét nhiều trường hợp sử dụng và đưa ra một số lĩnh vực cụ thể cho bạn. Nếu bạn cần các yếu tố như bảng, nhận xét, khu vực mô tả, tab và nhiều yếu tố khác, chúng tôi sẽ hỗ trợ bạn. Chúng đẹp và dễ sử dụng cho người dùng cuối điều hướng trang web của bạn."
            : "  We took into consideration multiple use cases and came up with some specific  areas for you. If you need elements such as tables, comments, description areas, tabs and many  others, we arae got you covered. They are beautiful and easy to use for the end user navigating   your website."}
        </p>
      </div>
    </div>
  );
}
