import RegistorCard from "../Card/RegistorCard/RegistorCard";

export default function RightBar() {
  return (
    <div
      className={`overhlow shadow h-full flex flex-col justify-between border border-y-black transition-all duration-500 p-3`}
    >
      <button className="absolute right-2"></button>
      <h1 className={`text-center border-gray border-b-2 pb-3`}>登録する本</h1>
      <div className="h-5/6 overflow-auto py-3 border-gray border-b-2">
        <div className="flex flex-col gap-3">
          <RegistorCard />
          <RegistorCard />
          <RegistorCard />
          <RegistorCard />
          <RegistorCard />
          <RegistorCard />
          <RegistorCard />
          <RegistorCard />
          <RegistorCard />
        </div>
      </div>
      <div className={`flex justify-center gap-4 mb-2`}>
        <button className="border p-1 rounded hover:bg-gray text-sm">
          キャンセル
        </button>
        <button className="border p-1 rounded hover:bg-gray text-sm">
          登録する
        </button>
      </div>
    </div>
  );
}
