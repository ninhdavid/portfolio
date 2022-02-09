const quotes = [
  {
    quote: "雲の向こうは、いつも青空。",
    author: "ルイーザ・メイ・オルコット",
  },
  {
    quote: "変革せよ。変革を迫られる前に。",
    author: "ジャック・ウェルチ",
  },
  {
    quote: "夢見ることができれば、それは実現できる。",
    author: "ウォルト・ディズニー",
  },
  {
    quote: "自分の生きる人生を愛せ。自分の愛する人生を生きろ。",
    author: "ボブ・マーリー",
  },
  {
    quote: "何事も成功するまでは不可能に思えるものである。",
    author: "ネルソン・マンデラ",
  },
  {
    quote: "平和は微笑みから始まります。",
    author: "マザー・テレサ",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = "「 " + todaysQuote.quote + "」";
author.innerText = todaysQuote.author;
