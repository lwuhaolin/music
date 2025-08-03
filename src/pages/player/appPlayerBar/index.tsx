import React, {
  memo,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import "./appPlayBar.css";
import { Link } from "react-router-dom";
import { message, Slider } from "antd";
import {
  getMusic,
  getMusicLyric,
} from "@/pages/player/appPlayerBar/service.ts";
import { musicdata } from "@/pages/player/songdata.ts";
import { getImageSize } from "@/utils/format.ts";
import { parseLyric } from "@/utils/parse-lyric.ts";
import { useDispatch } from "react-redux";
import {
  playNextSong, playPrevSong,
  setCurrentSong,
  setLyrics,
} from "@/store/modules/musicSlice.ts";
import { useAppSelector } from "@/store";

interface PlayerProps {
  children?: ReactNode;
}

/**
 *   当前页面的时间处理全部先换算成秒，再进行计算
 *
 * */
const AppPlayerBar: React.FC<PlayerProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null); // audio的ref
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // 判断音乐是否播放
  const [progress, setProgress] = useState<number>(0); // 进度条的state
  const [currentTime, setCurrentTime] = useState<number>(0); // 播放当前时间的state
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { currentSong, Lyrics, currentIndex } = useAppSelector(
    (store) => store.music,
  );

  // 副作用获取音乐
  useEffect(() => {
    getMusic(musicdata[currentIndex].id).then((res) =>
      dispatch(setCurrentSong(res.data[0])),
    );
    getMusicLyric(musicdata[currentIndex].id).then((res) =>
      dispatch(setLyrics(parseLyric(res.lrc.lyric))),
    );
  }, [currentIndex]);
  // 格式化时间
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const formatMinutes = String(mins).padStart(2, "0");
    const formatSecond = String(secs).padStart(2, "0");
    return `${formatMinutes}:${formatSecond}`;
  };
  // 控制音乐播放暂停
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  // 自动更新进度条
  const updateProgress = () => {
    const currentTime = audioRef.current!.currentTime;
    setProgress(((1000 * currentTime) / currentSong.time) * 100);
    setCurrentTime(currentTime);

    // 自动更新歌词
    let index = Lyrics.length - 1;
    for (let i = 0; i < Lyrics.length; i++) {
      const lyric = Lyrics[i];
      if (lyric.finalTime > currentTime) {
        index = i - 1;
        break;
      }
    }
    messageApi.open({
      content: Lyrics[index].content,
      duration: 0,
      key: 1,
    });
  };
  // 点击进度条切换音乐进度函数
  const MouseUpSliderChange = (value) => {
    handleSliderChange(value);
    audioRef.current?.play();
    setIsPlaying(true);
  };
  const handleSliderChange = (value: number) => {
    audioRef.current?.pause();
    const thisTime = ((value / 100) * currentSong?.time) / 1000;
    // console.log(thisTime, currentSong?.time);
    audioRef.current!.currentTime = thisTime;
    setProgress(((1000 * thisTime) / currentSong.time) * 100);
    setCurrentTime(thisTime);
  };
  // 上一首
  const headlePrevMusic = () => {
    dispatch(playPrevSong());
  }
  // 下一首
  const headleNextMusic = () => {
    dispatch(playNextSong());
  };
  // 歌词展示
  // console.log(Lyrics)
  return (
    <>
      {/*{contextHolder}*/}
      <div className="sprite_playbar PlayBar">
        {contextHolder}
        <div className="PlayBar_content">
          <audio
            ref={audioRef}
            src={currentSong?.url}
            onTimeUpdate={updateProgress}
            onEnded={togglePlayPause}
          />
          <div className="PlayBar_content_button">
            <button className="prev" onClick={headlePrevMusic}></button>
            <button className="play" onClick={togglePlayPause}></button>
            <button className="next" onClick={headleNextMusic}></button>
          </div>

          <div className="PlayBar_content_Info">
            <div className="PlayBar_content_Info_Image">
              <Link to={"/player"}>
                <img src={getImageSize(musicdata[0].al.picUrl, 34)} alt="img" />
              </Link>
            </div>
            <div className="PlayBar_content_Info_info">
              <div className="PlayBar_content_Info_song">
                <span className="PlayBar_content_Info_song_name">
                  {musicdata[currentIndex].name}
                </span>
                <span className="PlayBar_content_Info_songer_name">
                  {musicdata[currentIndex].ar[0].name}
                </span>
              </div>
              <div className="PlayBar_content_Info_progress">
                {/*进度条*/}
                <Slider
                  value={progress}
                  step={0.5}
                  tooltip={{ formatter: null }}
                  onChangeComplete={MouseUpSliderChange}
                  onChange={handleSliderChange}
                />
                <div className="PlayBar_content_Info_time">
                  <span className="PlayBar_content_Info_nowTime">
                    {formatTime(currentTime)}
                  </span>
                  <span className="PlayBar_content_Info_divider">/</span>
                  <span className="PlayBar_content_Info_totleTime">
                    {formatTime(currentSong?.time / 1000)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="PlayBar_content_Operator">
            <div className="PlayBar_content_Operator_left">
              <button className="PlayBar_content_Operator_favor"></button>
              <button className="PlayBar_content_Operator_share"></button>
            </div>
            <div className="PlayBar_content_Operator_right">
              <button className="PlayBar_content_Operator_volume"></button>
              <button className="PlayBar_content_Operator_loop"></button>
              <button className="PlayBar_content_Operator_playlist"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(AppPlayerBar);
