"use client";
import React from "react";
import Image from "next/image";
import { dataType, mockData } from "@/app/mock";
import { useDispatch } from "react-redux";
import { addBook } from "@/app/slice";

export default function SearchCard({
  setOpenModal,
  searchResultArray,
  setClickDetail,
}: any) {
  const mock: dataType = mockData;
  const mockArray = new Array(100).fill(mock);
  const modalToggle = (bool: boolean, list: any) => {
    setOpenModal(bool);
    setClickDetail(list);
  };
  const onRegistoer = (list: any) => {
    dispatch(addBook(list));
    // const registore = JSON.stringify(mock);
    // localStorage.setItem("mock", registore);
  };
  console.log(searchResultArray);
  const dispatch = useDispatch();
  return (
    <div className="h-full overflow-auto grid grid-cols-2 gap-4 py-4 px-3 pb-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-11">
      {/* <div className="h-full overflow-auto grid grid-cols-6 gap-11 py-4 px-3 pb-5"> */}
      {mockArray &&
        mockArray.map((list: any) => (
          <div
            className="w-100 max-h-80 relative p-1 border rounded shadow-md"
            key={list.id}
          >
            <div className="w-full">
              <div className="relative h-52">
                {list.volumeInfo.imageLinks && (
                  <Image
                    src={list.volumeInfo.imageLinks.thumbnail}
                    alt=""
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                    className="rounded"
                  />
                )}
              </div>
              <div className="flex items-center py-2 h-14">
                <p className="text-xs mt-1 px-2 ">{list.volumeInfo.title}</p>
              </div>
              <div className="py-2 gap-3 border-t-2 border-gray w-full flex justify-center">
                <button
                  onClick={() => modalToggle(true, list)}
                  className="border px-2 rounded text-sm hover:bg-green hover:text-white"
                >
                  詳細
                </button>
                <button
                  className="border px-2 rounded text-sm hover:bg-red hover:text-white"
                  onClick={() => onRegistoer(list)}
                >
                  登録
                </button>
              </div>
            </div>
          </div>
        ))}
      {/* {mock && (
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
            <button
              className="border px-2 rounded text-sm hover:bg-red hover:text-white"
              onClick={onRegistoer}
            >
              登録
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
