import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [dataCoins, setDataCoins] = useState([
    { nameCoin: "xrp", first_pcs: 4 , now_pcs: 11, firstPrice: 2.8903, nowPrice: 0, buy_sell_price: 2.4083 },
    { nameCoin: "doge", first_pcs: 242 , now_pcs: 11, firstPrice: 0.2334, nowPrice: 0, buy_sell_price: 0.19769 },
    { nameCoin: "ada", first_pcs: 60 , now_pcs: 11, firstPrice: 0.8067, nowPrice: 0, buy_sell_price: 0.65852 },
    { nameCoin: "link", first_pcs: 1.3 , now_pcs: 10, firstPrice: 21.5405, nowPrice: 0, buy_sell_price: 17.41294 },
    { nameCoin: "near", first_pcs: 4.6 , now_pcs: 11, firstPrice: 2.9705, nowPrice: 0, buy_sell_price: 2.259523 },
    { nameCoin: "avax", first_pcs: 0.93 , now_pcs: 11, firstPrice: 30.7806, nowPrice: 0, buy_sell_price: 20.6724 },
    // { nameCoin: "bnb", first_pcs: 0.0081, now_pcs: 11, firstPrice: 1222.406, nowPrice: 0, buy_sell_price: 1182.01 },
  ]);

  const [tradeCount, setTradeCount] = useState(0);
  const [results, setResults] = useState([]);
  const [hiPercentCoin, setHiPercentCoin] = useState({});
  const [isTrading, setIsTrading] = useState(false);     //   معامله در حال انچام هست ..
  const [error, setError] = useState(null);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

 
  const [isRunning, setIsRunning] = useState(false);        //  سیستم استارت شده یا نه ؟
 

  const tradeLock = useRef(false);                          //        اجرای هم‌زمان چند معامله جلوگیری


//      .......................................................................................................

