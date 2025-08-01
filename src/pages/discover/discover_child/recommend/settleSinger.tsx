import React, { memo, type ReactNode, useEffect, useState } from "react";
import { getArtist } from "@/pages/discover/discover_child/recommend/service";
import { getImageSize } from "@/utils/format.ts";

interface IProps {
  children?: ReactNode;
}

const SettleSinger: React.FC<IProps> = () => {
  const [Artist, setArtist] = useState([]);
  useEffect(() => {
    getArtist(5).then((data: any) => setArtist(data.artists));
  }, []);
  // console.log(Artist);
  return (
      <div className="small_card">
          <div className="right_small_header">
              <h3>入住歌手</h3>
              <a href="/discover/artist">查看全部 &gt;</a>
          </div>
          <ul className="settle_singer_list">
              {Artist.map((item: any, index: number) => (
                  <li key={index}>
                      <a href="/discover/artist" className="item">
                          <img src={getImageSize(item.picUrl, 62)} alt=""/>
                          <div className="info">
                              <div className="name">{item.name}</div>
                              <div className="title">{item.alias.join(" ")}</div>
                          </div>
                      </a>
                  </li>
              ))}
          </ul>
          <div className="settle_singer_apply-for">
              <a href="/abc">申请成为网易音乐人</a>
          </div>
      </div>
  );
};

export default memo(SettleSinger);
