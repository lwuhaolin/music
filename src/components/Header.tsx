import React, { type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { headerLinks } from "../service/loacl_data.ts";

interface IProps {
  children?: ReactNode;
}

const Header: React.FC<IProps> = () => {
  const showItem = (item: any, index: number) => {
    if (index < 3) {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {item.title}
          <i className="icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      );
    }
  };

  return (
    <div
      style={{
        height: "75px",
        backgroundColor: "#242424",
        fontSize: "14px",
      }}
    >
      {/* 内联样式替代styled-components */}

      <div className="content">
        <div className="HeaderLeft">
          <a className="logo_a" href="/">
            网易云音乐
          </a>

          <div className="select-list">
            {headerLinks.map((item, index) => (
              <div className="select-item" key={item.title}>
                {showItem(item, index)}
              </div>
            ))}
          </div>
        </div>

        <div className="HeaderRight">
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="creator-center">创作者中心</div>
          <div className="login">登录</div>
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default Header;
