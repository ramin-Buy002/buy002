import React, { useState, useEffect } from "react";

function Trade() {


  const Coins = ["XRP", "DOGE" , "ADA" , "LINK", "NEAR", "AVAX", "HYPE"];
  

  const [dataCoins, setDataCoins] = useState( [
    { nameCoin : "XRP"   , pcs : 0 , firstPrice : 2.8903 ,  nowPrice : 22 , buy_cell_price : 2.8903  },
    { nameCoin : "DOGE"  , pcs : 0 , firstPrice : 0.2334 ,  nowPrice : 0 , buy_cell_price : 0.2334 }, 
    { nameCoin : "ADA"   , pcs : 0 , firstPrice : 0.8067 ,  nowPrice : 0 , buy_cell_price : 0.8067 },
    { nameCoin : "LINK"  , pcs : 0 , firstPrice : 21.5405 ,  nowPrice : 0 , buy_cell_price : 21.5405 },
    { nameCoin : "NEAR"  , pcs : 0 , firstPrice : 2.9705  ,  nowPrice : 0 , buy_cell_price : 2.9705 },
    { nameCoin : "AVAX"  , pcs : 0 , firstPrice : 30.7806 ,  nowPrice : 0 , buy_cell_price : 30.7806 },
    { nameCoin : "HYPE"  , pcs : 0 , firstPrice : 46.4060  ,  nowPrice : 0 , buy_cell_price : 46.4060 } 
         ] ) ;


  const [results, setResults] = useState([]);


  const [buyXRP, setBuyXRP] = useState(2.8759);
  const [buyDOGE, setBuyDOGE] = useState(0.23837);
  const [buyLINK, setBuyLINK] = useState(21.16);
  const [buyNEAR, setBuyNEAR] = useState(2.72);
  const [buyADA, setBuyADA] = useState(0.7971);
  const [buyAVAX, setBuyAVAX] = useState(29.88);
  const [buyHYPE, setBuyHYPE] = useState(45.06);

 

  const symbols = {
    XRP: "XRPUSDT",
    DOGE: "DOGEUSDT",
    ADA: "ADAUSDT",
    LINK: "LINKUSDT",
    NEAR: "NEARUSDT",
    AVAX: "AVAXUSDT",
  };


  const PercentageCalculation = (coins) => {
    const Data_percent = [];
    coins.forEach((a, i) => {
      coins.forEach((b, j) => {
        if (j > i && b.nowPrice !== 0) {
          Data_percent.push({
            label: `${a.nameCoin} / ${b.nameCoin}`,
            coin_name_01: a.nameCoin,
            coin_name_02: b.nameCoin,
            percent: a.nowPrice,
          });
        }
      });
    });
    setResults(Data_percent);
  };




  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const updatedCoins = [...dataCoins]; 

       
        for (let coin of Object.keys(symbols)) {
          const res = await fetch(
            `https://api.binance.com/api/v3/ticker/price?symbol=${symbols[coin]}`
          );
          const data = await res.json();

          const coinObj = updatedCoins.find((c) => c.nameCoin === coin);
          if (coinObj) coinObj.nowPrice = parseFloat(data.price);
        }

     
        const resHype = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=Hyperliquid&vs_currencies=usd`
        );
        const dataHype = await resHype.json();
        const hypeCoin = updatedCoins.find((c) => c.nameCoin === "HYPE");
        if (hypeCoin) hypeCoin.nowPrice = dataHype.hyperliquid.usd;

        setDataCoins(updatedCoins);        
        PercentageCalculation(updatedCoins); 
      } catch (err) {
        console.error("Error fetching:", err);
      }
    };

    fetchPrice();
    const intervalId = setInterval(fetchPrice, 10000);
    return () => clearInterval(intervalId);
  }, []);

  console.log("Results :: " , results ) ; 
  console.log("Coin_DATA :: " , dataCoins ) ; 



  return (
    <div className="ml-20   mt-8  ">
      <div className=" flex  flex-row      ">
        <div className="ml-70   ">

          <h1>The best for trading</h1>

          <div >

          <u1   >

            {results.map((r, index) => (

              <div className="flex flex_row">

                  <div   >
                    
                        <p className="  ml-2  mt-2  bg-blue-200  justify-between border rounded-lg p-3   "  key={index}>{r.label}</p>
                   
                  </div>

                  <div className="mt-5 ml-5" >
                      
                        <h1>{r.percent}</h1>

                  </div>
              <div>

        </div>

        </div>

            ))}
          </u1>
          
          </div>
         
        </div>

                <div className="ml-70    ">
                      <div >

          <u1   >

            {dataCoins.map((r, index) => (

              <div className="flex flex_row">

                  <div   >
                    
                        <p className="  ml-2  mt-2  bg-blue-50  justify-between border rounded-lg p-3  w-200  " 
                         key={index}>{r.nameCoin} {"\u00A0\u00A0\u00A0\u00A0\u00A0"}{r.nowPrice} {"   "} $  
                         {"\u00A0\u00A0\u00A0\u00A0\u00A0"} pcs :: {r.pcs } </p>
                   
                  </div>
 
              <div>

        </div>

        </div>

            ))}
          </u1>
          
          </div>

      
 
 
                </div>
      </div>
    </div>
  );
}

export default Trade;
