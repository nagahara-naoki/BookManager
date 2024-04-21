"use client";
import React, { useState } from "react";
import BookCard from "../Card/BookCard/BookCard";
import { FaSearch } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { IconContext } from "react-icons";
import Link from "next/link";
import { mockData } from "@/app/mock";
import { useSelector } from "react-redux";

export default function SideBar() {
  const storeBooks = useSelector((state: any) => state.test.value);
  console.log(storeBooks);
  const [a, seta] = useState(true);
  const isOK = () => {
    seta(!a);
  };
  const [inputChange, setInputChange] = useState("");
  const flexWidth = a ? "w-64" : "w-20";
  const isFlex = a ? "" : "flex";
  const isHideen = a ? "block" : "hidden";
  const isShow = a ? "hidden" : "block";
  const getChange = (e: string) => {
    setInputChange(e);
  };
  const bookData = mockData;
  return (
    <div
      className={`border border-gray shadow px-3 h-full  transition-all ${flexWidth}`}
      // onClick={isOK}
    >
      <div className="w-full h-full flex flex-col text-center">
        <div className="h-2/6 border-b-2 border-gray">
          <div
            className={`justify-center bg-red-500 flex items-center p-4 ${isFlex}`}
          >
            <Link href={"/"}>
              <h1 className={`text-xl font-bold`}>
                <IconContext.Provider value={{ size: "40px" }}>
                  <AiOutlineGithub />
                </IconContext.Provider>
              </h1>
            </Link>
            <h1 className={`text-xl font-bold ${isHideen}`}>BOOKS MANAGER</h1>
          </div>
          <div className="">
            <form className="border rounded p-1 flex justify-center">
              <input
                type="text"
                className={`focus:outline-none ${isHideen}`}
                placeholder="本を調べる"
                onChange={(e) => getChange(e.target.value)}
              />
              <Link href={`/search?q=${inputChange}`}>
                <button className="hover:bg-gray p-1 rounded">
                  <FaSearch />
                </button>
              </Link>
            </form>
          </div>
        </div>
        <p className={`text-sm m-2 ${isHideen}`}>登録している本一覧</p>
        <div className="overflow-auto h-5/6 pr-1">
          {storeBooks &&
            storeBooks.map((list: any) => (
              <BookCard bookData={list} key={list.id} />
            ))}
        </div>
        <div className="footer flex gap-3 items-center border-t-2 border-gray py-3">
          <div className="icon border w-10 h-10 bg-black rounded-full"></div>
          <div className={`text-xs text-left ${isHideen}`}>
            <p>NAOKI NAGAHARA</p>
            <p>0512.nagahara@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <button onClick={isOK}>OK</button>; */
}
