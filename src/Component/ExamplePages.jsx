import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";

import Img2 from "../SubComponent/Img2";

export default function Vip7() {
  const Vip = useContext(VipContext);

  return (
    <div className="Vip7">
      <div className="div">
        <h1 className="h1">
          {!Vip.vietSub ? "Các Trang Tham Khảo" : "  Example Pages"}
        </h1>
        <p className="p">
          {!Vip.vietSub
            ? "Hãy quên việc xây dựng mọi thứ từ đầu. Từ các trang đích đến thương mại điện tử hoặc các trang blog, bạn sẽ có thể bắt đầu quá trình phát triển của mình. Cho khách hàng của bạn xem một nguyên mẫu nhanh và lấy cảm hứng cho dự án tiếp theo của bạn!"
            : "  Forget about building everything from scratch.From landing pages to e-commerce or blog pages, you will be able jump start your development.  Show your clients a quick prototype and get  inspired for your next project!"}
        </p>
      </div>

      <div className="logPages">
        {Vip.Vip7.map((img, index) => (
          <Img2 index={index} ImgV={img} key={index} />
        ))}
      </div>
    </div>
  );
}
