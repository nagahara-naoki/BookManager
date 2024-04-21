export default function Description(volumeInfo: any) {
  const data = volumeInfo;
  return (
    <div className="border h-full max-h-96 rounded shadow-sm p-3">
      <span className="p-1 inline-block text-xl font-bold mb-3 border-b-2 border-black">
        Description
      </span>
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
                className="rounded"
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
        </div>
      )}
    </div>
  );
}
