import React from "react";
import deserts from "../../assets/desserts.jpeg";
import { Link } from "react-scroll";
const Tab4 = ({ selectSubCategory, setSelectSubCategory }) => {
  return (
    <div className="categories">
      <Link to="الحلا" smooth={true} duration={500} offset={-200}>
        <div className="category">
          <img className="category_img" src={deserts} alt="" />
          <p className="category_title"> الحلا</p>
        </div>
      </Link>
    </div>
  );
};

export default Tab4;
