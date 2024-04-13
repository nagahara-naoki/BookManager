"use client";
import React from "react";
import Image from "next/image";
import { dataType, mockData } from "@/app/mock";

export default function SearchCard({ setOpenModal }: any) {
  const mock: dataType = mockData;
  const modalToggle = (bool: boolean) => {
    setOpenModal(bool);
  };
  return (
    <div className="w-full  h-ful max-h-80 relative p-1 border rounded shadow-md">
      {mock && (
        <div className="w-full">
          <div className="relative h-52">
            <Image
              src={mock.volumeInfo.imageLinks.thumbnail}
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
              className="rounded"
            />
          </div>
          <div className="flex items-center py-2 h-14">
            <p className="text-xs mt-1 px-2 ">{mock.volumeInfo.title}</p>
          </div>
          <div className="py-2 gap-3 border-t-2 border-gray w-full flex justify-center">
            <button
              onClick={() => modalToggle(true)}
              className="border px-2 rounded text-sm hover:bg-green hover:text-white"
            >
              詳細
            </button>
            <button className="border px-2 rounded text-sm hover:bg-red hover:text-white">
              登録
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
