import React from "react";
import hookah from "../../assets/desserts.jpeg";
import { Link } from "react-scroll";
const Tab5 = ({ selectSubCategory, setSelectSubCategory }) => {
  return (
    <div className="categories">
      <Link to="الأرقيلة" smooth={true} duration={500} offset={-200}>
        <div className="category">
          <img className="category_img" src={hookah} alt="" />
          <p className="category_title">الأرقيلة</p>
        </div>
      </Link>
    </div>
  );
};

export default Tab5;
