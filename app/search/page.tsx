import React from "react";
import LeftBar from "../components//SideBar/LeftBar";
import Search from "./Search";
import RightBar from "../components/SideBar/RightBar";
import { Suspense } from "react";

export default function SearchComtainer() {
  return (
    <div className="flex h-svh">
      <LeftBar />
      <Suspense fallback={<div>ローディング中</div>}>
        <Search />
      </Suspense>
      <RightBar />
    </div>
  );
}
