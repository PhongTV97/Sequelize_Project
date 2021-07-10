import React from "react";
import "./styles.scss";
import { IMAGE_PATH } from "../../common/constant";

const LIST_ITEM_NAV = [
  {
    image: IMAGE_PATH.BAR_CHART,
    label: "Công ty vận hành",
  },
  {
    image: IMAGE_PATH.CAMPAIGN,
    label: "Thông báo",
  },
  {
    image: IMAGE_PATH.DESCRIPTION,
    label: "Liên hệ",
  },
  {
    image: IMAGE_PATH.LOCAL_PHONE,
    label: "Bulletin Board",
  },
];

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-content-left">
          <img src={IMAGE_PATH.LOGO} alt="" />
          <div className="items-nav-container">
            {LIST_ITEM_NAV.map((item, index) => (
              <div className="item-nav" key={index}>
                <img src={item.image} alt="" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="header-content-right">
          <button className="btn">Đăng nhập</button>
          <button className="btn btn-active">Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