const main_Core_Trade = async (sellCoin, buyCoin) => {
  if (tradeLock.current) {
    console.warn("  ترید در حال انجام است، اجرای جدید رد می شود.");
    return;
  }

  tradeLock.current = true;
  setIsTrading(true);

  try {

                                 // ........  آماده‌سازی و اعتبارسنجی  ......................... 

    const { sellAmount, sellPrice, buyPrice, buyAmount } = await validate_Prepare_Trade(sellCoin, buyCoin);
    if (!sellAmount || !buyAmount) throw new Error("مقادیر نامعتبر برای معامله");

    console.log(
      "  شروع ترید:",
      sellCoin.nameCoin,
      "  ---->  ",
      buyCoin.nameCoin,

     "sellAmount" ,
      sellAmount,

      "sellPrice" ,
      sellPrice,

     " buyPrice" ,
      buyPrice, 

      " buyAmount" ,
      buyAmount 
    );

    //   دریافت داده‌ها از سرور

    const res = await fetch("http://localhost:5000/api/nobitex");
    if (!res.ok) throw new Error(`Server error: ${res.status}`);
    const data = await res.json();


  const usdt_Buy_Prices_best = Object.fromEntries(
    Object.entries(data.stats?.stats || {})
      .filter(([symbol, info]) => symbol.endsWith("-usdt") && info.bestBuy)
      .map(([symbol, info]) => [symbol.split("-")[0], info.bestBuy])
  );
  
  const usdt_Sell_Prices_best = Object.fromEntries(
    Object.entries(data.stats?.stats || {})
      .filter(([symbol, info]) => symbol.endsWith("-usdt") && info.bestSell)
      .map(([symbol, info]) => [symbol.split("-")[0], info.bestSell])
  );
    

    const bestBuy_price = usdt_Buy_Prices_best[sellCoin.nameCoin];
    console.log("  بهترین قیمت اعلام شده فروشندگان: ", bestBuy_price   , " تعداد توکن برای فروش " ,  sellAmount);
   
    const sellResult = await sell_Order(sellCoin, sellAmount,  bestBuy_price);

    if (sellResult.status !== "Done") {
      console.error("  فروش ناموفق:", sellResult);
      throw new Error(`فروش ناموفق: ${sellResult.code || "Unknown error"}`);
    }
    console.log("  فروش انجام شد:", sellResult);


    //   مرحله ۳: خرید

   
    const bestSell_price = usdt_Sell_Prices_best[buyCoin.nameCoin];
    console.log("     بهترین قیمت اعلام شده ی خریداران  :", bestSell_price);
    
    const buyResult = await buy_Order(buyCoin, buyAmount, bestSell_price);

    if (buyResult.status !== "Done") {
      console.error("  خرید ناموفق:", buyResult);
      throw new Error(`خرید ناموفق: ${buyResult.code || "Unknown error"}`);
    }
    console.log("  خرید انجام شد:", buyResult);


    //   مرحله ۴: به‌روزرسانی داده‌ها
    await finalizeTrade(sellCoin, buyCoin, bestBuy_price, bestSell_price);
    console.log("  ترید با موفقیت به پایان رسید.");

  } catch (err) {
    console.error("⚠️ خطا در فرآیند ترید:", err.message);
    setHiPercentCoin({}); // جلوگیری از تکرار روی همان جفت
  } finally {
    // 🔒 آزادسازی قفل بعد از ۵ ثانیه برای اطمینان از اتمام کامل
    setTimeout(() => {
      tradeLock.current = false;
      setIsTrading(false);
      console.log("🔓 قفل ترید آزاد شد، آماده برای ترید بعدی.");
    }, 0);
  }
};

      const buyWithUsdtAtLowRialBalance = async (buyPrice) => {
        try {
          const res = await fetch("http://localhost:5000/api/nobitex");
          if (!res.ok) throw new Error(`Server error: ${res.status}`);
          const data = await res.json();

          const walletsArray = data.wallets?.wallets || [];
          if (walletsArray.length === 0) {
            console.warn("⚠️ No wallets found");
            return;
          }

          // 🔹 پیدا کردن کیف‌پول با کمترین موجودی ریالی
          const minRialWallet = walletsArray.reduce((min, w) => 
            (parseFloat(w.rialBalance || 0) < parseFloat(min.rialBalance || 0) ? w : min)
          );

          // 🔹 بررسی موجودی USDT
          const usdtWallet = walletsArray.find(w => w.currency === "usdt");
          const usdtBalance = parseFloat(usdtWallet?.balance || 0);

          if (usdtBalance <= 0) {
            console.log("❌ موجودی USDT کافی نیست برای خرید");
            return;
          }

          const targetCoin = minRialWallet.currency;
          console.log(`💰 خرید ${targetCoin.toUpperCase()} با USDT (${usdtBalance} USDT) در قیمت ${buyPrice}`);

          // 🔹 ارسال سفارش خرید
          const resBuy = await fetch("http://localhost:5000/api/buy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              srcCurrency: targetCoin,
              dstCurrency: "usdt",
              amount: (usdtBalance / buyPrice).toFixed(6),
              price: buyPrice,
            }),
          });

          if (!resBuy.ok) throw new Error(`❌ Buy request failed: ${resBuy.status}`);
          const buyResult = await resBuy.json();

          console.log("✅ خرید انجام شد:", buyResult);

        } catch (err) {
          console.error("⚠️ خطا در خرید با USDT:", err.message);
        }
      };

      const validate_Prepare_Trade = async (sellCoin, buyCoin) => {
        if (!isRunning || isTrading) throw new Error("ربات در حال اجرا نیست یا ترید در حال انجام است");
        if (tradeCount >= 20) throw new Error("تعداد ترید بیش از حد مجاز");
      
        setIsTrading(true);
        console.log("  شروع ترید:", sellCoin.nameCoin, "→", buyCoin.nameCoin);
      
        const sellPrice = parseFloat(sellCoin.nowPrice);
        const sellCoin_pcs = parseFloat(sellCoin.now_pcs) ;
        
        const buyPrice = parseFloat(buyCoin.nowPrice);


        let sellAmount_001 = 0 ; 

         if(sellPrice * sellCoin_pcs < 30 ) {
              sellAmount_001 =   10 / sellPrice ;
 
         } else {
         sellAmount_001 =  sellCoin_pcs / 5
         }
        const sellAmount = parseFloat((sellAmount_001 ).toFixed(6));
      
        if (sellAmount <= 0 || !sellPrice || !buyPrice) {
          throw new Error("مقادیر قیمت یا مقدار فروش نامعتبر است");
        }

      
        let buyAmount_001 = 0 ; 

        const usdValue = sellAmount * sellPrice;

        if( usdValue < 7 ){
           buyAmount_001 = 7 / buyPrice ;
         } else {
             buyAmount_001 =    ( sellPrice * sellAmount * 0.8 ) / buyPrice  ;
        }
         
        const buyAmount = parseFloat((buyAmount_001 ).toFixed(6));

        if (buyAmount <= 0) {
          throw new Error("مقدار خرید صفر یا نامعتبر است");
        }
      
        return { sellAmount, sellPrice, buyPrice, buyAmount };
      };

      const sell_Order = async (sellCoin, sellAmount, bestBuy_price) => {
        try {
        
          const res = await fetch("http://localhost:5000/api/sell", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              srcCurrency: sellCoin.nameCoin,
              dstCurrency: "usdt",
              amount: sellAmount,
              price: bestBuy_price,
            }),
          });
      
          if (!res.ok) throw new Error(`  Sell request failed: ${res.status}`);
          const sellResult = await res.json();
          console.log("  سفارش فروش ارسال شد:", sellResult);
      
          //   پیدا کردن سفارش فعال
          let matchedOrder = null;
          const interval = 1000;
          while (!matchedOrder) {
            const orderRes = await fetch(
              `http://localhost:5000/api/orders?srcCurrency=${sellCoin.nameCoin}&dstCurrency=usdt`
            );
            if (!orderRes.ok) throw new Error(`  Orders fetch failed: ${orderRes.status}`);
            const ordersData = await orderRes.json();
            matchedOrder = ordersData.orders?.find(o => o.status === "Active");
      
            if (!matchedOrder) {
              await new Promise(resolve => setTimeout(resolve, interval));
            }
          }
      
          const id_sell = matchedOrder.id;
          console.log("id_sell ::::::", id_sell);
      
          // 🔹 Polling تا تکمیل سفارش
          let finalStatus = null;
          let attempt = 0;
          const maxAttempts = 20;
      
          while (finalStatus !== "Done" && attempt < maxAttempts) {
            attempt++;
      
            const statusRes = await fetch("http://localhost:5000/api/order-status", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: id_sell }),
            });
      
            const statusData = await statusRes.json();
      
            if (statusData.status === "success") {
              finalStatus = statusData.order.status;
              console.log(`📄 [${attempt}] وضعیت فعلی فروش:`, finalStatus);
            } else {
              console.warn("⚠️ سفارش پیدا نشد، دوباره بررسی می‌کنیم...");
            }
      
            if (finalStatus !== "Done") {
              await new Promise(resolve => setTimeout(resolve, 2000));
            }
          }
      
          // 🔸 اگر بعد از 20 بار هنوز Done نشده، کنسل و تکرار
          if (finalStatus !== "Done") {
            console.warn("  سفارش فروش انجام نشد، در حال کنسل کردن   ...");
      
            await fetch("http://localhost:5000/api/cancel-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: id_sell }),
            });
      
            // const refreshRes = await fetch("http://localhost:5000/api/nobitex");
            // const refreshData = await refreshRes.json();
            // const newPrices = Object.fromEntries(
            //   Object.entries(refreshData.stats?.stats || {})
            //     .filter(([symbol, info]) => symbol.endsWith("-usdt") && info.bestBuy)
            //     .map(([symbol, info]) => [symbol.split("-")[0], info.bestBuy])
            // );
            // const newPrice = newPrices[sellCoin.nameCoin];
      
            // console.log("🔁 قیمت جدید برای فروش:", newPrice);
      
            // اجرای مجدد با قیمت جدید
            // return await sell_Order(sellCoin, sellAmount, newPrice);
            PercentageCalculation(dataCoins);
          }
      
          console.log("✅ سفارش فروش به طور کامل اجرا شد:", id_sell);
          return { status: "Done", name_Coin: sellCoin.nameCoin, id_sell };
        } catch (err) {
          console.error("❌ خطا در اجرای فروش:", err.message);
          return { status: "error", message: err.message };
        }
      };
      

      const buy_Order = async (buyCoin, buyAmount, bestSell_price) => {
        try {
          // 🔹 ارسال سفارش خرید
          const res = await fetch("http://localhost:5000/api/buy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              srcCurrency: buyCoin.nameCoin,
              dstCurrency: "usdt",
              amount: buyAmount,
              price: bestSell_price,
            }),
          });
      
          if (!res.ok) throw new Error(`❌ Buy request failed: ${res.status}`);
          const buyResult = await res.json();
          console.log("✅ سفارش خرید ارسال شد:", buyResult);
      
          // 🔹 پیدا کردن سفارش فعال
          let matchedOrder = null;
          const interval = 1000;
          while (!matchedOrder) {
            const orderRes = await fetch(
              `http://localhost:5000/api/orders?srcCurrency=${buyCoin.nameCoin}&dstCurrency=usdt`
            );
            if (!orderRes.ok) throw new Error(`❌ Orders fetch failed: ${orderRes.status}`);
            const ordersData = await orderRes.json();
            matchedOrder = ordersData.orders?.find(o => o.status === "Active");
      
            if (!matchedOrder) {
              await new Promise(resolve => setTimeout(resolve, interval));
            }
          }
      
          const id_buy = matchedOrder.id;
          console.log("id_buy ::::::", id_buy);
      
          // 🔹 Polling تا تکمیل سفارش
          let finalStatus = null;
          let attempt = 0;
          const maxAttempts = 20;
      
          while (finalStatus !== "Done" && attempt < maxAttempts) {
            attempt++;
      
            const statusRes = await fetch("http://localhost:5000/api/order-status", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: id_buy }),
            });
      
            const statusData = await statusRes.json();
      
            if (statusData.status === "success") {
              finalStatus = statusData.order.status;
              console.log(`📄 [${attempt}] وضعیت فعلی خرید:`, finalStatus);
            } else {
              console.warn("  سفارش پیدا نشد، دوباره بررسی می‌کنیم...");
            }
      
            if (finalStatus !== "Done") {
              await new Promise(resolve => setTimeout(resolve, 2000));
            }
          }
      
          // 🔸 اگر بعد از 20 بار هنوز Done نشده، کنسل و تکرار
          if (finalStatus !== "Done") {
            console.warn("  سفارش خرید انجام نشد، در حال کنسل کردن و تلاش مجدد...");
      
            await fetch("http://localhost:5000/api/cancel-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: id_buy }),
            });
      
            // const refreshRes = await fetch("http://localhost:5000/api/nobitex");
            // const refreshData = await refreshRes.json();
            // const newPrices = Object.fromEntries(
            //   Object.entries(refreshData.stats?.stats || {})
            //     .filter(([symbol, info]) => symbol.endsWith("-usdt") && info.bestSell)
            //     .map(([symbol, info]) => [symbol.split("-")[0], info.bestSell])
            // );
            // const newPrice = newPrices[buyCoin.nameCoin];
      
            // console.log("🔁 قیمت جدید برای خرید:", newPrice);
      
            // // اجرای مجدد با قیمت جدید
            // return await buy_Order(buyCoin, buyAmount, newPrice);
            PercentageCalculation(dataCoins);
          }
      
          console.log("  سفارش خرید به طور کامل اجرا شد:", id_buy);
          return { status: "Done", name_Coin: buyCoin.nameCoin, id_buy };
        } catch (err) {
          console.error("  خطا در اجرای خرید:", err.message);
          return { status: "error", message: err.message };
        }
      };
      


        const finalizeTrade = async (sellCoin, buyCoin, bestBuy_price, bestSell_price) => {
          // 🔹 به‌روزرسانی اطلاعات لوکال
          setDataCoins(prev => 
            prev.map(c => {
              if (c.nameCoin === sellCoin.nameCoin)
                return { ...c, buy_sell_price: bestBuy_price, now_pcs: c.now_pcs };
              if (c.nameCoin === buyCoin.nameCoin)
                return { ...c, buy_sell_price: bestSell_price, now_pcs: c.now_pcs };
              return c;
            })
          );
        
          // 🔹 افزایش شمارنده‌ی معاملات
          setTradeCount(prev => prev + 1);
        
          //   بعد از هر 5 معامله، خرید با usdt را انجام بده
          setTradeCount(prev => {
            const newCount = prev + 1;
        
            if (newCount % 5 === 0) {
              console.log("  ۵ معامله انجام شد — بررسی خرید USDT ...");
              buyWithUsdtAtLowRialBalance(bestSell_price);
            }
        
            return newCount;
          });
        };
        
      
  
