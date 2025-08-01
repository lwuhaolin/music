import React, { type ReactNode } from "react";
import { getImageSize } from "@/utils/format.ts";

interface IProps {
  children?: ReactNode;
  album: any;
}

export const NewAlbumItem: React.FC<IProps> = (properties) => {
  const { album } = properties;
  return (
    <div className="new_Album_Item">
      <div className="new_Album_Item_Img">
        <img src={getImageSize(album.picUrl, 100)} alt={album.name} />
          <a href='/abc'>{album.name}</a>
      </div>
        <div className='new_Album_Item_Info'>
            <div className='new_Album_Item_name'>{album.name}</div>
            <div className='new_Album_Item_artistName'>{album.artist.name}</div>
        </div>
    </div>
  );
};
