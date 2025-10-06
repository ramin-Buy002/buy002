import React, { useState, useEffect } from "react";
import * as hl from "@nktkas/hyperliquid";

const Trade = () => {
  const [dataCoins, setDataCoins] = useState([
    { nameCoin: "XRP", first_pcs: 10, now_pcs: 11, firstPrice: 2.8903, nowPrice: 0, buy_sell_price: 3.0454 },
    { nameCoin: "DOGE", first_pcs: 10, now_pcs: 11, firstPrice: 0.2334, nowPrice: 0, buy_sell_price: 0.25562 },
    { nameCoin: "ADA", first_pcs: 10, now_pcs: 11, firstPrice: 0.8067, nowPrice: 0, buy_sell_price: 0.8708 },
    { nameCoin: "LINK", first_pcs: 10, now_pcs: 11, firstPrice: 21.5405, nowPrice: 0, buy_sell_price: 22.31 },
    { nameCoin: "NEAR", first_pcs: 10, now_pcs: 11, firstPrice: 2.9705, nowPrice: 0, buy_sell_price: 3.053 },
    { nameCoin: "AVAX", first_pcs: 10, now_pcs: 11 , firstPrice: 30.7806, nowPrice: 0, buy_sell_price: 30.24 },
    { nameCoin: "HYPE", first_pcs: 10, now_pcs: 11 , firstPrice: 46.4060, nowPrice: 0, buy_sell_price: 50.01 },
  ]);

  const [hi_percent_coin, setHi_percent_coin] = useState({});
  const [results, setResults] = useState([]);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const PercentageCalculation = (coins) => {

    const calc = (A_price, B_price, A_buy_sell_price, B_buy_sell_price) => {
      return ((A_price / A_buy_sell_price) / (B_price / B_buy_sell_price) - 1) * 100;
    };
  
    const Data_percent = [];
  
    coins.forEach((a, i) => {
      coins.forEach((b, j) => {
        if (j > i && b.nowPrice > 0) {
          const Percent = calc(a.nowPrice, b.nowPrice, a.buy_sell_price, b.buy_sell_price);
          Data_percent.push({
            label: `${a.nameCoin} / ${b.nameCoin}`,
            coin_name_01: a.nameCoin,
            coin_name_02: b.nameCoin,
            percent: Percent,
          });
        }
      });
    });
  
    Data_percent.sort((a, b) => Math.abs(b.percent) - Math.abs(a.percent));
    setResults(Data_percent);
  
 
    const filtered = Data_percent.filter(item => Math.abs(item.percent) > 2);
  
    if (filtered.length > 0) {
      let selectedPair = null;
  
    
      for (const item of filtered) {
        const sellCoin = coins.find(c => c.nameCoin === item.coin_name_02);
        const buyCoin = coins.find(c => c.nameCoin === item.coin_name_01);
  
      
        const temp = item.coin_name_01;
        item.coin_name_01 = item.coin_name_02;
        item.coin_name_02 = temp;
  
        const sellCondition =
          sellCoin &&
          sellCoin.first_pcs * sellCoin.firstPrice * 0.25 <
            sellCoin.now_pcs * sellCoin.nowPrice;
  
        if (sellCondition) {
          selectedPair = {
            sell: item.coin_name_02,
            buy: item.coin_name_01,
            percent: item.percent,
          };
          break;  
        }
      }
  
      if (selectedPair) {
        setHi_percent_coin(selectedPair);
        console.log("  جفت معتبر پیدا شد:", selectedPair);
      } else {
        setHi_percent_coin({});
        console.log(" جفتی با شرط مورد نظر پیدا نشد");
      }
    }
  };
  
   
  const funTrade = async (symbol, side, size) => {
    try {
      const res = await fetch("http://localhost:3001/api/execute-trade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symbol, side, size }),
      });
  
      const data = await res.json();
      console.log("Trade result:", data);
    } catch (err) {
      console.error("Error executing trade:", err);
    }
  };

  const A_B_C_D = (coins) => {
    const totalFirstValue = coins.reduce((sum, c) => sum + c.first_pcs * c.firstPrice, 0);
    const totalNowValue = coins.reduce((sum, c) => sum + c.now_pcs * c.nowPrice, 0);
    const totalWithoutTrade = coins.reduce((sum, c) => sum + c.first_pcs * c.nowPrice, 0);
    const totalInitial = coins.reduce((sum, c) => sum + c.now_pcs * c.firstPrice, 0);

    setA(totalFirstValue.toFixed(2));
    setB(totalNowValue.toFixed(2));
    setC(totalWithoutTrade.toFixed(2));
    setD(totalInitial.toFixed(2));
  };
  console.log("dataCoins " , dataCoins ) ; 
  console.log("  hi_percent_coin ::  " , hi_percent_coin ) ; 

  useEffect(() => {
    const fetchFromHyperliquid = async () => {
      try {
        const infoClient = new hl.InfoClient({ transport: new hl.HttpTransport() });
        const [meta, ctxs] = await infoClient.metaAndAssetCtxs();

        const updated = dataCoins.map((coin) => {
          const idx = meta.universe.findIndex(u => u.name === coin.nameCoin);
          if (idx >= 0) {
            const ctx = ctxs[idx];
            const price = ctx.markPx || ctx.markPrice || ctx.oraclePx || 0;
            coin.nowPrice = parseFloat(price);
          } else {
            console.warn(`Coin ${coin.nameCoin} not found in Hyperliquid`);
          }
          return coin;
        });

        setDataCoins(updated);
        PercentageCalculation(updated);
        A_B_C_D(updated);
      } catch (err) {
        console.error(" Error fetching from Hyperliquid:", err);
      }
    };

    fetchFromHyperliquid();
    const interval = setInterval(fetchFromHyperliquid, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-70 mt-8">
      <div className="flex flex-row">


        <div>
          <h1 className="font-bold text-xl m mb-15 ">The best for trading</h1>

          <div  className=" mt-5 " >
          <ul >
            {results.map((r, index) => (
              <div key={index} className="flex items-center mb-2  ">
                <p className="bg-blue-200 border rounded-lg px-3 py-2 w-56">{r.label}</p>
                <p className="ml-4 text-red-600 font-semibold">{r.percent.toFixed(2)}%</p>
              </div>
            ))}
          </ul>
          </div>

        </div>

        
        <div className="ml-40">
        
          <ul>
            {dataCoins.map((r, index) => (
               <p
               key={index}
               className="ml-2 mt-2 bg-blue-50 flex justify-between border rounded-lg p-3 w-[680px]"
             >
               <span className="text-emerald-950 font-bold ml-3 ">{r.nameCoin}</span>

               <span  className="ml-6">
                now_price {"   "} : {"   " } <span  className=" font-bold "> {r.nowPrice}  </span> <span className="text-gray-500">$</span>
               </span>

               <span className="ml-8 " >now_pcs {"  "}: <span  className=" font-bold ">  {r.now_pcs}</span> </span>

               <span  className="ml-8 " >first_Price {"  "} : <span  className=" font-bold ">  {r.firstPrice}</span></span>
               <span className="ml-8 " >first_pcs {"  "}: <span  className=" font-bold ">  {r.first_pcs}</span> </span>


               <span  className="ml-8   mr-9 " >buy_sell_price {"  "} : <span  className=" font-bold ">  {r.buy_sell_price}</span></span>

             </p>
            ))}
          </ul>

          <div  className=" flex flex-row  ml-10">


          <div className="mt-10">
            <p className="text-lg">A = ∑(price_first * pcs_first) = <b>{a}$</b></p>
            <p className="text-lg">B = ∑(price_now * pcs_now) = <b>{b}$</b></p>
            <p className="text-lg">C = ∑(price_now * pcs_first) = <b>{c}$</b></p>
            <p className="text-lg">D = ∑(price_first * pcs_now) = <b>{d}$</b></p>
          </div>

          <div className="mt-10  ml-30 ">

              <h2 className="font-bold text-2xl">List (Buy & Sell)</h2>
              <p className=" ml-10 mt-4 text-xl "> Sell {"  "} : <span className="  text-red-400   font-bold " > {hi_percent_coin.sell}</span> </p>
              <p className=" ml-10 text-xl mt-2 "> Buy {"  "} : <span className=" text-green-500 font-bold " > {hi_percent_coin.buy} </span> </p>

          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Trade ;
