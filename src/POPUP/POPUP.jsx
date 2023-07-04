import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";

export default function POPUP() {
  const Vip = useContext(VipContext);

  window.alert = function (value, timeout = null) {
    const alert = document.createElement("div");
    const alertButton = document.createElement("button");
    alert.classList.add("alert");
    alertButton.classList.add("buttonAlert");
    alertButton.innerText = "Ok";
    alert.innerText = value;
    document.body.appendChild(alert);
    alert.appendChild(alertButton);
    alertButton.addEventListener("click", () => {
      alert.remove();
    });
    setTimeout(() => {
      alert.remove();
    }, 3000);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email invalidate !")
        .required("Email cannot be blank !"),
    }),
    onSubmit: (values) => {
      Vip.SETPOP();
      Vip.SETOFF();
      setTimeout(() => {
        alert(
          "NOW UI KIT PRO Thank You For Confirming Gmail, Now You Can Buy Our Designs For 3% Cheaper !"
        );
      }, 100);
    },
  });

  return (
    <div className="POPUP" id="overlay">
      <div className="subPopUp">
        <button className="X" onClick={Vip.SETPOP}>
          X
        </button>
        <h1 className="h1">
          WELCOM <span className="span1">TO UI KIT Pro</span>{" "}
        </h1>
        <h3 className="h3">
          CONFIRM <span className="span2">GMAIL IS 3% OFF </span> WHEN <span className="span3">
          BUYING
          YOUR DESIGN :
          </span>
        </h3>
        <form className="form" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Email"
            id="input"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="p">{formik.errors.email}</p>
          )}
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
