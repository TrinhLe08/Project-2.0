import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";

export default function SubPay({ Pay, index }) {
  const Vip = useContext(VipContext);

  const handleAddClick = () => {
    console.log(index);
    Vip.DELETE(Vip.array, index);
  };

  return (
    <div className="subPay">
      <div className="img">
        <img src={Pay.img} alt="" className="img" />
      </div>

      <div className="div">
        <h3 className="name">{Pay.name}</h3>
        <p className="p">{Pay.sub}</p>
        <p className="p2">{Pay.free}</p>
        <h3 className="money">{Pay.money}$</h3>
      </div>

      {Pay.delete ? (
        <button className="delete" onClick={handleAddClick}>
          {" "}
          {Pay.delete}
        </button>
      ) : null}
    </div>
  );
}
