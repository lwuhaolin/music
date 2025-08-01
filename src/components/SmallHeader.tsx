import React, { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
  children?: ReactNode;
  content?: Array<string>;
  title: string;
  moreText?: string;
  moreLink?: string;
}

export const SmallHeader: React.FC<IProps> = (properties) => {
  const { title, content, moreText, moreLink } = properties;
  return (
    <div className="small-header">
      <div className="small_header_left">
        <h3>{title}</h3>
        <span className="small_header_keyword">
          {(content ? content : []).map((item, index) => {
            return (
              <div key={index} className="small_header_item">
                <span className="small_header_item_item">{item}</span>
                <span className="small_header_item_divider">|</span>
              </div>
            );
          })}
        </span>
      </div>
      <div className="small_header_right">
        <Link to={moreLink ? moreLink : "/"}>{moreText}</Link>
        <i className="small_header_right_icon"></i>
      </div>
    </div>
  );
};
