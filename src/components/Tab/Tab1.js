import React from "react";
import "./Tab.scss";
import plate from "../../assets/plate.jpeg";
import shwarma from "../../assets/shwarma.jpeg";
import jheenga from "../../assets/jheenga.jpeg";
import cake from "../../assets/cake.jpeg";
import { Link } from "react-scroll";
const Tab1 = ({  selectSubCategory, setSelectSubCategory }) => {
  return (
    <div className="categories">
      <Link to="الرئيسية" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("الرئيسية")}
        >
          <img className="category_img" src={plate} alt="" />
          <p className="category_title">الرئيسية</p>
        </div>
      </Link>
      <Link to="ساندويتشات" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("ساندويتشات")}
        >
          <img className="category_img" src={shwarma} alt="" />
          <p className="category_title">ساندويتشات</p>
        </div>
      </Link>
      <Link to="كروسان" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("كروسان")}
        >
          <img className="category_img" src={jheenga} alt="" />
          <p className="category_title">كروسان</p>
        </div>
      </Link>
      <Link to="محطة الحلويات" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("محطة الحلويات")}
        >
          <img className="category_img" src={cake} alt="" />
          <p className="category_title">محطة الحلويات</p>
        </div>
      </Link>
    </div>
  );
};
export default Tab1;
