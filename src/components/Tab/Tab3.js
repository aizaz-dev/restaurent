import React from "react";
import "./Tab.scss";
import juice from "../../assets/juice.jpeg";
import freshJuice from "../../assets/freshJuice.jpeg";
import tea from "../../assets/tea.jpeg";
import jugCoffee from "../../assets/jugCoffee.jpeg";
import coldCoffee from "../../assets/coldCoffee.jpeg";
import water from "../../assets/water.jpeg";
import softDrick from "../../assets/softDrick.jpeg";
import { Link } from "react-scroll";
const Tab3 = ({ selectSubCategory, setSelectSubCategory }) => {
  return (
    <div className="categories">
      <Link to="سجنتشر موكتيل" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("سجنتشر موكتيل")}
        >
          <img className="category_img" src={juice} alt="" />
          <p className="category_title">سجنتشر موكتيل</p>
        </div>
      </Link>
      <Link to="عصائر فريش" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("عصائر فريش")}
        >
          <img className="category_img" src={freshJuice} alt="" />
          <p className="category_title">عصائر فريش</p>
        </div>
      </Link>
      <Link to="أفضل أختيار للشاهي" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("أفضل أختيار للشاهي")}
        >
          <img className="category_img" src={tea} alt="" />
          <p className="category_title">أفضل أختيار للشاهي</p>
        </div>
      </Link>
      <Link to="القهوة" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("القهوة")}
        >
          <img className="category_img" src={jugCoffee} alt="" />
          <p className="category_title">القهوة</p>
        </div>
      </Link>
      <Link to="محطة القهوة الباردة" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("محطة القهوة الباردة")}
        >
          <img className="category_img" src={coldCoffee} alt="" />
          <p className="category_title">محطة القهوة الباردة</p>
        </div>
      </Link>
      <Link to="مياه" smooth={true} duration={500} offset={-200}>
        <div className="category" onClick={() => setSelectSubCategory("مياه")}>
          <img className="category_img" src={water} alt="" />
          <p className="category_title">مياه</p>
        </div>
      </Link>
      <Link to="مشروبات غازية" smooth={true} duration={500} offset={-200}>
        <div
          className="category"
          onClick={() => setSelectSubCategory("مشروبات غازية")}
        >
          <img className="category_img" src={softDrick} alt="" />
          <p className="category_title">مشروبات غازية</p>
        </div>
      </Link>
    </div>
  );
};

export default Tab3;
