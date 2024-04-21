"use client";
import React, { useEffect, useState } from "react";
import Description from "./Description/Description";
import Memo from "./Memo/Memo";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import { PiFlagDuotone } from "react-icons/pi";
import { IconContext } from "react-icons";

export default function Article() {
  const dispatch = useDispatch();
  const Progress = dynamic(() => import("./Progress/Progress"), { ssr: false });
  const [mockData, setMockData]: any = useState();
  let data = null;

  useEffect(() => {
    if (localStorage.getItem("mock")) {
      data = localStorage.getItem("mock") as string;
      const result = JSON.parse(data);
      if (result !== undefined) {
        setMockData(result);
      }
    }
  }, []);

  return (
    <div className="flex-1 flex justify-center items-center">
      {mockData && (
        <div className="gap-4 h-full flex flex-col flex-grow border-black p-4">
          <Description volumeInfo={mockData.volumeInfo} />
          <div className="flex gap-4 h-full">
            <Memo readingMemo={mockData.readingMemo} />
            <Progress readingDate={mockData.readingDate} />
          </div>
        </div>
      )}
      {!mockData && (
        <div className="flex items-center">
          {/* <IconContext.Provider value={{ size: "24px" }}>
            <PiFlagDuotone />
          </IconContext.Provider> */}
          <div className="">
            <p>本の登録情報がありません</p>
            <p>検索して登録してください</p>
          </div>
        </div>
      )}
    </div>
  );
}
