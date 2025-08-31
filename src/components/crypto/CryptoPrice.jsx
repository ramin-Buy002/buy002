import React, { useState, useEffect } from "react";

const CryptoPrice = () => {
  const [priceBTC, setPriceBTC] = useState(null);
  const [priceETH, setPriceETH] = useState(null);
  const symbolBTC = "XRPUSDT"; // Example: Bitcoin to USDT
  const symbolETH = "FLOKIUSDT"; // Example: Bitcoin to USDT

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const responseBTC = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolBTC}`
        );
        const dataBTC = await responseBTC.json();
        setPriceBTC(dataBTC.price);

        const responseETH = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolETH}`
        );
        const dataETH = await responseETH.json();
        setPriceETH(dataETH.price);
      } catch (error) {
        console.error("Error fetching crypto price:", error);
      }
    };

    fetchPrice();
    
  // console.log("xrp ::: " , priceBTC )

    const intervalId = setInterval(fetchPrice, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // The empty array ensures this effect runs only once when the component mounts

  console.log("xrp ::: " , priceBTC )  ;
  const divisionResult   = priceBTC / priceETH

  return (
    <div className="ml-100   mt-15  ">
      {priceBTC ? (
        <div>
          <p> XRP . . . . : : : : . . . {priceBTC} $   </p>
        </div>
      ) : (
        <p>Loading price...</p>
      )}
      {priceETH ? (
        <div>
          <p> FLOKI . . : : : : . . . {priceETH} $ </p>
        </div>
      ) : (
        <p>Loading price...</p>
      )}

      <div  className="ml-100   mt-15 "  >
        <p>  Division Result  :::   {divisionResult }   </p>
      </div>
    </div>
  );
};

export default CryptoPrice;
