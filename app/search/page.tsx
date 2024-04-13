import React from "react";
import LeftBar from "../components//SideBar/LeftBar";
import Search from "./Search";
import RightBar from "../components/SideBar/RightBar";

export default function SearchComtainer() {
  return (
    <div className="flex h-svh">
      <LeftBar />
      <Search />
      <RightBar />
    </div>
  );
}
