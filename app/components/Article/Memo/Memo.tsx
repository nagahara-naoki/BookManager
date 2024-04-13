import React from "react";

export default function Memo() {
  return (
    <div className="border h-full w-1/2 rounded shadow-sm p-3">
      <span className="p-1 inline-block text-xl font-bold mb-3 border-b-2 border-black">
        Memo
      </span>
      <div className="w-hull border rounded flex items-center relative flex-col">
        <textarea
          className="w-full focus:outline-none p-2"
          cols={40}
          rows={6}
        ></textarea>
        <div className="flex justify-center gap-4 border-t-2 border-gray w-11/12 p-2 py-3 mt-2">
          <button className="border px-2 rounded">Edit</button>
          <button className="border px-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
