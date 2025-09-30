import React, { useState, useEffect } from "react";

function Trade() {
  const Coins = ["XRP", "DOGE" , "ADA" , "LINK", "NEAR", "AVAX", "HYPE"];

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

  const symbolXRP = "XRPUSDT";
  const symbolDOG = "DOGEUSDT";
  const symbolLINK = "LINKUSDT";
  const symbolNEAR = "NEARUSDT";
  const symbolADA = "ADAUSDT";
  const symbolAVAX = "AVAXUSDT";

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const responseXRP = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolXRP}`
        );
        const dataXRP = await responseXRP.json();
        setPriceXRP(dataXRP.price);

        const responseDOG = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolDOG}`
        );
        const dataDOG = await responseDOG.json();
        setPriceDOGE(dataDOG.price);

        const responseLINK = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolLINK}`
        );
        const dataLINK = await responseLINK.json();
        setPriceLINK(dataLINK.price);

        const responseNEAR = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolNEAR}`
        );
        const dataNEAR = await responseNEAR.json();
        setPriceNEAR(dataNEAR.price);

        const responseADA = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolADA}`
        );
        const dataADA = await responseADA.json();
        setPriceADA(dataADA.price);

        console.log("ADA  ::::", dataADA.price);

        const responseAVAX = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolAVAX}`
        );
        const dataAVAX = await responseAVAX.json();
        setPriceAVAX(dataAVAX.price);

        console.log("001");
        const responseHYPE = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=Hyperliquid&vs_currencies=usd`
        );

        const dataHYPE = await responseHYPE.json();
        console.log("hype", dataHYPE.hyperliquid.usd);

        setPriceHYPE(dataHYPE.hyperliquid.usd);
      } catch (error) {
        console.error("Error fetching crypto price:", error);
      }
    };

    fetchPrice();
    PercentageCalculation();

    const intervalId = setInterval(fetchPrice, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const ratios = [] ;

  const PercentageCalculation = (()=> {
    Coins.forEach((a, i) => {
      Coins.forEach((b, j) => {
        if (j > i && b !== 0) {
       
          ratios.push( a + " / " + b);
        
        }})
  })

 setResults([...ratios]);

})


  // console.log(" array_ratios " , results )



  return (
    <div className="ml-20   mt-8  ">
      <div className=" flex  flex-row      ">
        <div className="ml-70   ">

          <h1>The best for trading</h1>

          <u1   >

            {results.map((r, index) => (
              <p className="  ml-2  mt-2  bg-blue-200  justify-between border rounded-lg p-3   "  key={index}>{r}</p>
            ))}

          </u1>

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
