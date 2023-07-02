import Img from "./imagesLoginPage/imgLogin.png";

import Header from "../Header/Header";

export default function LoginPage() {
  return (
    <div className="LoginPage" id="routingComponent">
      <Header></Header>
      <img
        src={Img}
        alt=""
        className="LoginPage"
        id="img1"
        style={{ height: "740px" }}
      />
    </div>
  );
}
