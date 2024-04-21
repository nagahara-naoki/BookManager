"use client";
import React from "react";
import LeftBar from "../components//SideBar/LeftBar";
import Search from "./Search";
import RightBar from "../components/SideBar/RightBar";
import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "../store";

export default function SearchComtainer() {
  return (
    <Provider store={store}>
      <div className="flex h-svh">
        <LeftBar />
        <Suspense fallback={<div>ローディング中</div>}>
          <Search />
        </Suspense>
        <RightBar />
      </div>
    </Provider>
  );
}
