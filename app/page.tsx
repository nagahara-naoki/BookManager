import Article from "./components/Article/Article";
import SideBar from "./components/SideBar/LeftBar";
import RightBar from "./components/SideBar/RightBar";

export default function Home() {
  return (
    <div className="flex h-svh ">
      <SideBar />
      <Article />
      <RightBar />
    </div>
  );
}
