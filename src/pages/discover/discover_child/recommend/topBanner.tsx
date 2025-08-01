import React, { useRef, useState } from "react";
import {Carousel} from "antd";
import type {CarouselRef} from "antd/es/carousel";

interface IProps {
  children?: React.ReactNode;
  entity: any;
}

export const TopBanner: React.FC<IProps> = (properties) => {
  const bannerRef = useRef<CarouselRef>(null);
  const [ChangeNumber, setChangeNumber] = useState(0);
  // 定义url
  let bgImgURL = properties.entity[ChangeNumber]?.imageUrl;
  if (bgImgURL) {
    bgImgURL = bgImgURL + "?imageView&blur=40x20";
  }
  // const handleChange = useCallback((form)=>{
  //   setTimeout(()=>{
  //     setChangeNumber(form);
  //   },0)
  // },[])

  // 背景自动切换的回调
  const handleChange = (_:number, next:number) => {
    setTimeout(() => {
      setChangeNumber(next);
    }, 0);
  };

  // 按钮切换函数
  const handlePrevClick = () => {
    bannerRef.current?.prev();
  };
  const handleNextClick = () => {
    bannerRef.current?.next();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImgURL})`,
        backgroundSize: "6000px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="top-banner">
        {/*  left*/}
        <div className="top-banner__top-banner">
          <Carousel
            autoplay
            draggable={true}
            ref={bannerRef}
            effect={"fade"}
            beforeChange={handleChange}
          >
            {properties.entity.map((item: any, index: number) => (
              <div className="top_banner_item" key={index}>
                <img alt={item.imageUrl} src={item.imageUrl} />
              </div>
            ))}
          </Carousel>
        </div>
        {/*  right*/}

        <a
          className="top_banner_right"
          href="https://music.163.com/#/download"
          target="_blank"
        ></a>

        {/*  control*/}
        <div className="top_banner_control">
          <button
            className="top_banner_control_button_left"
            onClick={() => handlePrevClick()}
          ></button>
          <button
            className="top_banner_control_button_right"
            onClick={() => handleNextClick()}
          ></button>
        </div>
      </div>
    </div>
  );
};
