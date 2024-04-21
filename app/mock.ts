export const mockData = {
  volumeInfo: {
    imageLinks: {
      thumbnail: "https://placehold.jp/150x300.png",
    },
    title: "夜は短し歩けよ乙女夜は短し歩け夜は短し歩夜は",
    authors: ["森見登美彦"],
    publishedDate: "2003-12/12",
    pageCount: "123",
    description:
      "※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 今読むべき２篇の名作を奇跡のマンガ化――世界で愛される村上春樹の恋愛短篇「螢」と、G・オーウェルが超管理社会到来を予言したディストピア長篇「一九八四年」！解説・柴田元幸",
  },
  readingDate: {
    startDate: new Date(),
    finalDate: new Date(),
  },
  readingMemo:
    "今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも今日もめも",
};

export interface dataType {
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
    };
    title: string;
    authors: string[];
    publishedDate: string;
    pageCount: string;
    description: string;
  };
  readingDate?: {
    startDate: Date;
    finalDate: Date;
  };
  readingMemo?: string;
}
