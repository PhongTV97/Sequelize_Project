import React, { useState } from "react";
import "./styles.scss";
import { IMAGE_PATH } from "../../common/constant";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";

const LIST_ITEM_NAV = [
  {
    image: IMAGE_PATH.BAR_CHART,
    label: "Nhà phân phối",
    path: "/admin/supplies",
  },
  {
    image: IMAGE_PATH.CAMPAIGN,
    label: "Nhân viên",
    path: "/admin/employee",
  },
  {
    image: IMAGE_PATH.LOCAL_PHONE,
    label: "Sản phẩm",
    path: "/admin/product",
  },
  {
    image: IMAGE_PATH.DESCRIPTION,
    label: "Giỏ hàng",
  },
];

const Header = () => {
  let history = useHistory();

  const [path, setPath] = useState("/");

  const handleChangePage = (path) => {
    setPath(path);
    history.push(path);
  };

  const generateClass = (pathClick) => {
    if (pathClick === path) {
      return "btn btn-active";
    }
    return "btn";
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-content-left">
          <a href="/home">
            <img src={Logo} alt="" />
          </a>
          <div className="items-nav-container">
            {LIST_ITEM_NAV.map((item, index) => (
              <div
                className="item-nav"
                key={index}
                onClick={() => history.push(item.path || "/")}
              >
                <img src={item.image} alt="" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="header-content-right">
          <button onClick={() => handleChangePage("/login")} className={"btn"}>
            Đăng xuất
          </button>
          <button
            onClick={() => handleChangePage("/login")}
            className={generateClass("/login")}
          >
            Đăng nhập
          </button>
          <button
            onClick={() => handleChangePage("/")}
            className={generateClass("/")}
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
