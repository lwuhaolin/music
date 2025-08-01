import React, { type ReactNode } from "react";
import {getImageSize} from "@/utils/format.ts";

interface IProps {
  children?: ReactNode;
  itemData: any;
}

const SongItem: React.FC<IProps> = (properties) => {
  const { itemData } = properties;
  return (
    <div className="Songitem">
      <div className="Songitem_top">
        <img alt="图片" src={getImageSize(itemData.picUrl, 140, 140)} />
        <div className="Songitem_cover">
          <div className="Songitem_info">
            <span>
              <i className="Songitem_erji"></i>
            </span>
            <i className="Songitem_play"></i>
          </div>
        </div>
      </div>
      <div className="Songitem_bottom">{itemData.name}</div>
    </div>
  );
};
export default SongItem;
