import React, { useState } from "react";
import "./ProductsHeader.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MdLocationOn } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { FaSnapchat } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-scroll";

import Tab1 from "../Tab/Tab1";
import Tab2 from "../Tab/Tab2";
import Tab3 from "../Tab/Tab3";
import Tab4 from "../Tab/Tab4";
import Tab5 from "../Tab/Tab5";
import Checkbox from "../Checkbox/Checkbox";
// import products from "../../data";
import Product from "../Product/Product";
import SingleProduct from "../SingleProduct/SingleProduct";
import SingleBigProduct from "../SingleBigProduct/SingleBigProduct";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ProductsHeader = ({productsArray}) => {
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(true); // Initial state is checked
  const [selectSubCategory, setSelectSubCategory] = useState("الرئيسية");
  const [selectCategory, setSelectCategory] = useState("الفطور");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(selectSubCategory);
  console.log(selectCategory);

  const filteredProductsCategory = productsArray.filter((product) => {
    return product.category == selectCategory;
  });
  const filteredSubCategory = productsArray.filter((product) => {
    return (
      product.category == selectCategory &&
      product.subcategory == selectSubCategory
    );
  });
  return (
    <div className="productsheader">
      <div className="productsheader_title">مطاعم ومطابخ رمال الخليج</div>
      <div className="productsheader_icons">
        <AiFillStar />
        <MdLocationOn />
        <SiTiktok />
        <FaSnapchat />
        <BsInstagram />
        <ImWhatsapp />
      </div>
      <div className="productsheader_input">عذراً! الطلب مغلق حالياً</div>
      <div className="tabs_categories">
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", margin: "auto" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{ style: { display: "none" } }}
                sx={{ justifyContent: "center", margin: "auto" }}
              >
                <Tab
                  label="الفطور"
                  sx={{ minWidth: 0, fontWeight: 500 }}
                  {...a11yProps(0)}
                  onClick={() => setSelectCategory("الفطور")}
                />
                <Tab
                  label="الغداء والعشاء"
                  sx={{ minWidth: 0 }}
                  {...a11yProps(1)}
                  onClick={() => setSelectCategory("الغداء والعشاء")}
                />
                <Tab
                  label="المشروبات"
                  sx={{ minWidth: 0 }}
                  {...a11yProps(2)}
                  onClick={() => setSelectCategory("المشروبات")}
                />
                <Tab
                  label="الحلويات"
                  sx={{ minWidth: 0 }}
                  {...a11yProps(3)}
                  onClick={() => setSelectCategory("الحلويات")}
                />
                <Tab
                  label="الأرقيلة"
                  sx={{ minWidth: 0 }}
                  {...a11yProps(4)}
                  onClick={() => setSelectCategory("الأرقيلة")}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Tab1
                selectSubCategory={selectSubCategory}
                setSelectSubCategory={setSelectSubCategory}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Tab2
                selectSubCategory={selectSubCategory}
                setSelectSubCategory={setSelectSubCategory}
                
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Tab3
                selectSubCategory={selectSubCategory}
                setSelectSubCategory={setSelectSubCategory}
              />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Tab4
                selectSubCategory={selectSubCategory}
                setSelectSubCategory={setSelectSubCategory}
              />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Tab5
                selectSubCategory={selectSubCategory}
                setSelectSubCategory={setSelectSubCategory}
              />
            </TabPanel>
          </Box>
        </Box>
      </div>
      <div className="products_list">
        <div className="products_list_line"></div>
        <div className="products_list_header">
          <div className="checkbox">
            <Checkbox checked={checked} setChecked={setChecked} />
          </div>
          <div className="products_list_title"></div>
        </div>
        {checked ? (
          <div className="products_list_li">
            {filteredProductsCategory.map((product, index) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        ) : (
          <div className="products_list_big">
            {filteredProductsCategory.map((product) => {
              return <SingleBigProduct key={product.id} product={product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsHeader;
