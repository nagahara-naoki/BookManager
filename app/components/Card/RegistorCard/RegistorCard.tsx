import React from "react";
import Image from "next/legacy/image";

export default function RegistorCard() {
  return (
    <div className="border rounded mr-2 shadow-sm">
      <div className="flex gap-3 p-2">
        <div className="bg-black min-w-20 min-h-28 max-h-28"></div>
        <div className="">
          <p className="font-bold mb-1">森見登美彦</p>
          <p className="text-sm">『 よ乙女よ乙女よ乙女』</p>
        </div>
      </div>
    </div>
  );
}
