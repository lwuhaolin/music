import React, { memo, useEffect, useState } from "react";
import { getBanner } from "@/pages/discover/discover_child/recommend/service";
import { TopBanner } from "@/pages/discover/discover_child/recommend/topBanner.tsx";
import "./recommend.css";
import { HotRecommend } from "@/pages/discover/discover_child/recommend/hot_recommend.tsx";
import NewAlbum from "@/pages/discover/discover_child/recommend/newAlbum.tsx";
import { TopList } from "@/pages/discover/discover_child/recommend/toplist.tsx";
import { UserLogin } from "@/pages/discover/discover_child/recommend/user_login.tsx";
import SettleSinger from "@/pages/discover/discover_child/recommend/settleSinger.tsx";
import HotAnchor from "@/pages/discover/discover_child/recommend/hotAnchor.tsx";

const Recommend: React.FC = () => {
  const [banner, setbanner] = useState([]);
  useEffect(() => {
    getBanner().then((data: any) => setbanner(data.banners));
  }, []);
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <TopBanner entity={banner} />
      <div className="recommend_content">
        <div className="recommend_content_left">
          <HotRecommend />
          <NewAlbum />
          <TopList />
        </div>
        <div className="recommend_content_right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </div>
  );
};

export default memo(Recommend);
