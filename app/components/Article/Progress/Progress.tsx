"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [{ name: "Group A", value: 1 }];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Progress() {
  return (
    <div className="border h-full rounded w-1/2 shadow-sm p-3">
      <span className="inline-block text-xl font-bold p-1 mb-3 border-b-2 border-black">
        Progress in Reading
      </span>
      <div className="flex justify-around mt-4">
        <div className="flex flex-col justify-around">
          <div>
            <h1>現在のページを入力してください</h1>
            <div className="flex mt-2 items-end">
              <input
                type="text"
                className="w-14 border rounded mr-1 px-2 text-sm py-1 font-bold"
              />
              <p className="font-bold text-sm">ページ</p>
            </div>
          </div>
          <div className="">
            <p>
              読み始めた日<span className="ml-7">2002/12/12</span>
            </p>
            <p>
              最後に読んだ日<span className="ml-3">20012/12/12</span>
            </p>
          </div>
        </div>
        <div>
          <PieChart width={220} height={180}>
            <Pie
              data={data}
              cx={120}
              cy={85}
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
}
