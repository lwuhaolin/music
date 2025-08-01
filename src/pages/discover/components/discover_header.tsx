import React, {memo, type ReactNode} from "react";
import "./d-components.css";
import { dicoverMenu } from "@/service/loacl_data.ts";
import { NavLink } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

const DiscoverHeader: React.FC<IProps> = () => {
  return (
    <div className='discover_header'>
      <div className='discover_header_content'>
        {dicoverMenu.map((item, index) => (
          <div className='discover_header_content_item' key={index}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(DiscoverHeader);