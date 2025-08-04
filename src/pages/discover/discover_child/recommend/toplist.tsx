import React, { type ReactNode, useEffect, useState } from "react";
import { SmallHeader } from "@/components/SmallHeader.tsx";
import { getPlayListDetail } from "@/pages/discover/discover_child/recommend/service";
import { getImageSize } from "@/utils/format.ts";
import { useDispatch } from "react-redux";
import {addSongList, clearMusicList, setCurrentIndex} from "@/store/modules/musicSlice.ts";
import { useAppSelector } from "@/store";

interface IProps {
  children?: ReactNode;
}

const rankingId = [19723756, 3779629, 2884035];
export const TopList: React.FC<IProps> = () => {
  const [playList, setPlayList] = useState<any>([]);
  // 方式1
  useEffect(() => {
    // 通过async函数获取数据，返回promise.all，之后.then()再处理
    const fetchPlaylist = async () => {
      const promise = rankingId.map((id) =>
        getPlayListDetail(id).then((values) => values.playlist),
      );
      return await Promise.all(promise);
    };
    fetchPlaylist().then((res) => setPlayList(res));
  }, []);
  const dispatch = useDispatch();
  const { playlist } = useAppSelector((store) => store.music);
  // 方式2
  // useEffect(() => {
  //   // 通过promise数组获取数据，统一返回promise
  //   const promise:Promise<any>[]=[]
  //   for(const id of rankingId){
  //     promise.push(getPlayListDetail(id))
  //   }
  //   Promise.all(promise).then(res=>setPlayList(res))
  // }, []);
  // 方式3:分三次返回，用三个useState,


  // 播放音乐
  const headlePlay = (item) => {
    const length = playlist.length;
    dispatch(addSongList(item));
    dispatch(setCurrentIndex(length));
    // dispatch(setIsPlaying(true))

  };
  // 添加音乐到列表中
  function headleAdd(item: any) {
    dispatch(addSongList(item));
  }
  // 播放音乐列表
  function headlePlayList(item: any) {
    dispatch(clearMusicList())
    for(let listItem of item.tracks){
      dispatch(addSongList(listItem))
    }
    dispatch(setCurrentIndex(0));
  }
  return (
    <div>
      <SmallHeader
        title="榜单"
        content={[]}
        moreText="更多"
        moreLink="/discover/ranking"
      />
      <div className="TopList_content">
        {playList.map((item: any, index: number) => (
          <div key={index}>
            <div className="TopList_content_header">
              <img src={getImageSize(item.coverImgUrl, 80)} alt={"img"} />
              <div className="TopList_content_header_tit">
                <h3>{item.name}</h3>
                <div className="btn">
                  <a title="播放" onClick={() => headlePlayList(item)}>播放</a>
                  <a title="收藏">收藏</a>
                </div>
              </div>
            </div>
            <div className="TopList_content_list">
              {item.tracks.slice(0, 10).map((item: any, index: number) => {
                // console.log(item);
                return (
                  <div key={item.id} className="list-item">
                    <div className="rank">{index + 1}</div>
                    <div className="info">
                      <span className="name text-nowrap">{item.name}</span>
                      <div className="operate">
                        <a
                          onClick={() => headlePlay(item)}
                          title="播放"
                          className="btn play"
                        ></a>
                        <a
                          onClick={() => headleAdd(item)}
                          title="添加到播放列表"
                          className="btn addto"
                        ></a>
                        <a title="收藏" className="btn favor"></a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="TopList_content_footer">
              <a href={"/discover/ranking"}>查看全部 &gt;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
