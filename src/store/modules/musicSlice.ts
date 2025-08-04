import {
  PlayMode,
  type PlayModeType,
  type Song,
} from "@/store/modules/playMode.ts";
import { createSlice } from "@reduxjs/toolkit";
import { type ILyric } from "@/utils/parse-lyric.ts";

// 播放器状态接口
interface PlayerState {
  // 当前播放歌曲
  currentSong: any;
  // 是否正在播放
  playing: boolean;
  // 播放进度(0-100)
  progress: number;
  // 当前播放时间(秒)
  currentTime: number;
  // 歌曲总时长(秒)
  duration: number;
  // 播放列表
  playlist: Song[];
  // 当前播放歌曲在播放列表中的索引
  currentIndex: number;
  // 播放模式
  playMode: PlayModeType;
  // 歌词
  Lyrics: ILyric[];
  // 当前歌词索引
  currentLyricIndex: number;
  // 播放历史列表
  playHistory: Song[];
  // 是否正在播放
  isPlaying: boolean;
}

const initialState: PlayerState = {
  currentSong: {} as Song,
  playing: false,
  progress: 0,
  currentTime: 0,
  duration: 0,
  playlist: [],
  currentIndex: -1,
  playMode: PlayMode.SEQUENCE,
  Lyrics: [],
  currentLyricIndex: -1,
  playHistory: [] as Song[],
  isPlaying: false,
};
/**
 * 这个本来是添加歌曲到播放历史列表的，但是因为没有实现播放历史列表，所以暂时没有用到
 * 我发现要弄播放历史列表的话，需要重写整个列表逻辑，所以先注释掉，有空的时候再写
 * 目前的话随机播放无法实现上一曲
 */
// const addHistorySong = (historySong: Song[], song: Song) => {
//   const newHistorySong = [...historySong];
//   const existingIndex = newHistorySong.findIndex((item) => item.id === song.id);
//   if (existingIndex !== -1) {
//     newHistorySong.splice(existingIndex, 1);
//   }
//   newHistorySong.push(song);
//   if (newHistorySong.length > 10) {
//     newHistorySong.shift();
//   }
//
//   return newHistorySong;
// };

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    // 清空音乐列表
    clearMusicList(state) {
      state.playlist = [];
    },
    // 设置当前音乐
    setCurrentSong(state, action) {
      state.currentSong = action.payload;
    },
    // 设置歌词
    setLyrics(state, action) {
      state.Lyrics = action.payload;
    },
    // 添加歌曲到播放列表
    addSongList(state, action: { payload: Song }) {
      const exists = state.playlist.some(
        (item) => item.id === action.payload.id,
      );
      if (!exists) {
        state.playlist.push(action.payload);
      }
    },
    // 设置播放模式
    setPlayMode(state) {
      const mode = state.playMode;
      switch (mode) {
        case PlayMode.SEQUENCE:
          state.playMode = PlayMode.LOOP;
          break;
        case PlayMode.LOOP:
          state.playMode = PlayMode.RANDOM;
          break;
        case PlayMode.RANDOM:
          state.playMode = PlayMode.SEQUENCE;
          break;
      }
    },
    // 设置播放索引
    setCurrentIndex(state, action: { payload: number }) {
      state.currentIndex = action.payload;
    },
    // 控制播放
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    // 播放下一首
    playNextSong(state) {
      const length = state.playlist.length;
      let newIndex = state.currentIndex;
      switch (state.playMode) {
        case PlayMode.SEQUENCE:
          if(state.currentIndex<length-1){
            newIndex = state.currentIndex+1;
          }else{
            newIndex = 0;
          }
          break;
        case PlayMode.LOOP:
          break;
        case PlayMode.RANDOM:
          const minCeiled = Math.ceil(0);
          const maxFloored = Math.floor(length - 1);
          newIndex =
            (Math.floor(Math.random() * (maxFloored - minCeiled + 1)) +
              minCeiled) %
            length;
          if (newIndex === state.currentIndex && length > 1) {
            newIndex = newIndex + 1;
          }
          break;
      }
      state.currentIndex = newIndex;
      state.currentSong = state.playlist[newIndex];
    },
    // 播放上一首
    playPrevSong(state) {
      const length = state.playlist.length;
      let index = state.currentIndex;
      switch (state.playMode) {
        case PlayMode.SEQUENCE:
          index = index > 0 ? index - 1 : length - 1;
          break;
        case PlayMode.LOOP:
          break;
        case PlayMode.RANDOM:
          break;
      }
      state.currentIndex = index;
      state.currentSong = state.playlist[index];
    },
  },
});

export const {
  setCurrentSong,
  setCurrentIndex,
  setLyrics,
  playNextSong,
  setPlayMode,
  addSongList,
  playPrevSong,
  setIsPlaying,
  clearMusicList,
} = playerSlice.actions;
const playerReducer = playerSlice.reducer;

export default playerReducer;
