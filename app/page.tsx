"use client";
import { Provider } from "react-redux";
import Article from "./components/Article/Article";
import SideBar from "./components/SideBar/LeftBar";
import RightBar from "./components/SideBar/RightBar";
import store from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex h-svh ">
        <SideBar />
        <Article />
        <RightBar />
      </div>
    </Provider>
  );
}
