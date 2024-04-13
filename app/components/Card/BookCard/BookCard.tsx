"use client";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import { IconContext } from "react-icons";
import { PiBookDuotone } from "react-icons/pi";

export default function BookCard() {
  return (
    <div className="flex cursor-pointer mb-3 hover:bg-gray rounded p-1">
      <div className="w-full md:flex justify-center">
        <div className="truncate text-sm font-bold text-left mb-1 md:hidden">
          「夜は短し歩けよ乙女」
        </div>
        <div className="flex">
          <div>
            <IconContext.Provider value={{ size: "24px" }}>
              <PiBookDuotone />
            </IconContext.Provider>
          </div>
          <ProgressBar
            className="w-3/4 h-3 m-auto md:hidden"
            now={60}
            label={`${60}%`}
          />
        </div>
      </div>
    </div>
  );
}
