import React, { type ReactNode, Suspense } from "react";
import { Outlet } from "react-router-dom";
import DiscoverHeader from "@/pages/discover/components/discover_header.tsx";

interface IProps {
  children?: ReactNode;
}

const Discover: React.FC<IProps> = () => {
  return (
    <div>
      <DiscoverHeader />
      <Suspense fallback={"loading"}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Discover;
