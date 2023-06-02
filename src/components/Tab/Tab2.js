import React from "react";
import "./Tab.scss";
import soup from "../../assets/soup.jpeg";
import salad from "../../assets/salad.jpeg";
import appetizers from "../../assets/appetizers.jpeg";
import pasta from "../../assets/pasta.jpeg";
import main from "../../assets/main_courses_16824406944293460.jpeg";
import pizza from "../../assets/pizza.jpeg";
import shwarma from "../../assets/shwarma.jpeg";
import { Link } from "react-scroll";
const Tab2 = ({ selectSubCategory, setSelectSubCategory }) => {
  return (
    <div className="categories">
      <Link to="الشوربة" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("الشوربة")}
        >
          <img className="category_img" src={soup} alt="" />
          <p className="category_title">الشوربة</p>
        </div>
      </Link>
      <Link to="السلطات" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("السلطات")}
        >
          <img className="category_img" src={salad} alt="" />
          <p className="category_title">السلطات</p>
        </div>
      </Link>
      <Link to="المقبلات" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("المقبلات")}
        >
          <img className="category_img" src={appetizers} alt="" />
          <p className="category_title">المقبلات</p>
        </div>
      </Link>
      <Link to="الباستا" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("الباستا")}
        >
          <img className="category_img" src={pasta} alt="" />
          <p className="category_title">الباستا</p>
        </div>
      </Link>
      <Link to="الأطباق الرئيسية" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("الأطباق الرئيسية")}
        >
          <img className="category_img" src={main} alt="" />
          <p className="category_title">الأطباق الرئيسية</p>
        </div>
      </Link>
      <Link to="الخبز المسطح" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("الخبز المسطح")}
        >
          <img className="category_img" src={pizza} alt="" />
          <p className="category_title">الخبز المسطح</p>
        </div>
      </Link>
      <Link to="الساندوتشات" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("الساندوتشات")}
        >
          <img className="category_img" src={shwarma} alt="" />
          <p className="category_title"> الساندوتشات</p>
        </div>
      </Link>
    </div>
  );
};

export default Tab2;
