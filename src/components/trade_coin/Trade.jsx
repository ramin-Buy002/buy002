import React, { useState, useEffect } from "react";

function Trade() {


  const Coins = ["XRP", "DOGE" , "ADA" , "LINK", "NEAR", "AVAX", "HYPE"];

  const [dataCoins, setDataCoins] = useState( [
    { nameCoin : "XRP"   , pcs : 0 , firstPrice : 2.8903 ,  nowPrice : 0 , buy_cell_price : 2.8903  },
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

  const [priceXRP, setPriceXRP] = useState(null);
  const [priceDOGE, setPriceDOGE] = useState(null);
  const [priceLINK, setPriceLINK] = useState(null);
  const [priceNEAR, setPriceNEAR] = useState(null);
  const [priceADA, setPriceADA] = useState(null);
  const [priceAVAX, setPriceAVAX] = useState(null);
  const [priceHYPE, setPriceHYPE] = useState(null);

  let Copy_data_coins = [] ;


  const symbolXRP = "XRPUSDT";
  const symbolDOG = "DOGEUSDT";
  const symbolLINK = "LINKUSDT";
  const symbolNEAR = "NEARUSDT";
  const symbolADA = "ADAUSDT";
  const symbolAVAX = "AVAXUSDT";

  useEffect(() => {
    const fetchPrice = async () => {
      GetDataCoin();

      Copy_data_coins = dataCoins.map(coin => ({ ...coin }));


      try {
        const responseXRP = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolXRP}`
        );
        const dataXRP = await responseXRP.json();
        setPriceXRP(dataXRP.price);

        const coinXRP = Copy_data_coins.find(c => c.nameCoin === "XRP" );
        if (coinXRP) {
          coinXRP.nowPrice =  parseFloat(dataXRP.price) ;  
        }

        const responseDOGE = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolDOG}`
        );
        const dataDOGE = await responseDOGE.json();
        setPriceDOGE(dataDOGE.price);

        const coinDOGE = dataCoins.find(c => c.nameCoin === "DOGE" );
        if (coinDOGE) {
          coinDOGE.nowPrice =  parseFloat(dataDOGE.price) ;  
        }

        const responseLINK = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolLINK}`
        );
        const dataLINK = await responseLINK.json();
        setPriceLINK(dataLINK.price);

        const coinLINK = dataCoins.find(c => c.nameCoin === "LINK" );
        if (coinLINK) {
          coinLINK.nowPrice =  parseFloat(dataLINK.price) ;  

        }


        const responseNEAR = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolNEAR}`
        );
        const dataNEAR = await responseNEAR.json();
        setPriceNEAR(dataNEAR.price);

        const coinNEAR = dataCoins.find(c => c.nameCoin === "NEAR" );
        if (coinNEAR) {
          coinNEAR.nowPrice =  parseFloat(dataNEAR.price) ;  

        }

        const responseADA = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolADA}`
        );
        const dataADA = await responseADA.json();
        setPriceADA(dataADA.price);

        const coinADA = dataCoins.find(c => c.nameCoin === "ADA" );
        if (coinADA) {
          coinADA.nowPrice =  parseFloat(dataADA.price) ;  

        }

        const responseAVAX = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolAVAX}`
        );
        const dataAVAX = await responseAVAX.json();
        setPriceAVAX(dataAVAX.price);

        const coinAVAX = dataCoins.find(c => c.nameCoin === "AVAX" );
        if (coinAVAX) {
          coinAVAX.nowPrice =  parseFloat(dataAVAX.price) ;  

        }

        const responseHYPE = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=Hyperliquid&vs_currencies=usd`
        );

        const dataHYPE = await responseHYPE.json();
        setPriceHYPE(dataHYPE.hyperliquid.usd);

        const coinHYPE = dataCoins.find(c => c.nameCoin === "HYPE" );
        if (coinHYPE) {
        
          coinHYPE.nowPrice =  dataHYPE.hyperliquid.usd;  

        }



      } catch (error) {
        console.error("Error fetching crypto price:", error);
      }

      console.log("Copy ********************** " , Copy_data_coins[0]) ;

    };



    fetchPrice();
    PercentageCalculation();

    const intervalId = setInterval( fetchPrice, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const Data_percent = [] ;
  const Data_Coins = [] ;

  const GetDataCoin = (()=> {

    Copy_data_coins.forEach((a, i) => {

    // console.log("coins ::" , a.nameCoin )

    // console.log("Data_Coins_002 :: " , dataCoins) ;
    
  })

  } )

// parseFloat(str)

  const PercentageCalculation = (()=> {
    Copy_data_coins.forEach((a, i) => {
      Copy_data_coins.forEach((b, j) => {
        if (j > i && b !== 0) {
        
       
          Data_percent.push({label : a.nameCoin + " / " + b.nameCoin  ,  coin_name_01 : a.nameCoin , coin_name_02 : b.nameCoin , percent : a.nowPrice  });
        
        }})
  })

 setResults([...Data_percent]);

})


  console.log(" array_ratios " , results[0] )



  return (
    <div className="ml-20   mt-8  ">
      <div className=" flex  flex-row      ">
        <div className="ml-70   ">

          {/* <h1>The best for trading</h1> */}

          <div >


          <u1   >

            {results.map((r, index) => (

              <div className="flex flex_row">

              <div className="flex-row" >
                    
                   
                    <p className="  ml-2  mt-2  bg-blue-200  justify-between border rounded-lg p-3   "  key={index}>{r.label}</p>
                   
              </div>
              <div>
                   
                    <h1>percent</h1>


              </div>
              <div>


        </div>

        </div>


            ))}
          </u1>
          
          </div>
         
        </div>

        <div className="ml-70    ">
          {priceXRP ? (
            <div className=" flex flex-row ">
                    <h1 className=" mt-2 ">
                      {" "}
                      XRP . . . . . . : : : : . . . . . (( {priceXRP} $ )) . . .. . .
                      . Price_Buy . . . . .. {buyXRP}{" "}
                    </h1>

              <input
                type="number"
                value={buyXRP}
                onChange={(e) => setBuyXRP(e.target.value)}
                className="border p-2   ml-6  w-20  "
                placeholder=""
              />
            </div>
          ) : (
            <p>Loading price...</p>
          )}

          {priceDOGE ? (
            <div className=" flex flex-row mt-2 ">
              <h1 className=" mt-2 ">
                {" "}
                DOGE . . . . . . : : : : . . . (( {priceDOGE} $ )) . . . . . .
                Price_Buy . . . . . . {buyDOGE}{" "}
              </h1>
              <input
                type="number"
                value={buyDOGE}
                onChange={(e) => setBuyDOGE(e.target.value)}
                className="border p-2   ml-6  w-20  "
                placeholder=""
              />
            </div>
          ) : (
            <p>Loading price...</p>
          )}

          {priceDOGE ? (
            <div className=" flex flex-row mt-2 ">
              <h1 className=" mt-2 ">
                {" "}
                ADA . . . . . . : : : : . . .. (( {priceADA} $ )) . . . . . . .
                . Price_Buy . . . . . {buyADA}{" "}
              </h1>
              <input
                type="number"
                value={buyADA}
                onChange={(e) => setBuyADA(e.target.value)}
                className="border p-2   ml-6  w-20  "
                placeholder=""
              />
            </div>
          ) : (
            <p>Loading price...</p>
          )}

          {priceLINK ? (
            <div className=" flex flex-row mt-2 ">
              <h1 className=" mt-2 ">
                {" "}
                LINK . . . . . . : : : : . . . (( {priceLINK} $ )) . . . . . .
                Price_Buy . . . . . . {buyLINK}{" "}
              </h1>
              <input
                type="number"
                value={buyLINK}
                onChange={(e) => setBuyLINK(e.target.value)}
                className="border p-2   ml-6  w-20  "
                placeholder=""
              />
            </div>
          ) : (
            <p>Loading price...</p>
          )}
          {priceNEAR ? (
            <div className=" flex flex-row mt-2 ">
              <h1 className=" mt-2 ">
                {" "}
                NEAR . . . . . . : : : : . . . (( {priceNEAR} $ )) . . . . . ..
                Price_Buy . . . . . . {buyNEAR}{" "}
              </h1>
              <input
                type="number"
                value={buyNEAR}
                onChange={(e) => setBuyNEAR(e.target.value)}
                className="border p-2   ml-6  w-20  "
                placeholder=""
              />
            </div>
          ) : (
            <p>Loading price...</p>
          )}

          {priceAVAX ? (
            <div className=" flex flex-row mt-2 ">
              <h1 className=" mt-2 ">
                {" "}
                AVAX . . . . . . : : : : . . . (( {priceAVAX} $ )) . . . . . .
                Price_Buy . . . . .. {buyAVAX}{" "}
              </h1>
              <input
                type="number"
                value={buyAVAX}
                onChange={(e) => setBuyAVAX(e.target.value)}
                className="border p-2   ml-6  w-20  "
                placeholder=""
              />
            </div>
          ) : (
            <p>Loading price...</p>
          )}

          {priceAVAX ? (
            <div className=" flex flex-row mt-2 ">
              <h1 className=" mt-2 ">
                {" "}
                HYPE . . . . . . : : : : . . . . . (( {priceHYPE} $ )) . .. . .
                . . . . . . Price_Buy . . . . . . {buyHYPE}{" "}
              </h1>
              <input
                type="number"
                value={buyHYPE}
                onChange={(e) => setBuyHYPE(e.target.value)}
                className="border p-2   ml-6  w-20  "
                placeholder=""
              />
            </div>
          ) : (
            <p>Loading price...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trade;
