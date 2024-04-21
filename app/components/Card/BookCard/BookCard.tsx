"use client";
import { dataType, mockData } from "@/app/mock";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import { IconContext } from "react-icons";
import { PiBookDuotone } from "react-icons/pi";
export default function BookCard({ bookData }: any) {
  const progressPar = 50;
  const mock = bookData;
  console.log(mock);

  return (
    <div
      className="cursor-pointer mb-3 hover:bg-gray rounded p-2"
      key={mock.id}
    >
      <div className="w-full flex mb-2">
        <div>
          <IconContext.Provider value={{ size: "24px" }}>
            <PiBookDuotone />
          </IconContext.Provider>
        </div>
        <div className="truncate text-sm font-bold text-left">
          {mock.volumeInfo.title}
        </div>
      </div>
      <ProgressBar
        className="w-3/4 h-4 m-auto"
        now={progressPar}
        label={`${progressPar}%`}
      />
    </div>
  );
}
