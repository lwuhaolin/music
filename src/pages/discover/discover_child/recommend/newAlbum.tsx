import React, {
  memo,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { SmallHeader } from "@/components/SmallHeader.tsx";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { getNewAlbum } from "@/pages/discover/discover_child/recommend/service";
import { NewAlbumItem } from "@/components/newAlbumItem.tsx";

interface IProps {
  children?: ReactNode;
}

const NewAlbum: React.FC<IProps> = () => {
  const [album, setAlbum] = useState<any>([]);
  useEffect(() => {
    getNewAlbum().then((data) => {
      setAlbum(data.albums);
    });
  }, []);
  const carouselRef = useRef<CarouselRef>(null);
  return (
    <div style={{ marginTop: "20px" }}>
      <SmallHeader
        title="新碟上架"
        moreText="更多"
        content={[]}
        moreLink={"/discover/album"}
      />
      <div className="newAlbum_main">
        <div
          className="newAlbum_button_left"
          onClick={() => carouselRef.current?.prev()}
        >
        </div>
        <div className="newAlbum_banner">
          <Carousel ref={carouselRef} speed={1200} dots={false}>
            {[0, 1].map((item: any) => (
              <div>
                <div className="newAlbum_banner_list">
                  {album.slice(item * 5, (item + 1) * 5).map((album: any) => {
                    return <NewAlbumItem album={album} key={album.id} />;
                  })}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div
          className="newAlbum_button_right"
          onClick={() => carouselRef.current?.next()}
        >
        </div>
      </div>
    </div>
  );
};

export default memo(NewAlbum);
