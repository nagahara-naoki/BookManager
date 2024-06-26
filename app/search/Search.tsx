"use client";
import React, { useMemo, useState } from "react";
import SearchCard from "../components/Card/SearchCard/SearchCard";
import { useSearchParams } from "next/navigation";
import DetailModal from "../components/DetailModal/DetailModal";

export default function Search() {
  const url = "https://www.googleapis.com/books/v1/volumes?q=";
  const params = useSearchParams();
  const [searchResultArray, setSearchResultArray] = useState([]);
  const query = params.get("q");
  const [openModal, setOpenModal] = useState(false);
  const [clickDetail, setClickDetail] = useState();
  const closeModal = () => {
    setOpenModal(false);
  };
  // useMemo(() => {
  //   fetch(url + query).then((res) => {
  //     res.json().then((data) => {
  //       setSearchResultArray(data.items);
  //     });
  //   });
  // }, []);

  return (
    <div className="w-full temp h-full flex-grow px-3 py-3">
      <h1 className="border-b-2 border-gray pb-2">検索結果</h1>
      <SearchCard
        setOpenModal={setOpenModal}
        searchResultArray={searchResultArray}
        setClickDetail={setClickDetail}
      />
      {openModal && (
        <div className="bg-black bg-opacity-50 fixed flex h-full w-full top-0 left-0 items-center justify-center">
          <div className="bg-white absolute xz h-1/2 w-4/6 translate -translate-x-1/2 -translate-y-1/2 delay-1000 top-1/2 left-1/2 rounded">
            <DetailModal
              setOpenModal={setOpenModal}
              clickDetail={clickDetail}
            />
          </div>
        </div>
      )}
    </div>
  );
}
