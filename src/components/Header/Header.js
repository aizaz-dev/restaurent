import React from "react";
import "./Header.scss";
import headImage from "../../assets/remal_alalkhalij_-_sp.moodhotmail.com_16832134960959588.jpg";
import headImage2 from "../../assets//remal_alalkhalij_-_sp.moodhotmail.com_16831293127181640.jpg";
import { IoMdPerson } from "react-icons/io";
export const Header = () => {
  return (
    <div className="header">
      <div className="profile_image">
        <IoMdPerson className="profile_image_el" />
      </div>
      <img className="head_image_bottom" src={headImage2} alt="" />
    </div>
  );
};
