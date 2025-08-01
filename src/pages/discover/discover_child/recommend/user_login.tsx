import React, { type ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export const UserLogin: React.FC<IProps> = () => {
  return (
    <div className="userLogin">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a href="/login">
        用户登录
      </a>
    </div>
  );
};
