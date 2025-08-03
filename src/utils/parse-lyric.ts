const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export interface ILyric {
  finalTime: number;
  content: string;
}

export const parseLyric = (lyric) => {
  const lyricString = lyric.split("\n");
  const lyrics: ILyric[] = [];
  for (const line of lyricString) {
    if (line) {
      const time = parseExp.exec(line);
      if (!time) continue;
      const time1 = Number(time[1]) * 60 * 1000;
      const time2 = Number(time[2]) * 1000;
      const time3 =
        time[3].length === 2 ? Number(time[3]) * 10 : Number(time[3]);
      const finalTime = (time1 + time2 + time3)/1000;
      const content = line.replace(parseExp, "").trim();
      const lineObj = { finalTime, content };
      lyrics.push(lineObj);
    }
  }
  console.log(lyrics)
  return lyrics;
};
