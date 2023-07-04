import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import $ from "jquery";
export default function PopUp({ Pay }) {
  const Vip = useContext(VipContext);

  const BackButton = () => {
    Vip.clickPop()
    window.history.back();
    setTimeout(() => {
      const scrollTask = $(".Vip1").offset().top;

      $("html, body").animate(
        {
          scrollTop: scrollTask,
        },
        1
      );
    }, 100);
  };

  return (
    <>
      {Vip.pop ? (
        <div id="overlay">
          <div className="pop">
            <button className="button" onClick={Vip.clickPop}>
              X
            </button>

            <HiOutlineCheckCircle className="stick" />

            <h1 className="h1">Purchase Successfully</h1>

            <p className="p">Thanks you {Pay.name} for support UI KIT PRO .</p>

            <h2 className="h2">
              Total Payment :{" "}
              {Vip.off ? `${Vip.TotalPrice}` : `${Vip.TotalPriceOff}`}$
            </h2>

            <p className="p1">
              Transaction will be done in gmail {Pay.email} in next on 24 hours
              .
            </p>

            <Link to="/Project-2.0" className="back">
              <button className="back" onClick={BackButton}>
                Back
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
