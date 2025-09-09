import React, { useState, useEffect } from "react";

const CryptoPrice = () => {
  const [priceBTC, setPriceBTC] = useState(null);
  const [priceETH, setPriceETH] = useState(null);
  const [new001 , setNew001 ] = useState([0,1,2,3,4,5,6,7,8]);
  
  var div_xrp_Floki =  [] ;
  
  console.log("div_xrp_floki   0001  "  , div_xrp_Floki ) ;

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
    
    const intervalId = setInterval(fetchPrice, 10000);

    return () => clearInterval(intervalId);
  }, []);  

  console.log("xrp ::: " , priceBTC )  ;
  const divisionResult   = priceBTC / priceETH ;

  new001.unshift(divisionResult.toFixed(2)) ;
  new001.pop()

  // new001 = [ ...new_div_xrp_Flok , divisionResult  ] ;

  console.log("new001" , new001) ;
  // console.log("new_div_xrp_Floki" , new_div_xrp_Floki) ;

  
  return (
    <div className="ml-70   mt-15  ">
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

      <div  className="ml-1   mt-15 "  >
        <p  className="ml-3  bg-amber-400   " >  XRP/FLOKI   </p>    
        <p  className="   ml-8 "   >(( { new001[0] }  ))     </p>
        <p  className="   ml-8 "   >(( { new001[1] }  )) </p>
        <p  className="   ml-8 "   >(( { new001[2] }  )) </p>
        <p  className="   ml-8 "   >(( { new001[3] }  )) </p>
        <p  className="   ml-8 "   >(( { new001[4] }  )) </p>
        <p  className="   ml-8 "   >(( { new001[5] }  )) </p>
        <p  className="   ml-8 "   >(( { new001[6] }  )) </p>
        <p  className="   ml-8 "   >(( { new001[7] }  )) </p>
        <p  className="   ml-8 "   >(( { new001[8] }  )) </p>
       
      </div>
 

    </div>
  );
};

export default CryptoPrice;