//.................................................محاسبه ی درصد جفت ها ............................................

const PercentageCalculation = (coins) => {
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

  //   مرتب‌ سازی بر اساس درصد تغییر
  Data_percent.sort((a, b) => Math.abs(b.percent) - Math.abs(a.percent));
  setResults(Data_percent);

  // پیدا کردن بزرگترین درصد بالای 0.3 درصد 
  const best = Data_percent.find(item => Math.abs(item.percent) > 0.3);
  if (!best) {
    setHiPercentCoin({});
    return;
  }

  // اگر درصد منفی بود جابجایی در بین صورت و مخرج انجام شود 
  const sellCoinObj = best.percent > 0 ? best.coinA : best.coinB;
  const buyCoinObj = best.percent > 0 ? best.coinB : best.coinA;

  if (sellCoinObj.nowPrice <= 0 || buyCoinObj.nowPrice <= 0) {
    console.log("  قیمت یکی از کوین‌ها معتبر نیست، معامله انجام نمی‌شود.");
    return;
  }

  setHiPercentCoin({ sell: sellCoinObj.nameCoin, buy: buyCoinObj.nameCoin, percent: best.percent });

  //   جلوگیری از اجرای هم‌زمان یا پشت‌سرهم
  if (isRunning && !isTrading && !tradeLock.current) {
    console.log("  شروع اجرای ترید جدید...");
    main_Core_Trade(sellCoinObj, buyCoinObj);
  } else {
    if (tradeLock.current) console.log("  ترید قبلی هنوز در حال اجراست، منتظر می‌مانیم...");
  }
};


