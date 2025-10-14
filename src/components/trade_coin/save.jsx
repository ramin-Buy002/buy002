import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [dataCoins, setDataCoins] = useState([
    { nameCoin: "xrp", first_pcs: 1, now_pcs: 11, firstPrice: 2.8903, nowPrice: 0, buy_sell_price: 2.4454 },
    { nameCoin: "doge", first_pcs: 1, now_pcs: 11, firstPrice: 0.2334, nowPrice: 0, buy_sell_price: 0.262 },
    { nameCoin: "ada", first_pcs: 1, now_pcs: 11, firstPrice: 0.8067, nowPrice: 0, buy_sell_price: 0.6708 },
    { nameCoin: "link", first_pcs: 1, now_pcs: 10, firstPrice: 21.5405, nowPrice: 0, buy_sell_price: 17 },
    { nameCoin: "near", first_pcs: 1, now_pcs: 11, firstPrice: 2.9705, nowPrice: 0, buy_sell_price: 2.23 },
    { nameCoin: "avax", first_pcs: 1, now_pcs: 11, firstPrice: 30.7806, nowPrice: 0, buy_sell_price: 20.224 },
    { nameCoin: "bnb", first_pcs: 0.00001, now_pcs: 11, firstPrice: 1222.406, nowPrice: 0, buy_sell_price: 1122.01 },
  ]);

  const [tradeCount, setTradeCount] = useState(0);
  const [results, setResults] = useState([]);
  const [hiPercentCoin, setHiPercentCoin] = useState({});
  const [isTrading, setIsTrading] = useState(false);
  const [error, setError] = useState(null);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  // 🟢 اضافه شد: کنترل شروع و توقف
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


  const executeTradeSequence = async (sellCoin, buyCoin) => {
    if (isTrading) return;
    if (tradeCount >= 4) {
      console.log("⚠️ تعداد معاملات به حد مجاز (4) رسید.");
      return;
    }
  
    setIsTrading(true);
    console.log("🚀 Start trade:", sellCoin.nameCoin, "→", buyCoin.nameCoin);
  
    const sellPrice = parseFloat(sellCoin.nowPrice);
    const buyPrice = parseFloat(buyCoin.nowPrice);
    const sellAmount = parseFloat((sellCoin.now_pcs * 0.5).toFixed(6));
  
    if (sellAmount <= 0 || !sellPrice || !buyPrice) {
      console.error("❌ موجودی یا قیمت نامعتبر برای معامله:", { sellAmount, sellPrice, buyPrice });
      setIsTrading(false);
      return;
    }
  
    const usdValue = sellAmount * sellPrice;
    const buyAmount = parseFloat((usdValue / buyCoin.nowPrice).toFixed(8));
  
    if (buyAmount <= 0) {
      console.error("❌ مقدار خرید صفر یا نامعتبر است:", buyAmount);
      setIsTrading(false);
      return;
    }
  
    let finalUpdatedCoins = [];
  
    try {
      // 🔹 ارسال سفارش فروش
      const sellRes = await fetch("http://localhost:5000/api/sell", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          srcCurrency: sellCoin.nameCoin,
          dstCurrency: "usdt",
          amount: sellAmount,
          price: sellPrice,
          clientOrderId: `order_${Date.now()}`
        }),
      });
  
      await sleep(8000);
      const sellResult = await sellRes.json();
      console.log("📦 پاسخ از بک‌اند (فروش):", sellResult);
  
      // 🔹 ارسال سفارش خرید
      const buyRes = await fetch("http://localhost:5000/api/buy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          srcCurrency: buyCoin.nameCoin,
          dstCurrency: "usdt",
          amount: buyAmount,
          price: buyPrice,
          clientOrderId: `order_${Date.now()}`
        }),
      });
  
      await sleep(3000);
      const buyResult = await buyRes.json();
      console.log("📦 پاسخ از بک‌اند (خرید):", buyResult);
  
      // 🔹 بروزرسانی داده‌ها و محاسبه درصدها همزمان
      setDataCoins(prev => {
        const updatedCoins = prev.map(c => {
          if (c.nameCoin === sellCoin.nameCoin) {
            return { ...c, buy_sell_price: sellPrice };
          }
          if (c.nameCoin === buyCoin.nameCoin) {
            return { ...c, buy_sell_price: buyPrice };
          }
          return c;
        });
  
        finalUpdatedCoins = updatedCoins;
  
        // ✅ بلافاصله بعد از آپدیت، جدول درصد و مقادیر A,B,C,D محاسبه می‌شود
        PercentageCalculation(updatedCoins);
        A_B_C_D(updatedCoins);
  
        return updatedCoins;
      });
  
      setTradeCount(prev => prev + 1);
  
    } catch (err) {
      console.error("❌ خطا در فرآیند معامله:", err);
  
    } finally {
      // 🔹 آزاد کردن وضعیت معامله
      setIsTrading(false);
  
      // 🔹 پس از اتمام معامله، قیمت‌های جدید از سرور گرفته می‌شوند
      if (finalUpdatedCoins.length > 0) {
        await fetchTrades();
      }
    }
  };
  

  const PercentageCalculation = (coins) => {
    if (isTrading) return;

    const calc = (A_price, B_price, A_buy_sell_price, B_buy_sell_price) =>
      (A_price / A_buy_sell_price / (B_price / B_buy_sell_price) - 1) * 100;

    const Data_percent = [];

    coins.forEach((a, i) => {
      coins.forEach((b, j) => {
        if (j > i && b.nowPrice > 0 && a.nowPrice > 0) {
          const percent = calc(a.nowPrice, b.nowPrice, a.buy_sell_price, b.buy_sell_price);
          Data_percent.push({ label: `${a.nameCoin} / ${b.nameCoin}`, coinA: a, coinB: b, percent });
        }
      });
    });

    Data_percent.sort((a, b) => Math.abs(b.percent) - Math.abs(a.percent));
    setResults(Data_percent);

    const best = Data_percent.find(item => Math.abs(item.percent) > 2);
    if (!best) {
      setHiPercentCoin({});
      return;
    }

    const sellCoinObj = best.percent > 0 ? best.coinA : best.coinB;
    const buyCoinObj = best.percent > 0 ? best.coinB : best.coinA;

    if (sellCoinObj.nowPrice <= 0 || buyCoinObj.nowPrice <= 0) {
      console.log("❌ قیمت یکی از کوین‌ها معتبر نیست، معامله انجام نمی‌شود");
      return;
    }

    setHiPercentCoin({ sell: sellCoinObj.nameCoin, buy: buyCoinObj.nameCoin, percent: best.percent });
    if (!isTrading) {
      executeTradeSequence(sellCoinObj, buyCoinObj);
    }
  };

  const A_B_C_D = (coins) => {
    setA(coins.reduce((sum, c) => sum + c.first_pcs * c.firstPrice, 0).toFixed(2));
    setB(coins.reduce((sum, c) => sum + c.now_pcs * c.nowPrice, 0).toFixed(2));
    setC(coins.reduce((sum, c) => sum + c.first_pcs * c.nowPrice, 0).toFixed(2));
    setD(coins.reduce((sum, c) => sum + c.now_pcs * c.firstPrice, 0).toFixed(2));
  };

  const fetchTrades = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/nobitex");
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();

      // 💡 اصلاح: استفاده از ?. برای دسترسی ایمن و استفاده از Object.entries(data.stats.stats || {})
      // اگر data.stats.stats وجود نداشت، یک شیء خالی {} استفاده می‌شود
      const usdtPrices = Object.fromEntries(
        Object.entries(data.stats?.stats || {}) 
          .filter(([symbol, info]) => symbol.endsWith("-usdt") && info.latest)
          .map(([symbol, info]) => [symbol.split("-")[0], info.latest])
      );
      
      // 💡 همچنین بهتر است walletsArray را نیز ایمن کنید
      const walletsArray = data.wallets?.wallets || [];

      const updatedCoins = dataCoins.map(coin => {
        const wallet = walletsArray.find(w => w.currency === coin.nameCoin);
        return {
          ...coin,
          nowPrice: parseFloat(usdtPrices[coin.nameCoin]) || coin.nowPrice,
          now_pcs: wallet ? parseFloat(wallet.balance) : coin.now_pcs
        };
      });
      

      setDataCoins(updatedCoins);
      
      // 🔴 تغییر مهم: محاسبات و شروع معامله جدید فقط در صورت عدم وجود معامله فعال
      if (!isTrading) {
          PercentageCalculation(updatedCoins);
          A_B_C_D(updatedCoins);
      }

    } catch (err) {
      console.error("Error fetching trades:", err);
      setError(err);
    }
  };

  // 🟢 اجرای خودکار فقط در حالت isRunning
  useEffect(() => {
    if (isRunning) {
      fetchTrades(); // اولین اجرا فوری
      intervalRef.current = setInterval(fetchTrades, 10000);
      console.log("▶️ Auto trading started...");
    } else {
      clearInterval(intervalRef.current);
      console.log("⏹️ Auto trading stopped.");
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return (
    <div
      style={{ padding: "20px", fontFamily: "sans-serif", marginLeft: "50px" }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{ marginTop: "30px", marginLeft: "70px", fontSize: "18px" }}
              >

      <div   style={{  flexDirection:"row" }} >

      <button
        onClick={() => setIsRunning(true)}
        disabled={isRunning}
        style={{ marginRight: "10px", padding: "10px", background: "green", color: "white", borderRadius: "8px" }}
      >
        Start
      </button>
      <button
        onClick={() => setIsRunning(false)}
        disabled={!isRunning}
        style={{ padding: "10px", background: "red", color: "white", borderRadius: "8px" }}
      >
        Stop
      </button>
 
      </div>
                <p>تعداد معاملات موفق: <b>{tradeCount}</b></p>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    marginBottom: "20px",
                  }}
                >
                  The best for trading
                </h1>

                <div>
                  <table
                    style={{
                      margin: "0 auto",
                      borderCollapse: "collapse",
                      width: "280px",
                      textAlign: "center",
                    }}
                  >
                    <thead>
                      <tr style={{ background: "#e6f2ff" }}>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                          Pair
                        </th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                          Percent
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((r, idx) => (
                        <tr key={idx}>
                          <td style={{ border: "1px solid #ccc", padding: "6px" }}>
                            {r.label}
                          </td>
                          <td
                            style={{
                              border: "1px solid #ccc",
                              padding: "6px",
                              color: r.percent > 0 ? "green" : "red",
                            }}
                          >
                            {r.percent.toFixed(2)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

        <div>
          {error && (
            <p style={{ color: "red", marginBottom: "20px" }}>
              Error: {error.message}
            </p>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "1300px",
              marginLeft: "1px",
              marginTop: "70px",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                width: "100%",
                maxWidth: "900px",
              }}
            >
              {dataCoins.map((coin, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    backgroundColor: "#f0f8ff",
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "#065f46" }}>
                    {coin.nameCoin.toUpperCase()}
                  </span>
                  <span>
                    Now Price: <b>{coin.nowPrice}</b> $
                  </span>
                  <span>
                    Now pcs: <b>{coin.now_pcs}</b>
                  </span>
                  <span>
                    First Price: <b>{coin.firstPrice}</b>
                  </span>
                  <span>
                    First pcs: <b>{coin.first_pcs}</b>
                  </span>
                  <span>
                    Buy/Sell Price: <b>{coin.buy_sell_price}</b>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "220px",
            }}
          >
            <div style={{ marginTop: "40px" }}>
              <p>
                <span style={{ fontSize: "24px" }}>A = </span>
                <span style={{ fontSize: "24px" }}>∑</span>
                <span style={{ fontSize: "18px" }}>
                  {" "}
                  ( price_first * pcs_first ) ={" "}
                </span>
                <span
                  style={{
                    marginLeft: "12px",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  {a} $
                </span>
              </p>

              <p style={{ marginTop: "12px" }}>
                <span style={{ fontSize: "24px" }}>B = </span>
                <span style={{ fontSize: "24px" }}>∑</span>
                <span style={{ fontSize: "18px" }}>
                  {" "}
                  ( price_now * pcs_now ) ={" "}
                </span>
                <span
                  style={{
                    marginLeft: "12px",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  {b} $
                </span>
              </p>

              <p style={{ marginTop: "12px" }}>
                <span style={{ fontSize: "24px" }}>C = </span>
                <span style={{ fontSize: "24px" }}>∑</span>
                <span style={{ fontSize: "18px" }}>
                  {" "}
                  ( price_now * pcs_first ) ={" "}
                </span>
                <span
                  style={{
                    marginLeft: "12px",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  {c} $
                </span>
              </p>

              <p style={{ marginTop: "12px" }}>
                <span style={{ fontSize: "24px" }}>D = </span>
                <span style={{ fontSize: "24px" }}>∑</span>
                <span style={{ fontSize: "18px" }}>
                  {" "}
                  ( price_first * pcs_now ) ={" "}
                </span>
                <span
                  style={{
                    marginLeft: "12px",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  {d} $
                </span>
              </p>
            </div>

            <div style={{ marginTop: "50px", marginLeft: "50px" }}>
              <span
                style={{
                  marginTop: "80px",
                  fontWeight: "bold",
                  marginLeft: "160px",
                  fontSize: "26px",
                }}
              >
                {" "}
                List (Buy & Sell){" "}
              </span>
              {hiPercentCoin.sell && (
                    <div style={{ marginTop: "20px" , marginLeft:"200px" , fontSize:"22px"}}>
                      <p>Sell: <span style={{ color: "red" }}>{hiPercentCoin.sell}</span></p>
                      <p>Buy: <span style={{ color: "green" }}>{hiPercentCoin.buy}</span></p>
                      <p  style={{  marginLeft:"-30px" }}  >Percent: {hiPercentCoin.percent.toFixed(2)}%</p>
                    </div>
                  )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;





