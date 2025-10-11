import React, { useState, useEffect } from "react";
import * as hl from "@nktkas/hyperliquid";

const Trade = () => {
  const [dataCoins, setDataCoins] = useState([
    {
      nameCoin: "XRP",
      first_pcs: 10,
      now_pcs: 11,
      firstPrice: 2.8903,
      nowPrice: 0,
      buy_sell_price: 3.0454,
    },
    {
      nameCoin: "DOGE",
      first_pcs: 10,
      now_pcs: 11,
      firstPrice: 0.2334,
      nowPrice: 0,
      buy_sell_price: 0.25562,
    },
    {
      nameCoin: "ADA",
      first_pcs: 10,
      now_pcs: 11,
      firstPrice: 0.8067,
      nowPrice: 0,
      buy_sell_price: 0.8708,
    },
    {
      nameCoin: "LINK",
      first_pcs: 10,
      now_pcs: 10,
      firstPrice: 21.5405,
      nowPrice: 0,
      buy_sell_price: 18 ,
    },
    {
      nameCoin: "NEAR",
      first_pcs: 10,
      now_pcs: 11,
      firstPrice: 2.9705,
      nowPrice: 0,
      buy_sell_price: 2.43,
    },
    {
      nameCoin: "AVAX",
      first_pcs: 10,
      now_pcs: 11,
      firstPrice: 30.7806,
      nowPrice: 0,
      buy_sell_price: 30.24,
    },
    {
      nameCoin: "HYPE",
      first_pcs: 10,
      now_pcs: 11,
      firstPrice: 46.406,
      nowPrice: 0,
      buy_sell_price: 50.01,
    },
  ]);

  const [hi_percent_coin, setHi_percent_coin] = useState({});
  const [results, setResults] = useState([]);
  const [isTrading, setIsTrading] = useState(false);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const funTrade = async (symbol, side, size) => {
    try {
      const res = await fetch("http://localhost:3001/api/execute-trade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symbol, side, size }),
      });
      return await res.json();
    } catch (err) {
      console.error("Error executing trade:", err);
      return { success: false, error: err.message };
    }
  };

  const executeTradeSequence = async (sellCoin, buyCoin) => {
    setIsTrading(true);
    console.log(` start trade :  ${sellCoin}   to   ${buyCoin}`);

    const sellRes = await funTrade(sellCoin, "sell", 1);
    if (!sellRes.success) {
      console.error("error in sell :: ", sellRes);
      setIsTrading(false);
      return;
    }
    console.log(`${sellCoin} sell ok `);

    const buyRes = await funTrade(buyCoin, "buy", 1);
    if (!buyRes.success) {
      console.error("   error in buy  ", buyRes);
      setIsTrading(false);
      return;
    }
    console.log(` buy ok : ${buyCoin} `);

    setDataCoins((prev) =>
      prev.map((c) => {
        if (c.nameCoin === sellCoin || c.nameCoin === buyCoin) {
          return { ...c, buy_sell_price: c.nowPrice };
        }
        return c;
      })
    );

    setIsTrading(false);
  };

  const PercentageCalculation = async (coins) => {
    if (isTrading) return;

    const calc = (A_price, B_price, A_buy_sell_price, B_buy_sell_price) =>
      (A_price / A_buy_sell_price / (B_price / B_buy_sell_price) - 1) * 100;

    const Data_percent = [];

    coins.forEach((a, i) => {
      coins.forEach((b, j) => {
        if (j > i && b.nowPrice > 0) {
          const percent = calc(
            a.nowPrice,
            b.nowPrice,
            a.buy_sell_price,
            b.buy_sell_price
          );
          Data_percent.push({
            label: `${a.nameCoin} / ${b.nameCoin}`,
            coinA: a.nameCoin,
            coinB: b.nameCoin,
            percent,
          });
        }
      });
    });

    Data_percent.sort((a, b) => Math.abs(b.percent) - Math.abs(a.percent));
    setResults(Data_percent);

    const best = Data_percent.find((item) => Math.abs(item.percent) > 2);
    if (!best) return;

    let sellCoin, buyCoin;
    if (best.percent > 0) {
      sellCoin = best.coinA;
      buyCoin = best.coinB;
    } else {
      sellCoin = best.coinB;
      buyCoin = best.coinA;
    }
    const sell_Data = coins.find((c) => c.nameCoin === sellCoin);
    console.log("sellCoin :::: ", sellCoin);
    console.log("sellCoin :::: ", sell_Data);

    if (
      sell_Data.first_pcs * sell_Data.firstPrice * 0.25 <
      sell_Data.now_pcs * sell_Data.nowPrice
    ) {
      setHi_percent_coin({
        sell: sellCoin,
        buy: buyCoin,
        percent: best.percent,
      });
    } else {
      setHi_percent_coin({});
    }

    if (isTrading) return;

    setIsTrading(true);
    try {
      await executeTradeSequence(sellCoin, buyCoin);
    } finally {
      setIsTrading(false);
    }
  };

  const A_B_C_D = (coins) => {
    const totalFirstValue = coins.reduce(
      (sum, c) => sum + c.first_pcs * c.firstPrice,
      0
    );
    const totalNowValue = coins.reduce(
      (sum, c) => sum + c.now_pcs * c.nowPrice,
      0
    );
    const totalWithoutTrade = coins.reduce(
      (sum, c) => sum + c.first_pcs * c.nowPrice,
      0
    );
    const totalInitial = coins.reduce(
      (sum, c) => sum + c.now_pcs * c.firstPrice,
      0
    );

    setA(totalFirstValue.toFixed(2));
    setB(totalNowValue.toFixed(2));
    setC(totalWithoutTrade.toFixed(2));
    setD(totalInitial.toFixed(2));
  };

  console.log("hi_percent_coin :: ", hi_percent_coin);

  useEffect(() => {
    const fetchFromHyperliquid = async () => {
      if (isTrading) return;

      try {
        const infoClient = new hl.InfoClient({
          transport: new hl.HttpTransport(),
        });
        const [meta, ctxs] = await infoClient.metaAndAssetCtxs();

        const updated = dataCoins.map((coin) => {
          const idx = meta.universe.findIndex((u) => u.name === coin.nameCoin);
          if (idx >= 0) {
            const ctx = ctxs[idx];
            coin.nowPrice = parseFloat(
              ctx.markPx || ctx.markPrice || ctx.oraclePx || 0
            );
          }
          return coin;
        });

        setDataCoins(updated);
        await PercentageCalculation(updated);
        A_B_C_D(updated);
      } catch (err) {
        console.error("  Error fetching from Hyperliquid  : ", err);
      }
    };

    fetchFromHyperliquid();
    const interval = setInterval(fetchFromHyperliquid, 10000);
    return () => clearInterval(interval);
  }, [isTrading]);

  return (
    <div className="ml-70 mt-8">
      <div className="flex flex-row">
        <div>
          <h1 className="font-bold text-xl mb-5">The best for trading</h1>
          <ul className="mt-5">
            {results.map((r, index) => (
              <div key={index} className="flex items-center mb-2">
                <p className="bg-blue-200 border rounded-lg px-3 py-2 w-56">
                  {r.label}
                </p>
                <p className="ml-4 text-red-600 font-semibold">
                  {r.percent.toFixed(2)}%
                </p>
              </div>
            ))}
          </ul>
        </div>

        <div className="ml-40">
          <ul>
            {dataCoins.map((r, index) => (
              <p
                key={index}
                className="ml-2 mt-2 bg-blue-50 flex justify-between border rounded-lg p-3 w-[680px]"
              >
                <span className="text-emerald-950 font-bold ml-3">
                  {r.nameCoin}
                </span>
                <span className="ml-6">
                  now_price: <b>{r.nowPrice}</b> $
                </span>
                <span className="ml-8">
                  now_pcs: <b>{r.now_pcs}</b>
                </span>
                <span className="ml-8">
                  first_Price: <b>{r.firstPrice}</b>
                </span>
                <span className="ml-8">
                  first_pcs: <b>{r.first_pcs}</b>
                </span>
                <span className="ml-8 mr-9">
                  buy_sell_price: <b>{r.buy_sell_price}</b>
                </span>
              </p>
            ))}
          </ul>

          <div className="flex flex-row ml-10">
            <div className="mt-10">
              <p>
                <span className="     text-2xl "> A = </span>
                <span className="     text-2xl "> ∑ </span>
                <span className="     text-1xl ">
                  {" "}
                  ( price_first * pcs_first ) ={" "}
                </span>
                <span className="    ml-3  text-2xl font-bold ">
                  {" "}
                  {a} {"   "} ${" "}
                </span>
              </p>

              <p className="  mt-3 ">
                <span className="     text-2xl "> B = </span>
                <span className="     text-2xl "> ∑ </span>
                <span className="     text-1xl ">
                  {" "}
                  ( price_now * pcs_now ) ={" "}
                </span>
                <span className=" ml-3   text-2xl font-bold ">
                  {" "}
                  {b} {"   "} ${" "}
                </span>
              </p>

              <p className="  mt-3 ">
                <span className="     text-2xl "> C = </span>
                <span className="     text-2xl "> ∑ </span>
                <span className="     text-1xl ">
                  {" "}
                  ( price_now * pcs_first ) ={" "}
                </span>
                <span className=" ml-3    text-2xl font-bold ">
                  {" "}
                  {c} {"   "} ${" "}
                </span>
              </p>
              <p className="  mt-3 ">
                <span className="     text-2xl  "> D = </span>
                <span className="     text-2xl "> ∑ </span>
                <span className="     text-1xl ">
                  {" "}
                  ( price_first * pcs_now ) ={" "}
                </span>
                <span className=" ml-3   text-2xl font-bold ">
                  {" "}
                  {d} {"   "} ${" "}
                </span>
              </p>
            </div>

            <div className="mt-10 ml-30">
              <h2 className="font-bold text-2xl">List (Buy & Sell)</h2>
              <p className="ml-10 mt-4 text-xl">
                Sell:{" "}
                <span className="text-red-400 font-bold">
                  {hi_percent_coin.sell}
                </span>
              </p>
              <p className="ml-10 text-xl mt-2">
                Buy:{" "}
                <span className="text-green-500 font-bold">
                  {hi_percent_coin.buy}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