//.....................................  محاسبه ی سود و تغییرات   ........................................

  const A_B_C_D = (coins) => {
    setA(coins.reduce((sum, c) => sum + c.first_pcs * c.firstPrice, 0).toFixed(2));
    setB(coins.reduce((sum, c) => sum + c.now_pcs * c.nowPrice, 0).toFixed(2));
    setC(coins.reduce((sum, c) => sum + c.first_pcs * c.nowPrice, 0).toFixed(2));
    setD(coins.reduce((sum, c) => sum + c.now_pcs * c.firstPrice, 0).toFixed(2));
   
  };

 

//............................................................................................................

useEffect(() => {
  
  const updateOnlyPrices = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/nobitex");
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
  
      //   استخراج قیمت‌ها
      const usdtPrices = Object.fromEntries(
        Object.entries(data.stats?.stats || {})
          .filter(([symbol, info]) => symbol.endsWith("-usdt") && info.mark)
          .map(([symbol, info]) => [symbol.split("-")[0], info.mark])
      );
  
      //     کیف پول‌ها
      const walletsArray = data.wallets?.wallets || [];

  
      //      
      setDataCoins(prev => {
        const updated = prev.map(coin => {
          const wallet = walletsArray.find(w => w.currency === coin.nameCoin);
          return {
            ...coin,
            nowPrice: parseFloat(usdtPrices[coin.nameCoin]) || coin.nowPrice,
            now_pcs: wallet ? parseFloat(wallet.balance) : coin.now_pcs
          };
        });
  
        // 
        A_B_C_D(updated);
        if (isRunning && !isTrading) {
          PercentageCalculation(updated);
        }
    
  
        return updated;
      });
  
    } catch (err) {
      console.error("  Error fetching trades:", err);
      setError(err);
    }
  };
  
  updateOnlyPrices();

  // اجرای دوره‌ای هر 2  ثانیه
  const interval = setInterval(updateOnlyPrices, 2000);

  return () => clearInterval(interval);
}, [isRunning, isTrading]);

useEffect(() => {
  if (isRunning && !isTrading && dataCoins.length > 0) {
    PercentageCalculation(dataCoins);
    A_B_C_D(dataCoins);
  }
}, [dataCoins, isRunning, isTrading]);


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
                {/* <p>   <span>A-D = {a-d} </span>  </p> */}
               
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





