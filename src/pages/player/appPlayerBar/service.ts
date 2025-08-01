import {Get} from "../../../../axios/server.ts";

export const getMusic=async (id:number) => {
    const [err,response]=await Get<any>('/song/url',{id:id});
    if(err) return;
    return response;
}

export const getMusicLyric = async (id:number) => {
    const [err,response] = await Get<any>('/lyric', { id: id });
    if (err) return;
    return response;
}