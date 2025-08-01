import React, { type ReactNode, useEffect, useState } from "react";
import { SmallHeader } from "@/components/SmallHeader.tsx";
import { getPersonalized } from "@/pages/discover/discover_child/recommend/service";
import SongItem from "@/components/SongItem.tsx";

interface IProps {
  children?: ReactNode;
}

export const HotRecommend: React.FC<IProps> = () => {
  const [personailzed, setPersonalized] = useState([]);
  useEffect(() => {
    getPersonalized().then((data: any) => setPersonalized(data.result));
  }, []);
  return (
    <div>
      <SmallHeader
        title={"热门推荐"}
        content={["摇滚", "流行", "华语"]}
        moreText={"更多"}
        moreLink={"/discover/songs"}
      />
      <div className={"hot_recommend"}>
        {personailzed.map((item: any,index) => (
          <SongItem key={index} itemData={item}/>
        ))}
      </div>
    </div>
  );
};
