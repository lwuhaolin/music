import React, {memo, type ReactNode} from "react";
import {hotRadios} from "@/service/loacl_data.ts";
interface IProps {
    children?: ReactNode,
}

const HotAnchor: React.FC<IProps> = () => {
    return <div className='small_card'>
        <div className="right_small_header">
            <h3>入住歌手</h3>
            <a href="/discover/artist">查看全部 &gt;</a>
        </div>
        <div className="hot_anchor_radio-list">
            {
                hotRadios.map((item) => {
                    return (
                        <div className="item" key={item.picUrl}>
                            <a href="/abc" className="image">
                                <img src={item.picUrl} alt=""/>
                            </a>
                            <div className="info">
                                <div className="name">{item.name}</div>
                                <div className="position text-nowrap">{item.position}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
}

export default memo(HotAnchor)