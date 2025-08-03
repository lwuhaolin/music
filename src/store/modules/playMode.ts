export const PlayMode = {
    // 顺序播放
    SEQUENCE: "sequence",
    // 随机播放
    RANDOM: "random",
    // 单曲循环
    LOOP: "loop",
} as const;

export type PlayModeType = typeof PlayMode[keyof typeof PlayMode];


export interface Song {
    name: string;
    mainTitle: any;
    additionalTitle: any;
    id: number;
    pst: number;
    t: number;
    ar: Ar[];
    alia: any[];
    pop: number;
    st: number;
    rt: string;
    fee: number;
    v: number;
    crbt: any;
    cf: string;
    al: Al;
    dt: number;
    h: H;
    m: M;
    l: L;
    sq: Sq;
    hr: any;
    a: any;
    cd: string;
    no: number;
    rtUrl: any;
    ftype: number;
    rtUrls: any[];
    djId: number;
    copyright: number;
    s_id: number;
    mark: number;
    originCoverType: number;
    originSongSimpleData: any;
    tagPicList: any;
    resourceState: boolean;
    version: number;
    songJumpInfo: any;
    entertainmentTags: any;
    awardTags: any;
    displayTags: any;
    single: number;
    noCopyrightRcmd: any;
    alg: any;
    displayReason: any;
    rtype: number;
    rurl: any;
    mst: number;
    cp: number;
    mv: number;
    publishTime: number;
}

export interface Ar {
    id: number;
    name: string;
    tns: any[];
    alias: any[];
}

export interface Al {
    id: number;
    name: string;
    picUrl: string;
    tns: any[];
    pic_str: string;
    pic: number;
}

export interface H {
    br: number;
    fid: number;
    size: number;
    vd: number;
}

export interface M {
    br: number;
    fid: number;
    size: number;
    vd: number;
}

export interface L {
    br: number;
    fid: number;
    size: number;
    vd: number;
}

export interface Sq {
    br: number;
    fid: number;
    size: number;
    vd: number;
}