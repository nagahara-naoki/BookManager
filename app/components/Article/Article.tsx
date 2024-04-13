import React from "react";
import Description from "./Description/Description";
import Memo from "./Memo/Memo";
import dynamic from "next/dynamic";

export default function Article() {
  const Progress = dynamic(() => import("./Progress/Progress"), { ssr: false });

  return (
    <div className="gap-4 h-full flex flex-col flex-grow border-black p-4">
      <Description />
      <div className="flex gap-4 h-full">
        <Memo />
        <Progress />
      </div>
    </div>
  );
}
