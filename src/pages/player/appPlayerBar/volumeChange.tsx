import React, { useEffect, useRef, useState } from "react";
import "./appPlayBar.css";
import { Slider } from "antd";

interface VolumeChangeProps {
  audioRef?: React.RefObject<HTMLAudioElement | null>;
}

export const VolumeChange: React.FC<VolumeChangeProps> = ({ audioRef }) => {
  const [muted, setMuted] = useState(false);
  const [slider, setSlider] = useState(false);
  const [volume, setVolume] = useState(100);
  const volumeNumber = useRef<number>(100);
  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, muted]);
  // 改变音量
  const handleChangeVolume = (value: number) => {
    setVolume(value);
    if (value > 0) {
      setMuted(false);
    }
  };
  // 静音改变
  const isMute = () => {
    if (muted) {
      setMuted(false);
      setVolume(volumeNumber.current);
    } else {
      setMuted(true);
      volumeNumber.current = volume;
      setVolume(0);
    }
  };

  return (
    <div className="volume-control">
      <button
        onMouseEnter={() => setSlider(true)}
        onClick={isMute}
        className={`PlayBar_content_Operator_volume ${muted ? "muted" : ""}`}
      ></button>
      {slider && (
        <div
          className="volume-slider-container"
          onMouseLeave={() => setSlider(false)}
        >
          <div className="volume-slider-wrapper">
            <Slider
              max={100}
              min={0}
              value={volume}
              vertical
              defaultValue={volume}
              onChange={handleChangeVolume}
            />
          </div>
        </div>
      )}
    </div>
  );
};
