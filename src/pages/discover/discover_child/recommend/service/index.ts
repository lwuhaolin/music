import { Get } from "../../../../../../axios/server.ts";

interface BannerItem {
  imageUrl: string;
  title: string;
  targetId: number;
}

interface Personalized {
  result: [name: string, picUrl: string];
}

export const getBanner = async () => {
  const [err, response] = await Get<BannerItem[]>("/banner");
  if (err) return;
  return response;
};

export const getPersonalized = async () => {
  const [err, response] = await Get<Personalized>("/personalized?limit=8");
  if (err) return;
  return response;
};

export const getNewAlbum = async () => {
  const [err, response] = await Get<any>("/album/newest?limit=10");
  if (err) return;
  return response;
};

export const getPlayListDetail = async (id: number) => {
  const [err, response] = await Get<any>("playlist/detail", { id: id });
  if (err) return;
  return response;
};

export const getArtist = async (limit=30) => {
  const [err, response] = await Get<any>("/artist/list", { limit: limit });
  if (err) return;
  return response;
};
