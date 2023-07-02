import { useState, useEffect, useRef } from "react";

import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import ImgBank from "./Bank.png";

import ImgSlide from "./ImgSlide";

import SubPay from "./SubPay";
import SubBuy from "./SubBuy";

import { ThemeContext, VipContext } from "../Context/ThemeContext";
import { useContext } from "react";

import Sub from "./sub.png";

export default function Pay() {
  const Vip = useContext(VipContext);

  let Array2 = [
    {
      img: "https://secure.avangate.com/images/merchant/5d461a9f589b908d63d225c4859a0f1b/products/opt_nudp_thumbnail.jpg",
      name: "Now UI Dashboard PRO ",
      sub: "Selected options: (edit)",
      free: "Freelancer",
      delete: "Delete",
      money: 24.5,
    },
    {
      img: "https://secure.avangate.com/images/merchant/5d461a9f589b908d63d225c4859a0f1b/products/opt_nudp_react_thumbnail.jpg",
      name: "Now UI Dashboard PRO React",
      sub: "Selected options: (edit)",
      free: "Freelancer",
      delete: "Delete",
      money: 29.5,
    },
    {
      img: "https://secure.avangate.com/images/merchant/5d461a9f589b908d63d225c4859a0f1b/products/opt_nudp_vue_thumbnail.jpg",
      name: "Vue Now UI Dashboard PRO",
      sub: "Selected options: (edit)",
      free: "Freelancer",
      delete: "Delete",
      money: 29,
    },
  ];

  //------------------------------------------------------------------

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(5, "Your name must be least 5 characters !")
        .max(20, "Your name must be under 25 characters !")
        .required("Name cannot be left blank !"),
      email: Yup.string()
        .email("Email invalidate !")
        .required("Email cannot be blank !"),
      country: Yup.string().required("Please select a country !"),
    }),
    onSubmit: (values) => {
      Vip.clickPop();

      Vip.setPushPop(values);
    },
  });

  return (
    <div className="Pay">
      <div className="windowBoss">
        <div className="window">
          <h1 className="h1">
            {!Vip.vietSub ? "Thanh Toán An Toàn" : "Secure checkout"}
          </h1>
        </div>

        <div className="bank">
          <img src={ImgBank} alt="" className="bank" />
        </div>
      </div>

      {/* ------------ */}

      <div className="BigBoss">
        <div className="cart">
          {Vip.array.map((arr, index) => (
            <SubPay Pay={arr} index={index} />
          ))}

          <div className="total">
            {" "}
            {!Vip.vietSub ? "Tổng: " : "Total price:"}
            <span className="span">{Vip.Sum}$</span>
          </div>
        </div>

        <form className="form" onSubmit={formik.handleSubmit}>
          <label className="label" htmlFor="name">
            Full Name :{" "}
          </label>
          <input
            className="inputName"
            id="input"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />

          {formik.errors.name && formik.touched.name && (
            <p className="p">{formik.errors.name}</p>
          )}

          <label className="label" htmlFor="email">
            Gmail :{" "}
          </label>
          <input
            type="text"
            id="input"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          {formik.errors.email && formik.touched.email && (
            <p className="p">{formik.errors.email}</p>
          )}

          <div>
            <label className="label" htmlFor="country">
              Country:{" "}
            </label>
            <select
              className="select"
              component="select"
              name="country"
              id="country"
              onChange={formik.handleChange}
            >
              <option value="">
                {" "}
                {!Vip.vietSub ? "--Chọn Quốc Gia--" : "--Choose country--"}
              </option>
              <option value="Vietnam">Việt Nam</option>
              <option value="United States">America</option>
              <option value="Japan">Japan</option>
            </select>

            {formik.errors.name && formik.touched.name && (
              <p className="p">{formik.errors.name}</p>
            )}
          </div>

          <button type="submit" id="button">
            {" "}
            {!Vip.vietSub ? "ĐẶT HÀNG" : "PLACE ORDER"}
          </button>
        </form>

        <div className="advertise">
          <ImgSlide></ImgSlide>
        </div>
      </div>

      <div className="BigBuy">
        <h3 className="h3">
          {" "}
          {!Vip.vietSub
            ? "KHÁCH HÀNG MUA SẢN PHẨM NÀY CŨNG ĐÃ MUA:"
            : "CUSTOMERS WHO BOUGHT THIS ITEM ALSO BOUGHT:"}
        </h3>

        <div className="BuyMore">
          {Array2.map((array, index) => (
            <SubBuy Buy={array} />
          ))}
        </div>
      </div>

      <img src={Sub} alt="" className="img" style={{ width: "100%" }} />
    </div>
  );
}
