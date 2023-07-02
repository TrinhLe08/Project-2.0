import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";

export default function SubPay({ Buy }) {
  const Vip = useContext(VipContext);

  const handleAddClick = () => {
    Vip.SETARRAY(Buy);
  };

  return (
    <div className="subBay">
      <div className="img">
        <img src={Buy.img} alt="" className="img" />
      </div>

      <div className="div">
        <h3 className="name">{Buy.name}</h3>
        <p className="money">{Buy.money}$</p>
        <button className="add" onClick={handleAddClick}>
          ADD
        </button>
      </div>
    </div>
  );
}
