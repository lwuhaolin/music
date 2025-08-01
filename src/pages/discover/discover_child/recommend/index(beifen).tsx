import React, { memo } from "react";
// import { Get } from "../../../../../axios/server.ts";
//
// interface BannerItem {
//   imageUrl: string;
//   title: string;
//   targetId: number;
// }

const Recommend: React.FC = () => {
  // const [, setBanners] = useState<BannerItem[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       setError(null);
  //
  //       const [err, response] = await Get<{ banners: BannerItem[] }>("/banner");
  //
  //       if (err) {
  //         setError(`请求失败: ${err.message}`);
  //         return;
  //       }
  //
  //       if (response && response.banners) {
  //         setBanners(response.banners);
  //       }
  //     } catch (err) {
  //       setError("未知错误");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>加载中...</div>;
  // }
  //
  // if (error) {
  //   return <div style={{ color: "red" }}>{error}</div>;
  // }

  return (
    <div>
      <h2>推荐内容</h2>
      {/*<div style={{ display: "flex", overflowX: "auto", gap: "16px" }}>*/}
      {/*  {banners.map((banner, index) => (*/}
      {/*    <div key={index} style={{ minWidth: "200px", textAlign: "center" }}>*/}
      {/*      <img*/}
      {/*        src={banner.imageUrl}*/}
      {/*        alt={banner.title}*/}
      {/*        style={{ width: "100%", height: "120px", objectFit: "cover" }}*/}
      {/*      />*/}
      {/*      <p>{banner.title}</p>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
};

export default memo(Recommend);
