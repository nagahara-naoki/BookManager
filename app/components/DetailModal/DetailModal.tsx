import { mockData } from "@/app/mock";
import { addBook } from "@/app/slice";
import React from "react";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

export default function DetailModal({ setOpenModal, clickDetail }: any) {
  const dispatch = useDispatch();
  const data = clickDetail;
  const modalToggle = (bool: boolean) => {
    setOpenModal(bool);
  };
  const onRegistoer = (list: any) => {
    dispatch(addBook(list));
    modalToggle(false);
  };
  return (
    <div className="h-full max-h-96 rounded p-3">
      <div className="flex justify-between itemscenter p-1 mb-3 border-b-2 border-black">
        <p>詳細</p>
        <IconContext.Provider value={{ size: "24px" }}>
          <IoClose
            className="hover:bg-gray rounded cursor-pointer"
            onClick={() => modalToggle(false)}
          />
        </IconContext.Provider>
      </div>
      {data && (
        <div className="flex h-5/6 gap-5 max-h-5/6">
          <div className="w-1/5 h-full">
            <div className="bg-gray h-full relative">
              {/* <Image
            src={data.volumeInfo.imageLinks.thumbnail}
            // src="https://placehold.jp/150x300.png"
            alt=""
            fill
            style={{
              objectFit: "cover",
            }}
          /> */}
            </div>
          </div>
          <div className="flex w-4/5 h-full gap-4">
            <div className="h-full w-1/3 flex flex-col gap-3 overflow-auto">
              <div>
                <p className="font-bold relative pl-2 after:afterBorder">
                  タイトル
                </p>
                <p className="text-sm">{data.volumeInfo.title}</p>
              </div>
              <div>
                <p className="font-bold relative pl-2 after:afterBorder">
                  作者
                </p>
                <p className="text-sm">{data.volumeInfo.authors}</p>
              </div>
              <div>
                <p className="font-bold relative pl-2 after:afterBorder">
                  ページ数
                </p>
                <p className="text-sm">{data.volumeInfo.pageCount}ページ</p>
              </div>
              <div>
                <p className="font-bold relative pl-2 after:afterBorder">
                  出版日
                </p>
                <p className="text-sm">{data.volumeInfo.publishedDate}</p>
              </div>
            </div>
            <div className="w-2/3  h-full">
              <p className="font-bold relative after:afterBorder pl-2">
                あらすじ
              </p>
              <p className="h-5/6 overflow-auto text-sm">
                {data.volumeInfo.description}
              </p>
            </div>
          </div>
          <button
            onClick={() => onRegistoer(data)}
            className="absolute bottom-4 right-4 border p-2 rounded text-sm hover:bg-red hover:text-white"
          >
            登録する
          </button>
        </div>
      )}
    </div>
  );
}
