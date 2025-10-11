import React, { useEffect, useState } from "react";

const symbols = ["xrp-usdt", "ada-usdt", "doge-usdt", "eth-usdt"];

export default function NobitexPrices() {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    try {
      const response = await fetch("https://api.nobitex.ir/v2/trades/list");
      const data = await response.json();

      // استخراج آخرین قیمت‌ها برای ارزهای مورد نظر
      const result = {};
      symbols.forEach((symbol) => {
        const trades = data.trades[symbol];
        if (trades && trades.length > 0) {
          result[symbol] = trades[0].price;
        }
      });

      setPrices(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Nobitex data:", error);
    }
  };

  useEffect(() => {
    fetchPrices(); // اجرای اولیه
    const interval = setInterval(fetchPrices, 30000); // هر ۳۰ ثانیه
    return () => clearInterval(interval); // پاکسازی
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-5  ml-100  bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">
        قیمت ارزها (نوبیتکس)
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">در حال دریافت اطلاعات...</p>
      ) : (
        <ul className="space-y-3">
          {symbols.map((symbol) => (
            <li
              key={symbol}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <span className="font-semibold text-gray-700 uppercase">
                {symbol.replace("-usdt", "").toUpperCase()}
              </span>
              <span className="text-green-600 font-bold">
                {prices[symbol]
                  ? Number(prices[symbol]).toLocaleString("fa-IR")
                  : "—"}{" "}
                <small className="text-gray-500">USDT</small>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
