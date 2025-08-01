import { Navigate, type RouteObject } from "react-router-dom";

import { lazy } from "react";
// 懒加载，分包处理，点击哪个下载哪个，第一次会加载
const Discover = lazy(() => import("@/pages/discover"));
const Mine = lazy(() => import("@/pages/mine"));
const Download = lazy(() => import("@/pages/download"));
const Friend = lazy(() => import("@/pages/friend"));
const Recommend = lazy(
  () => import("@/pages/discover/discover_child/recommend"),
);
const DJ = lazy(() => import("@/pages/discover/discover_child/dj_radio"));
const Album = lazy(() => import("@/pages/discover/discover_child/album"));
const Artist = lazy(() => import("@/pages/discover/discover_child/artist"));
const Ranking = lazy(() => import("@/pages/discover/discover_child/ranking"));
const Songs = lazy(() => import("@/pages/discover/discover_child/songs"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to={"/discover/recommend"} />,
      },
      {
        path: "/discover/recommend",
        element: <Recommend />,
      },
      {
        path: "/discover/dj_radio",
        element: <DJ />,
      },
      {
        path: "/discover/album",
        element: <Album />,
      },
      {
        path: "/discover/artist",
        element: <Artist />,
      },
      {
        path: "/discover/ranking",
        element: <Ranking />,
      },
      {
        path: "/discover/songs",
        element: <Songs />,
      },
    ],
  },
  {
    path: "/friend",
    element: <Friend />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/mine",
    element: <Mine />,
  },
];
export default routes;
