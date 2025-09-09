import React, { useState, useEffect } from "react";

const CryptoPrice = () => {
  const [priceXRP, setPriceXRP] = useState(null);
  const [priceFLOKI, setPriceFLOKI] = useState(null);
  const [priceDOG, setPriceDOG] = useState(null);

  const [divXrp_floki, setDivXrp_floki] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divXrp_doge, setDivXrp_dog] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divDog_Floki, setDivDog_Floki] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  const symbolXRP = "XRPUSDT"; // Example: Bitcoin to USDT
  const symbolFLOKI = "FLOKIUSDT"; // Example: Bitcoin to USDT
  const symbolDOG = "DOGEUSDT"; // Example: Bitcoin to USDT

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const responseXRP = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolXRP}`
        );
        const dataXRP = await responseXRP.json();
        setPriceXRP(dataXRP.price);

        const responseFLOKI = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolFLOKI}`
        );
        const dataFLOKI = await responseFLOKI.json();
        setPriceFLOKI(dataFLOKI.price);

        const responseDOG = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolDOG}`
        );
        const dataDOG = await responseDOG.json();
        setPriceDOG(dataDOG.price);
       
      } catch (error) {
        console.error("Error fetching crypto price:", error);
      }
    };

    fetchPrice();

    const intervalId = setInterval(fetchPrice, 10000);

    return () => clearInterval(intervalId);
  }, []);

//////////
  const divisionResult_XRP_FLOKI = priceXRP / priceFLOKI;

  divXrp_floki.unshift(divisionResult_XRP_FLOKI.toFixed(2));
  divXrp_floki.pop();

//////////
  const divisionResult_XRP_DOGE = priceXRP / priceDOG;

  divXrp_doge.unshift(divisionResult_XRP_DOGE.toFixed(2));
  divXrp_doge.pop();

///////////
const divisionResult_DOGE_FLOKI = priceDOG / priceFLOKI;

divDog_Floki.unshift(divisionResult_DOGE_FLOKI.toFixed(2));
divDog_Floki.pop();



  return (
    <div className="ml-70   mt-15  ">
      {priceXRP ? (
        <div>
          <p> XRP . . . . : : : : . . . {priceXRP} $ </p>
        </div>
      ) : (
        <p>Loading price...</p>
      )}

      {priceFLOKI ? (
        <div>
          <p> FLOKI . . : : : : . . . {priceFLOKI} $ </p>
        </div>
      ) : (
        <p>Loading price...</p>
      )}

        {priceDOG ? (
        <div>
          <p> DOG . . . . : : : : . . . {priceDOG} $ </p>
        </div>
      ) : (
        <p>Loading price...</p>
      )}

      <div className=" flex flex-row ">

        <div className="ml-0  mt-10 w-45 ">
          <p className="  ml-15  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
            {" "}
            XRP/FLOKI{" "}
          </p>
          <p className="   ml-15 mt-2 ">(( {divXrp_floki[0]} )) </p>
          <p className="   ml-15 ">(( {divXrp_floki[1]} )) </p>
          <p className="   ml-15 ">(( {divXrp_floki[2]} )) </p>
          <p className="   ml-15 ">(( {divXrp_floki[3]} )) </p>
          <p className="   ml-15 ">(( {divXrp_floki[4]} )) </p>
          <p className="   ml-15 ">(( {divXrp_floki[5]} )) </p>
          <p className="   ml-15 ">(( {divXrp_floki[6]} )) </p>
          <p className="   ml-15 ">(( {divXrp_floki[7]} )) </p>
          <p className="   ml-15 ">(( {divXrp_floki[8]} )) </p>
        </div>
      
        <div className="ml-0  mt-10 w-45 ">
          <p className="  ml-15  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
            {" "}
            XRP/DOGE{" "}
          </p>
          <p className="   ml-15 mt-2 ">(( {divXrp_doge[0]} )) </p>
          <p className="   ml-15   ">(( {divXrp_doge[1]} )) </p>
          <p className="   ml-15   ">(( {divXrp_doge[2]} )) </p>
          <p className="   ml-15   ">(( {divXrp_doge[3]} )) </p>
          <p className="   ml-15   ">(( {divXrp_doge[4]} )) </p>
          <p className="   ml-15   ">(( {divXrp_doge[5]} )) </p>
          <p className="   ml-15   ">(( {divXrp_doge[6]} )) </p>
          <p className="   ml-15   ">(( {divXrp_doge[7]} )) </p>
          <p className="   ml-15   ">(( {divXrp_doge[8]} )) </p>

        </div>

        <div className="ml-0  mt-10 w-45 ">
          <p className="  ml-15  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
            {" "}
            DOGE/FLOKI{" "}
          </p>
          <p className="   ml-15 mt-2 ">(( {divDog_Floki[0]} )) </p>
          <p className="   ml-15  ">(( {divDog_Floki[1]} )) </p>
          <p className="   ml-15  ">(( {divDog_Floki[2]} )) </p>
          <p className="   ml-15  ">(( {divDog_Floki[3]} )) </p>
          <p className="   ml-15  ">(( {divDog_Floki[4]} )) </p>
          <p className="   ml-15  ">(( {divDog_Floki[5]} )) </p>
          <p className="   ml-15  ">(( {divDog_Floki[6]} )) </p>
          <p className="   ml-15  ">(( {divDog_Floki[7]} )) </p>
          <p className="   ml-15  ">(( {divDog_Floki[8]} )) </p>
   
        </div>

      </div>
    </div>
  );
};

export default CryptoPrice;
