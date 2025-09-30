import React, { useState, useEffect } from "react";

const CryptoPrice = () => {


  //  buy  or sell  price 
 
 
const [XRP , setBuyXRP ] = useState(2.88940) ;
const [DOGE , setBuyDOGE ] = useState( 0.23257 ) ;
const [LINK , setBuyLINK ] = useState(21.16) ;
const [NEAR , setBuyNEAR ] = useState(2.720 ) ;
const [ADA , setBuyADA ] = useState(0.7971 ) ;
const [AVAX , setBuyAVAX ] = useState(29.850) ;
const [HYPE , setBuyHYPE ] = useState(45.06 ) ;

  


 


  // update price

  const [priceXRP , setPriceXRP ] = useState(null) ;
  const [priceDOGE , setPriceDOGE ] = useState(null) ;
  const [priceLINK , setPriceLINK ] = useState(null) ;
  const [priceNEAR , setPriceNEAR ] = useState(null) ;
  const [priceADA , setPriceADA ] = useState(null) ;
  const [priceAVAX , setPriceAVAX ] = useState(null) ;
  const [priceHYPE , setPriceHYPE ] = useState(null) ;    
 
 

  const [divXrp_ADA, setDivXrp_ADA ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divXrp_ADA_persent, setDivXrp_ADA_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divXrp_doge, setDivXrp_dog] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divXrp_doge_persent, setDivXrp_doge_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  
 
  const [divLINK_XRP, setDivLINK_XRP] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divLINK_XRP_persent, setDivLINK_XRP_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

 
  const [divLINK_ADA, setDivLINK_ADA ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divLINK_ADA_persent, setDivLINK_ADA_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

 

  const [divLINK_Doge, setDivLINK_Doge] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divLINK_Doge_persent, setDivLINK_Doge_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divXrp_near, setDivXrp_near ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divXrp_near_persent, setDivXrp_near_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divNear_doge, setDivNear_doge] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divNear_doge_persent, setDivNear_doge_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

   

  const [divLINK_NEAR, setDivLINK_NEAR] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divLINK_NEAR_persent, setDivLINK_NEAR_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

 
  const [divNear_ADA , setDivNear_ADA ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divNear_ADA_persent, setDivNear_ADA_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divAVAX_near, setDivAVAX_near ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divAVAX_near_persent, setDivAVAX_near_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  

   

  const [divAVAX_DOGE , setDivAVAX_DOGE ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divAVAX_DOGE_persent, setDivAVAX_DOGE_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divADA_DOGE , setDivADA_DOGE ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divADA_DOGE_persent, setDivADA_DOGE_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divAVAX_Xrp , setDivAVAX_Xrp ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divAVAX_Xrp_persent, setDivAVAX_Xrp_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divAVAX_LINK , setDivAVAX_LINK ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divAVAX_LINK_persent, setDivAVAX_LINK_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divHYPE_XRP , setDivHYPE_XRP ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divHYPE_XRP_persent, setDivHYPE_XRP_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divAVAX_ADA , setDivAVAX_ADA ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divAVAX_ADA_persent, setDivAVAX_ADA_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divHYPE_AVAX , setDivHYPE_AVAX ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divHYPE_AVAX_persent, setDivHYPE_AVAX_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divHYPE_NEAR , setDivHYPE_NEAR ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divHYPE_NEAR_persent, setDivHYPE_NEAR_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  
  const [divHYPE_DOGE , setDivHYPE_DOGE ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divHYPE_DOGE_persent, setDivHYPE_DOGE_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divHYPE_LINK , setDivHYPE_LINK ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divHYPE_LINK_persent, setDivHYPE_LINK_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divHYPE_ADA , setDivHYPE_ADA ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divHYPE_ADA_persent, setDivHYPE_ADA_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

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

        console.log("ADA  ::::" , dataADA.price)


        const responseAVAX = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolAVAX}`
        );
        const dataAVAX = await responseAVAX.json();
        setPriceAVAX(dataAVAX.price);

        

        console.log("001" )
        const responseHYPE = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=Hyperliquid&vs_currencies=usd`

        );

        const dataHYPE = await responseHYPE.json();
        console.log("hype" , dataHYPE.hyperliquid.usd )


        setPriceHYPE(dataHYPE.hyperliquid.usd  );

       

      } catch (error) {
        console.error("Error fetching crypto price:", error);
      }
    };

    fetchPrice();

    const intervalId = setInterval(fetchPrice, 10000);

    return () => clearInterval(intervalId);
  }, []);

  ////////// ----------------------------------------------------------------------------------
  const divisionResult_XRP_ADA = priceXRP / priceADA ;

  const base_xrp_ADA = XRP / ADA;
  const persent_xrp_ADA = (divisionResult_XRP_ADA / base_xrp_ADA - 1) * 100;

  divXrp_ADA_persent.unshift(persent_xrp_ADA.toFixed(1));
  divXrp_ADA_persent.pop();

  divXrp_ADA.unshift(divisionResult_XRP_ADA.toFixed(1));
  divXrp_ADA.pop();

  //////////  --------------------------------------------------------------------------------
  const divisionResult_XRP_DOGE = priceXRP / priceDOGE;

  const base_xrp_doge = XRP / DOGE;
  const persent_XRP_DOGE = (divisionResult_XRP_DOGE / base_xrp_doge - 1) * 100;

  divXrp_doge_persent.unshift(persent_XRP_DOGE.toFixed(1));
  divXrp_doge_persent.pop();

  divXrp_doge.unshift(divisionResult_XRP_DOGE.toFixed(1));
  divXrp_doge.pop();

  ///////////  ------------------------------------------------------------------------------
 

  const divisionResult_LINK_XRP = priceLINK / priceXRP ;

  const base_LINK_XRP = LINK / XRP ;
  const persent_LINK_XRP = (divisionResult_LINK_XRP / base_LINK_XRP - 1) * 100;

  divLINK_XRP_persent.unshift(persent_LINK_XRP.toFixed(1));
  divLINK_XRP_persent.pop();

  divLINK_XRP.unshift(divisionResult_LINK_XRP.toFixed(1));
  divLINK_XRP.pop();
 

  ////////////  -----------------------------------------------------------------------------

  const divisionResult_LINK_ADA = priceLINK / priceADA ;

  const base_LINK_ADA = LINK / ADA ;
  const persent_LINK_ADA = (divisionResult_LINK_ADA / base_LINK_ADA - 1) * 100;

  divLINK_ADA_persent.unshift(persent_LINK_ADA.toFixed(1));
  divLINK_ADA_persent.pop();

  divLINK_ADA.unshift(divisionResult_LINK_ADA.toFixed(1));
  divLINK_ADA.pop();
 

  ////////////  -----------------------------------------------------------------------------

 
  const divisionResult_LINK_Doge = priceLINK / priceDOGE ;

  const base_LINK_Doge = LINK / DOGE ;
  const persent_LINK_Doge = (divisionResult_LINK_Doge / base_LINK_Doge - 1) * 100;

  divLINK_Doge_persent.unshift(persent_LINK_Doge.toFixed(1));
  divLINK_Doge_persent.pop();

  divLINK_Doge.unshift(divisionResult_LINK_Doge.toFixed(1));
  divLINK_Doge.pop();
 

  ////////////  -----------------------------------------------------------------------------

  const divisionResult_XRP_NEAR = priceXRP / priceNEAR;

  const base_xrp_near = XRP / NEAR ;
  const persent_xrp_near = (divisionResult_XRP_NEAR / base_xrp_near - 1) * 100;

  divXrp_near_persent.unshift(persent_xrp_near.toFixed(1));
  divXrp_near_persent.pop();

  divXrp_near.unshift(divisionResult_XRP_NEAR.toFixed(1));
  divXrp_near.pop();

  //////////  --------------------------------------------------------------------------------

  const divisionResult_NEAR_DOGE = priceNEAR / priceDOGE;

  const base_near_doge = NEAR / DOGE;
  const persent_NEAR_DOGE = (divisionResult_NEAR_DOGE / base_near_doge - 1) * 100;

  divNear_doge_persent.unshift(persent_NEAR_DOGE.toFixed(1));
  divNear_doge_persent.pop();

  divNear_doge.unshift(divisionResult_NEAR_DOGE.toFixed(1));
  divNear_doge.pop();

  ///////////  ------------------------------------------------------------------------------

 

  const divisionResult_LINK_NEAR = priceLINK / priceNEAR ;

  const base_LINK_NEAR = LINK / NEAR ;
  const persent_LINK_NEAR = (divisionResult_LINK_NEAR / base_LINK_NEAR - 1) * 100;

  divLINK_NEAR_persent.unshift(persent_LINK_NEAR.toFixed(1));
  divLINK_NEAR_persent.pop();

  divLINK_NEAR.unshift(divisionResult_LINK_NEAR.toFixed(1));
  divLINK_NEAR.pop();
 

  ////////////  -----------------------------------------------------------------------------

  

  const divisionResult_NEAR_ADA = priceNEAR / priceADA ;

  const base_near_ADA = NEAR / ADA ;
  const persent_NEAR_ADA = (divisionResult_NEAR_ADA / base_near_ADA - 1) * 100;

  divNear_ADA_persent.unshift(persent_NEAR_ADA.toFixed(1));
  divNear_ADA_persent.pop();

  divNear_ADA.unshift(divisionResult_NEAR_ADA.toFixed(1));
  divNear_ADA.pop();

  ///////////  ------------------------------------------------------------------------------

  
  const divisionResult_AVAX_NEAR = priceAVAX / priceNEAR ;

  const base_AVAX_NEAR = AVAX / NEAR ;
  const persent_AVAX_NEAR = (divisionResult_AVAX_NEAR / base_AVAX_NEAR - 1) * 100;

  divAVAX_near_persent.unshift(persent_AVAX_NEAR.toFixed(1));
  divAVAX_near_persent.pop();

  divAVAX_near.unshift(divisionResult_AVAX_NEAR.toFixed(1));
  divAVAX_near.pop();
 

  ////////////  ----------------------------------------------------------------------------- 


    
  const divisionResult_AVAX_DOGE = priceAVAX / priceDOGE ;

  const base_AVAX_DOGE = AVAX / DOGE ;
  const persent_AVAX_DOGE = (divisionResult_AVAX_DOGE / base_AVAX_DOGE - 1) * 100;

  divAVAX_DOGE_persent.unshift(persent_AVAX_DOGE.toFixed(1));
  divAVAX_DOGE_persent.pop();

  divAVAX_DOGE.unshift(divisionResult_AVAX_DOGE.toFixed(1));
  divAVAX_DOGE.pop();
 

  ////////////  ----------------------------------------------------------------------------- 


      
  const divisionResult_AVAX_Xrp = priceAVAX / priceXRP ;

  const base_AVAX_Xrp = AVAX / XRP ;
  const persent_AVAX_Xrp = (divisionResult_AVAX_Xrp / base_AVAX_Xrp - 1) * 100;

  divAVAX_Xrp_persent.unshift(persent_AVAX_Xrp.toFixed(1));
  divAVAX_Xrp_persent.pop();

  divAVAX_Xrp.unshift(divisionResult_AVAX_Xrp.toFixed(1));
  divAVAX_Xrp.pop();
 

  ////////////  ----------------------------------------------------------------------------- 

  
  const divisionResult_HYPE_XRP = priceHYPE / priceXRP ;

  const base_HYPE_XRP = HYPE / XRP ;
  const persent_HYPE_XRP = (divisionResult_HYPE_XRP / base_HYPE_XRP - 1) * 100;

  divHYPE_XRP_persent.unshift(persent_HYPE_XRP.toFixed(1));
  divHYPE_XRP_persent.pop();

  divHYPE_XRP.unshift(divisionResult_HYPE_XRP.toFixed(1));
  divHYPE_XRP.pop();
 

  ////////////  -----------------------------------------------------------------------------

  const divisionResult_AVAX_LINK = priceAVAX / priceLINK ;

  const base_AVAX_LINK = AVAX / LINK ;
  const persent_AVAX_LINK = (divisionResult_AVAX_LINK / base_AVAX_LINK - 1) * 100;

  divAVAX_LINK_persent.unshift(persent_AVAX_LINK.toFixed(1));
  divAVAX_LINK_persent.pop();

  divAVAX_LINK.unshift(divisionResult_AVAX_LINK.toFixed(1));
  divAVAX_LINK.pop();
 

  ////////////  ----------------------------------------------------------------------------- 

  
  const divisionResult_AVAX_ADA = priceAVAX / priceADA ;

  const base_AVAX_ADA = AVAX / ADA ;
  const persent_AVAX_ADA = (divisionResult_AVAX_ADA / base_AVAX_ADA - 1) * 100;

  divAVAX_ADA_persent.unshift(persent_AVAX_ADA.toFixed(1));
  divAVAX_ADA_persent.pop();

  divAVAX_ADA.unshift(divisionResult_AVAX_ADA.toFixed(1));
  divAVAX_ADA.pop();
 

  ////////////  ----------------------------------------------------------------------------- 

  const divisionResult_HYPE_AVAX = priceHYPE / priceAVAX ;

  const base_HYPE_AVAX = HYPE / AVAX ;
  const persent_HYPE_AVAX = (divisionResult_HYPE_AVAX / base_HYPE_AVAX - 1) * 100;

  divHYPE_AVAX_persent.unshift(persent_HYPE_AVAX.toFixed(1));
  divHYPE_AVAX_persent.pop();

  divHYPE_AVAX.unshift(divisionResult_HYPE_AVAX.toFixed(1));
  divHYPE_AVAX.pop();
 

  ////////////  -----------------------------------------------------------------------------

  const divisionResult_HYPE_NEAR = priceHYPE / priceNEAR ;

  const base_HYPE_NEAR = HYPE / NEAR ;
  const persent_HYPE_NEAR = (divisionResult_HYPE_NEAR / base_HYPE_NEAR - 1) * 100;

  divHYPE_NEAR_persent.unshift(persent_HYPE_NEAR.toFixed(1));
  divHYPE_NEAR_persent.pop();

  divHYPE_NEAR.unshift(divisionResult_HYPE_NEAR.toFixed(1));
  divHYPE_NEAR.pop();
 

  ////////////  -----------------------------------------------------------------------------
 
  const divisionResult_HYPE_DOGE = priceHYPE / priceDOGE ;

  const base_HYPE_DOGE = HYPE / DOGE ;
  const persent_HYPE_DOGE = (divisionResult_HYPE_DOGE / base_HYPE_DOGE - 1) * 100;

  divHYPE_DOGE_persent.unshift(persent_HYPE_DOGE.toFixed(1));
  divHYPE_DOGE_persent.pop();

  divHYPE_DOGE.unshift(divisionResult_HYPE_DOGE.toFixed(1));
  divHYPE_DOGE.pop();
 

  ////////////  -----------------------------------------------------------------------------

   
  const divisionResult_ADA_DOGE = priceADA / priceDOGE ;

  const base_ADA_DOGE = ADA / DOGE ;
  const persent_ADA_DOGE = (divisionResult_HYPE_DOGE / base_HYPE_DOGE - 1) * 100;

  divADA_DOGE_persent.unshift(persent_ADA_DOGE.toFixed(1));
  divADA_DOGE_persent.pop();

  divADA_DOGE.unshift(divisionResult_ADA_DOGE.toFixed(1));
  divADA_DOGE.pop();
 

  ////////////  -----------------------------------------------------------------------------

  const divisionResult_HYPE_LINK = priceHYPE / priceLINK ;

  const base_HYPE_LINK = HYPE / LINK ;
  const persent_HYPE_LINK = (divisionResult_HYPE_LINK / base_HYPE_LINK - 1) * 100;

  divHYPE_LINK_persent.unshift(persent_HYPE_LINK.toFixed(1));
  divHYPE_LINK_persent.pop();

  divHYPE_LINK.unshift(divisionResult_HYPE_LINK.toFixed(1));
  divHYPE_LINK.pop();

 

  ////////////  -----------------------------------------------------------------------------

  const divisionResult_HYPE_ADA = priceHYPE / priceADA ;

  const base_HYPE_ADA = HYPE / ADA ;
  const persent_HYPE_ADA = (divisionResult_HYPE_ADA / base_HYPE_ADA - 1) * 100;

  divHYPE_ADA_persent.unshift(persent_HYPE_ADA.toFixed(1));
  divHYPE_ADA_persent.pop();

  divHYPE_ADA.unshift(divisionResult_HYPE_ADA.toFixed(1));
  divHYPE_ADA.pop();

 

  ////////////  -----------------------------------------------------------------------------


  return (
    <div className="ml-70   mt-8  ">
      {priceXRP ? (
        <div className=" flex flex-row " >
          <h1  className=" mt-2 " > XRP . . . . . . : : : : . . . . . (( {priceXRP} $ ))  {" "}  .  .  .. . . .  Price_Buy . . .  . ..  {XRP}       </h1>

                      <input
                          type="number"
                          value={XRP}
                          onChange={(e) => setBuyXRP(e.target.value)}
                          className="border p-2   ml-6  w-20  "
                          placeholder=""
                        />

        </div>
      ) : (
        <p>Loading price...</p>
      )}


      {priceDOGE ? (
              
        <div className=" flex flex-row mt-2 " >
                <h1 className=" mt-2 "  > DOGE . . . . . . : : : : . . . (( {priceDOGE} $ ))  {" "}  . .  .  . .  .  Price_Buy . . . . . . {DOGE}  </h1>
                <input
                          type="number"
                          value={DOGE}
                          onChange={(e) => setBuyDOGE(e.target.value)}
                          className="border p-2   ml-6  w-20  "
                          placeholder=""
                        />
              </div>
            ) : (
              <p>Loading price...</p>
            )}

      {priceDOGE ? (
             <div className=" flex flex-row mt-2 " >
             <h1 className=" mt-2 "  > ADA . . . .   . . : : : : . . .. (( {priceADA} $ ))  {" "}  . .  . . .  . .  .  Price_Buy . . . .  . {ADA}  </h1>
             <input
                       type="number"
                       value={ADA}
                       onChange={(e) => setBuyADA(e.target.value)}
                       className="border p-2   ml-6  w-20  "
                       placeholder=""
                     />
           </div>
            ) : (
              <p>Loading price...</p>
            )}

      {priceLINK ? (
                    <div className=" flex flex-row mt-2 " >
                    <h1 className=" mt-2 "  > LINK . . .   .  . . : : : : . . . (( {priceLINK} $ ))  {" "}  . .  .  . .  .  Price_Buy . . . . . . {LINK}  </h1>
                    <input
                              type="number"
                              value={LINK}
                              onChange={(e) => setBuyLINK(e.target.value)}
                              className="border p-2   ml-6  w-20  "
                              placeholder=""
                            />
                  </div>
                  ) : (
                    <p>Loading price...</p>
                  )}
    {priceNEAR ? (
                          <div className=" flex flex-row mt-2 " >
                          <h1 className=" mt-2 "  > NEAR . . . .   . . : : : : . . . (( {priceNEAR} $ ))  {" "}  . .  .  . .  ..  Price_Buy . . . . . . {NEAR}  </h1>
                          <input
                                    type="number"
                                    value={NEAR}
                                    onChange={(e) => setBuyNEAR(e.target.value)}
                                    className="border p-2   ml-6  w-20  "
                                    placeholder=""
                                  />
                        </div>
                  ) : (
                    <p>Loading price...</p>
                  )}

    {priceAVAX ? (
                           <div className=" flex flex-row mt-2 " >
                           <h1 className=" mt-2 "  > AVAX . . . .  . . : : : : . . . (( {priceAVAX} $ ))  {" "}  . .  .  . .  .  Price_Buy . . . . .. {AVAX}  </h1>
                           <input
                                     type="number"
                                     value={AVAX}
                                     onChange={(e) => setBuyAVAX(e.target.value)}
                                     className="border p-2   ml-6  w-20  "
                                     placeholder=""
                                   />
                         </div>
                  ) : (
                    <p>Loading price...</p>
                  )}

    {priceAVAX ? (
                           <div className=" flex flex-row mt-2 " >
                           <h1 className=" mt-2 "  > HYPE . . . .   . . : : : : . . . . . (( {priceHYPE} $ ))  {" "}  . .. . . . .   .  . .  .  Price_Buy . . . . . . {HYPE}  </h1>
                           <input
                                     type="number"
                                     value={HYPE}
                                     onChange={(e) => setBuyHYPE(e.target.value)}
                                     className="border p-2   ml-6  w-20  "
                                     placeholder=""
                                   />
                         </div>
                      ) : (
                        <p>Loading price...</p>
                      )}
 

                    <div className=" flex flex-row ">
                              

                                    <div className="ml-0  text-sm  mt-8 w-45 ">
                                        <p className="  ml-10  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
                                          {" "}
                                          XRP/DOGE{" "}
                                        </p>
                                        <h1 className=" flex flex-row  ml-10 mt-2 ">
                                          (( {divXrp_doge[0]} )){" "}
                                          {divXrp_doge_persent[0] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divXrp_doge_persent[0]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divXrp_doge_persent[0]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                          (( {divXrp_doge[1]} )){" "}
                                          {divXrp_doge_persent[1] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divXrp_doge_persent[1]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divXrp_doge_persent[1]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                          (( {divXrp_doge[2]} )){" "}
                                          {divXrp_doge_persent[2] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divXrp_doge_persent[2]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divXrp_doge_persent[2]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                          (( {divXrp_doge[3]} )){" "}
                                          {divXrp_doge_persent[3] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divXrp_doge_persent[3]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divXrp_doge_persent[3]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10 ">
                                          (( {divXrp_doge[4]} )){" "}
                                          {divXrp_doge_persent[4] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divXrp_doge_persent[4]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divXrp_doge_persent[4]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                          (( {divXrp_doge[5]} )){" "}
                                          {divXrp_doge_persent[5] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divXrp_doge_persent[5]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divXrp_doge_persent[5]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                          
                                    </div>

                                    <div className="ml-0  text-sm  mt-8 w-45 ">
                                          <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                            {" "}
                                            AVAX/XRP{" "}
                                          </p>
                                          <h1 className=" flex flex-row  ml-10 mt-2 ">
                                            (( {divAVAX_Xrp[0]} )){" "}
                                            {divAVAX_Xrp_persent[0] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[0]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[0]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divAVAX_Xrp[1]} )){" "}
                                            {divAVAX_Xrp_persent[1] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[1]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[1]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divAVAX_Xrp[2]} )){" "}
                                            {divAVAX_Xrp_persent[2] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[2]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[2]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divAVAX_Xrp[3]} )){" "}
                                            {divAVAX_Xrp_persent[3] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[3]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[3]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10 ">
                                          (( {divAVAX_Xrp[4]} )){" "}
                                            {divAVAX_Xrp_persent[4] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[4]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[4]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divAVAX_Xrp[5]} )){" "}
                                            {divAVAX_Xrp_persent[5] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[5]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divAVAX_Xrp_persent[5]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

        
                                    </div>

                                    <div className="ml-0  text-sm  mt-8 w-45 ">
                                      <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                        {" "}
                                        XRP/NEAR{" "}
                                      </p>

                                      <h1 className=" flex flex-row text-sm ml-10 mt-2 ">
                                        {divXrp_near[0]} {" "}
                                        {divXrp_near_persent[0] > 0 ? (
                                          <p className="text-green-500 text-1xl ml-2 ">
                                            (( % {divXrp_near_persent[0]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divXrp_near_persent[0]} ))
                                          </p>
                                        )}{" "}
                                      </h1>

                                      <h1 className=" flex flex-row text-sm ml-10  ">
                                      {divXrp_near[1]} {" "}
                                        {divXrp_near_persent[1] > 0 ? (
                                          <p className="text-green-500 text-1xl ml-2 ">
                                            (( % {divXrp_near_persent[1]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divXrp_near_persent[1]} ))
                                          </p>
                                        )}{" "}
                                      </h1>

                                      <h1 className=" flex flex-row text-sm ml-10  ">
                                      {divXrp_near[2]} {" "}
                                        {divXrp_near_persent[2] > 0 ? (
                                          <p className="text-green-500 text-1xl ml-2 ">
                                            (( % {divXrp_near_persent[2]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divXrp_near_persent[2]} ))
                                          </p>
                                        )}{" "}
                                      </h1>

                                      <h1 className=" flex flex-row text-sm ml-10  ">
                                      {divXrp_near[3]} {" "}
                                        {divXrp_near_persent[3] > 0 ? (
                                          <p className="text-green-500 text-1xl ml-2 ">
                                            (( % {divXrp_near_persent[3]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divXrp_near_persent[3]} ))
                                          </p>
                                        )}{" "}
                                      </h1>

                                      <h1 className=" flex flex-row  text-sm ml-10 ">
                                      {divXrp_near[4]} {" "}
                                        {divXrp_near_persent[4] > 0 ? (
                                          <p className="text-green-500 text-1xl ml-2 ">
                                            (( % {divXrp_near_persent[4]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divXrp_near_persent[4]} ))
                                          </p>
                                        )}{" "}
                                      </h1>

                                      <h1 className=" flex flex-row text-sm ml-10  ">
                                      {divXrp_near[5]} {" "}
                                        {divXrp_near_persent[5] > 0 ? (
                                          <p className="text-green-500 text-1xl ml-2 ">
                                            (( % {divXrp_near_persent[5]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divXrp_near_persent[5]} ))
                                          </p>
                                        )}{" "}
                                      </h1>

                                    </div>

                                    <div className="ml-0  text-sm  mt-8 w-45 ">
                                      <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                        {" "}
                                        LINK/XRP{" "}
                                      </p>
                                      <h1 className=" flex flex-row  ml-10 mt-2 ">
                                        (( {divLINK_XRP[0]} )){" "}
                                        {divLINK_XRP_persent[0] > 0 ? (
                                          <p className="text-green-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[0]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[0]} ))
                                          </p>
                                        )}{" "}
                                      </h1>

                                      <h1 className=" flex flex-row  ml-10  ">
                                      (( {divLINK_XRP[1]} )){" "}
                                        {divLINK_XRP_persent[1] > 0 ? (
                                          <p className="text-green-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[1]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[1]} ))
                                          </p>
                                        )}{" "}
                                      </h1>

                                      <h1 className=" flex flex-row  ml-10  ">
                                      (( {divLINK_XRP[2]} )){" "}
                                        {divLINK_XRP_persent[2] > 0 ? (
                                          <p className="text-green-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[2]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[2]} ))
                                          </p>
                                        )}{" "}
                                      </h1>

                                      <h1 className=" flex flex-row  ml-10  ">
                                      (( {divLINK_XRP[3]} )){" "}
                                        {divLINK_XRP_persent[3] > 0 ? (
                                          <p className="text-green-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[3]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[3]} ))
                                          </p>
                                        )}{" "}
                                      </h1>

                                      <h1 className=" flex flex-row  ml-10 ">
                                      (( {divLINK_XRP[4]} )){" "}
                                        {divLINK_XRP_persent[4] > 0 ? (
                                          <p className="text-green-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[4]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[4]} ))
                                          </p>
                                        )}{" "}
                                      </h1>

                                      <h1 className=" flex flex-row  ml-10  ">
                                      (( {divLINK_XRP[5]} )){" "}
                                        {divLINK_XRP_persent[5] > 0 ? (
                                          <p className="text-green-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[5]} ))
                                          </p>
                                        ) : (
                                          <p className="text-red-500  ml-2 ">
                                            (( % {divLINK_XRP_persent[5]} ))
                                          </p>
                                        )}{" "}
                                      </h1>
                            
                                    </div>

                                    <div className="ml-0  text-sm  mt-8 w-45 ">
                                    <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                      {" "}
                                      XRP/ADA{" "}
                                    </p>

                                    <h1 className=" flex flex-row text-sm ml-10 mt-2 ">
                                      {divXrp_ADA[0]} {" "}
                                      {divXrp_ADA_persent[0] > 0 ? (
                                        <p className="text-green-500 text-1xl ml-2 ">
                                          (( % {divXrp_ADA_persent[0]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divXrp_ADA_persent[0]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row text-sm ml-10  ">
                                      {divXrp_ADA[1]} {" "}
                                      {divXrp_ADA_persent[1] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divXrp_ADA_persent[1]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divXrp_ADA_persent[1]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row text-sm ml-10  ">
                                        {divXrp_ADA[2]}  {" "}
                                      {divXrp_ADA_persent[2] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divXrp_ADA_persent[2]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divXrp_ADA_persent[2]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row text-sm ml-10  ">
                                      {divXrp_ADA[3]}  {" "}
                                      {divXrp_ADA_persent[3] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divXrp_ADA_persent[3]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divXrp_ADA_persent[3]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  text-sm ml-10 ">
                                        {divXrp_ADA[4]}  {" "}
                                      {divXrp_ADA_persent[4] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divXrp_ADA_persent[4]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divXrp_ADA_persent[4]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row text-sm ml-10  ">
                                      {divXrp_ADA[5]} {" "}
                                      {divXrp_ADA_persent[5] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divXrp_ADA_persent[5]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divXrp_ADA_persent[5]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    </div>
 
                                    <div className="ml-0  text-sm  mt-8 w-45 ">
                                          <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                            {" "}
                                            HYPE/XRP{" "}
                                          </p>
                                          <h1 className=" flex flex-row  ml-10 mt-2 ">
                                            (( {divHYPE_XRP[0]} )){" "}
                                            {divHYPE_XRP_persent[0] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[0]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[0]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_XRP[1]} )){" "}
                                            {divHYPE_XRP_persent[1] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[1]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[1]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_XRP[2]} )){" "}
                                            {divHYPE_XRP_persent[2] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[2]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[2]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_XRP[3]} )){" "}
                                            {divHYPE_XRP_persent[3] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[3]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[3]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10 ">
                                          (( {divHYPE_XRP[4]} )){" "}
                                            {divHYPE_XRP_persent[4] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[4]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[4]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_XRP[5]} )){" "}
                                            {divHYPE_XRP_persent[5] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[5]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_XRP_persent[5]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

        
                                    </div>

                                    <div className="ml-0  text-sm  mt-8 w-45 ">
                                        <p className="  ml-10  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
                                          {" "}
                                          ADA/DOGE{" "}
                                        </p>
                                        <h1 className=" flex flex-row  ml-10 mt-2 ">
                                          (( {divADA_DOGE[0]} )){" "}
                                          {divADA_DOGE_persent[0] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[0]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[0]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                          (( {divADA_DOGE[1]} )){" "}
                                          {divADA_DOGE_persent[1] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[1]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[1]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                          (( {divADA_DOGE[2]} )){" "}
                                          {divADA_DOGE_persent[2] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[2]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[2]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                          (( {divADA_DOGE[3]} )){" "}
                                          {divADA_DOGE_persent[3] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[3]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[3]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10 ">
                                          (( {divADA_DOGE[4]} )){" "}
                                          {divADA_DOGE_persent[4] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[4]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[4]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                          (( {divADA_DOGE[5]} )){" "}
                                          {divADA_DOGE_persent[5] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[5]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divADA_DOGE_persent[5]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                          
                                    </div>

                                     

                     </div>



                      <div className=" flex flex-row ">

                                      <div className="ml-0  text-sm  mt-8 w-45 ">
                                    <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                      {" "}
                                      AVAX/NEAR{" "}
                                    </p>
                                    <h1 className=" flex flex-row  ml-10 mt-2 ">
                                      (( {divAVAX_near[0]} )){" "}
                                      {divAVAX_near_persent[0] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_near_persent[0]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_near_persent[0]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_near[1]} )){" "}
                                      {divAVAX_near_persent[1] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_near_persent[1]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_near_persent[1]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_near[2]} )){" "}
                                      {divAVAX_near_persent[2] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_near_persent[2]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_near_persent[2]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_near[3]} )){" "}
                                      {divAVAX_near_persent[3] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_near_persent[3]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_near_persent[3]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10 ">
                                    (( {divAVAX_near[4]} )){" "}
                                      {divAVAX_near_persent[4] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_near_persent[4]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_near_persent[4]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_near[5]} )){" "}
                                      {divAVAX_near_persent[5] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_near_persent[5]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_near_persent[5]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                          
                                      </div>

                                      <div className="ml-0  text-sm  mt-8 w-45 ">
                                    <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                      {" "}
                                      AVAX/LINK{" "}
                                    </p>
                                    <h1 className=" flex flex-row  ml-10 mt-2 ">
                                      (( {divAVAX_LINK[0]} )){" "}
                                      {divAVAX_LINK_persent[0] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_LINK_persent[0]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_LINK_persent[0]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_LINK[1]} )){" "}
                                      {divAVAX_LINK_persent[1] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_near_persent[1]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_LINK_persent[1]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_LINK[2]} )){" "}
                                      {divAVAX_LINK_persent[2] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_near_persent[2]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_LINK_persent[2]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_LINK[3]} )){" "}
                                      {divAVAX_LINK_persent[3] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_LINK_persent[3]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_LINK_persent[3]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10 ">
                                    (( {divAVAX_LINK[4]} )){" "}
                                      {divAVAX_LINK_persent[4] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_LINK_persent[4]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_LINK_persent[4]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_LINK[5]} )){" "}
                                      {divAVAX_LINK_persent[5] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_LINK_persent[5]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_LINK_persent[5]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                          
                                      </div>

                                      <div className="ml-0  text-sm  mt-8 w-45 ">
                          <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                            {" "}
                            AVAX/DOGE{" "}
                          </p>
                          <h1 className=" flex flex-row  ml-10 mt-2 ">
                            (( {divAVAX_DOGE[0]} )){" "}
                            {divAVAX_DOGE_persent[0] > 0 ? (
                              <p className="text-green-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[0]} ))
                              </p>
                            ) : (
                              <p className="text-red-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[0]} ))
                              </p>
                            )}{" "}
                          </h1>

                          <h1 className=" flex flex-row  ml-10  ">
                          (( {divAVAX_DOGE[1]} )){" "}
                            {divAVAX_DOGE_persent[1] > 0 ? (
                              <p className="text-green-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[1]} ))
                              </p>
                            ) : (
                              <p className="text-red-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[1]} ))
                              </p>
                            )}{" "}
                          </h1>

                          <h1 className=" flex flex-row  ml-10  ">
                          (( {divAVAX_DOGE[2]} )){" "}
                            {divAVAX_DOGE_persent[2] > 0 ? (
                              <p className="text-green-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[2]} ))
                              </p>
                            ) : (
                              <p className="text-red-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[2]} ))
                              </p>
                            )}{" "}
                          </h1>

                          <h1 className=" flex flex-row  ml-10  ">
                          (( {divAVAX_DOGE[3]} )){" "}
                            {divAVAX_DOGE_persent[3] > 0 ? (
                              <p className="text-green-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[3]} ))
                              </p>
                            ) : (
                              <p className="text-red-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[3]} ))
                              </p>
                            )}{" "}
                          </h1>

                          <h1 className=" flex flex-row  ml-10 ">
                          (( {divAVAX_DOGE[4]} )){" "}
                            {divAVAX_DOGE_persent[4] > 0 ? (
                              <p className="text-green-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[4]} ))
                              </p>
                            ) : (
                              <p className="text-red-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[4]} ))
                              </p>
                            )}{" "}
                          </h1>

                          <h1 className=" flex flex-row  ml-10  ">
                          (( {divAVAX_DOGE[5]} )){" "}
                            {divAVAX_DOGE_persent[5] > 0 ? (
                              <p className="text-green-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[5]} ))
                              </p>
                            ) : (
                              <p className="text-red-500  ml-2 ">
                                (( % {divAVAX_DOGE_persent[5]} ))
                              </p>
                            )}{" "}
                          </h1>

                
                                      </div>

                                      <div className="ml-0  text-sm  mt-8 w-45 ">
                                    <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                      {" "}
                                      AVAX/ADA{" "}
                                    </p>
                                    <h1 className=" flex flex-row  ml-10 mt-2 ">
                                      (( {divAVAX_ADA[0]} )){" "}
                                      {divAVAX_ADA_persent[0] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[0]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[0]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_ADA[1]} )){" "}
                                      {divAVAX_ADA_persent[1] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[1]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[1]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_ADA[2]} )){" "}
                                      {divAVAX_ADA_persent[2] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[2]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[2]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_ADA[3]} )){" "}
                                      {divAVAX_ADA_persent[3] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[3]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[3]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10 ">
                                    (( {divAVAX_ADA[4]} )){" "}
                                      {divAVAX_ADA_persent[4] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[4]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[4]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divAVAX_ADA[5]} )){" "}
                                      {divAVAX_ADA_persent[5] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[5]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divAVAX_ADA_persent[5]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                          
                                      </div>

                                      <div className="ml-0  text-sm  mt-8 w-45 ">
                                              <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                                {" "}
                                                HYPE/AVAX{" "}
                                              </p>
                                              <h1 className=" flex flex-row  ml-10 mt-2 ">
                                                (( {divHYPE_AVAX[0]} )){" "}
                                                {divHYPE_AVAX_persent[0] > 0 ? (
                                                  <p className="text-green-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[0]} ))
                                                  </p>
                                                ) : (
                                                  <p className="text-red-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[0]} ))
                                                  </p>
                                                )}{" "}
                                              </h1>

                                              <h1 className=" flex flex-row  ml-10  ">
                                              (( {divHYPE_AVAX[1]} )){" "}
                                                {divHYPE_AVAX_persent[1] > 0 ? (
                                                  <p className="text-green-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[1]} ))
                                                  </p>
                                                ) : (
                                                  <p className="text-red-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[1]} ))
                                                  </p>
                                                )}{" "}
                                              </h1>

                                              <h1 className=" flex flex-row  ml-10  ">
                                              (( {divHYPE_AVAX[2]} )){" "}
                                                {divHYPE_AVAX_persent[2] > 0 ? (
                                                  <p className="text-green-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[2]} ))
                                                  </p>
                                                ) : (
                                                  <p className="text-red-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[2]} ))
                                                  </p>
                                                )}{" "}
                                              </h1>

                                              <h1 className=" flex flex-row  ml-10  ">
                                              (( {divHYPE_AVAX[3]} )){" "}
                                                {divHYPE_AVAX_persent[3] > 0 ? (
                                                  <p className="text-green-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[3]} ))
                                                  </p>
                                                ) : (
                                                  <p className="text-red-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[3]} ))
                                                  </p>
                                                )}{" "}
                                              </h1>

                                              <h1 className=" flex flex-row  ml-10 ">
                                              (( {divHYPE_AVAX[4]} )){" "}
                                                {divHYPE_AVAX_persent[4] > 0 ? (
                                                  <p className="text-green-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[4]} ))
                                                  </p>
                                                ) : (
                                                  <p className="text-red-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[4]} ))
                                                  </p>
                                                )}{" "}
                                              </h1>

                                              <h1 className=" flex flex-row  ml-10  ">
                                              (( {divHYPE_AVAX[5]} )){" "}
                                                {divHYPE_AVAX_persent[5] > 0 ? (
                                                  <p className="text-green-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[5]} ))
                                                  </p>
                                                ) : (
                                                  <p className="text-red-500  ml-2 ">
                                                    (( % {divHYPE_AVAX_persent[5]} ))
                                                  </p>
                                                )}{" "}
                                              </h1>

            
                                        </div>

                                        <div className="ml-0  text-sm  mt-8 w-45 ">
                                          <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                            {" "}
                                            HYPE/NEAR{" "}
                                          </p>
                                          <h1 className=" flex flex-row  ml-10 mt-2 ">
                                            (( {divHYPE_NEAR[0]} )){" "}
                                            {divHYPE_NEAR_persent[0] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[0]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[0]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_NEAR[1]} )){" "}
                                            {divHYPE_NEAR_persent[1] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[1]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[1]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_NEAR[2]} )){" "}
                                            {divHYPE_NEAR_persent[2] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[2]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[2]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_NEAR[3]} )){" "}
                                            {divHYPE_NEAR_persent[3] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[3]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[3]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10 ">
                                          (( {divHYPE_NEAR[4]} )){" "}
                                            {divHYPE_NEAR_persent[4] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[4]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[4]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_NEAR[5]} )){" "}
                                            {divHYPE_NEAR_persent[5] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[5]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_NEAR_persent[5]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

        
                                    </div>


                                    <div className="ml-0  text-sm  mt-8 w-45 ">
                                          <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                            {" "}
                                            HYPE/ADA{" "}
                                          </p>
                                          <h1 className=" flex flex-row  ml-10 mt-2 ">
                                            (( {divHYPE_ADA[0]} )){" "}
                                            {divHYPE_ADA_persent[0] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[0]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[0]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_ADA[1]} )){" "}
                                            {divHYPE_ADA_persent[1] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[1]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[1]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_ADA[2]} )){" "}
                                            {divHYPE_ADA_persent[2] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[2]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[2]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_ADA[3]} )){" "}
                                            {divHYPE_ADA_persent[3] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[3]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[3]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10 ">
                                          (( {divHYPE_ADA[4]} )){" "}
                                            {divHYPE_ADA_persent[4] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[4]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[4]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_ADA[5]} )){" "}
                                            {divHYPE_ADA_persent[5] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[5]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_ADA_persent[5]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

        
                                    </div>
                         

                      </div>

              <div className=" flex flex-row " >


                                  <div className="ml-0  text-sm  mt-8 w-45 ">
                                    <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                      {" "}
                                      LINK/NEAR{" "}
                                    </p>
                                    <h1 className=" flex flex-row  ml-10 mt-2 ">
                                      (( {divLINK_NEAR[0]} )){" "}
                                      {divLINK_NEAR_persent[0] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[0]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[0]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_NEAR[1]} )){" "}
                                      {divLINK_NEAR_persent[1] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[1]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[1]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_NEAR[2]} )){" "}
                                      {divLINK_NEAR_persent[2] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[2]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[2]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_NEAR[3]} )){" "}
                                      {divLINK_NEAR_persent[3] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[3]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[3]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10 ">
                                    (( {divLINK_NEAR[4]} )){" "}
                                      {divLINK_NEAR_persent[4] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[4]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[4]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_NEAR[5]} )){" "}
                                      {divLINK_NEAR_persent[5] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[5]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_NEAR_persent[5]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                          
                                  </div>

                                  <div className="ml-0  text-sm  mt-8 w-45 ">
                                        <p className="  ml-10  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
                                          {" "}
                                          NEAR/DOGE{" "}
                                        </p>
                                        <h1 className=" flex flex-row  ml-10 mt-2 ">
                                          (( {divNear_doge[0]} )){" "}
                                          {divNear_doge_persent[0] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_doge_persent[0]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_doge_persent[0]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                        (( {divNear_doge[1]} )){" "}
                                          {divNear_doge_persent[1] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_doge_persent[1]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_doge_persent[1]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                        (( {divNear_doge[2]} )){" "}
                                          {divNear_doge_persent[2] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_doge_persent[2]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_doge_persent[2]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                        (( {divNear_doge[3]} )){" "}
                                          {divNear_doge_persent[3] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_doge_persent[3]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_doge_persent[3]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10 ">
                                        (( {divNear_doge[4]} )){" "}
                                          {divNear_doge_persent[4] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_doge_persent[4]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_doge_persent[4]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                        (( {divNear_doge[5]} )){" "}
                                          {divNear_doge_persent[5] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_doge_persent[5]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_doge_persent[5]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                          
                                  </div>

                                  
                                  <div className="ml-0  text-sm  mt-8 w-45 ">
                                        <p className="  ml-10  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
                                          {" "}
                                          NEAR/ADA{" "}
                                        </p>
                                        <h1 className=" flex flex-row  ml-10 mt-2 ">
                                          (( {divNear_ADA[0]} )){" "}
                                          {divNear_ADA_persent[0] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_ADA_persent[0]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_ADA_persent[0]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                        (( {divNear_ADA[1]} )){" "}
                                          {divNear_ADA_persent[1] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_ADA_persent[1]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_ADA_persent[1]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                        (( {divNear_ADA[2]} )){" "}
                                          {divNear_ADA_persent[2] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_ADA_persent[2]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_ADA_persent[2]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                        (( {divNear_ADA[3]} )){" "}
                                          {divNear_ADA_persent[3] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_ADA_persent[3]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_ADA_persent[3]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10 ">
                                        (( {divNear_ADA[4]} )){" "}
                                          {divNear_ADA_persent[4] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_ADA_persent[4]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_ADA_persent[4]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                                        <h1 className=" flex flex-row  ml-10  ">
                                        (( {divNear_ADA[5]} )){" "}
                                          {divNear_ADA_persent[5] > 0 ? (
                                            <p className="text-green-500  ml-2 ">
                                              (( % {divNear_ADA_persent[5]} ))
                                            </p>
                                          ) : (
                                            <p className="text-red-500  ml-2 ">
                                              (( % {divNear_ADA_persent[5]} ))
                                            </p>
                                          )}{" "}
                                        </h1>

                          
                                  </div>

                                  <div className="ml-0  text-sm  mt-8 w-45 ">
                                    <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                      {" "}
                                      LINK/DOGE {" "}
                                    </p>
                                    <h1 className=" flex flex-row  ml-10 mt-2 ">
                                      (( {divLINK_Doge[0]} )){" "}
                                      {divLINK_Doge_persent[0] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[0]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[0]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_Doge[1]} )){" "}
                                      {divLINK_Doge_persent[1] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[1]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[1]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_Doge[2]} )){" "}
                                      {divLINK_Doge_persent[2] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[2]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[2]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_Doge[3]} )){" "}
                                      {divLINK_Doge_persent[3] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[3]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[3]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10 ">
                                    (( {divLINK_Doge[4]} )){" "}
                                      {divLINK_Doge_persent[4] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[4]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[4]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_Doge[5]} )){" "}
                                      {divLINK_Doge_persent[5] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[5]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_Doge_persent[5]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                          
                                  </div>

                                  
                                  <div className="ml-0  text-sm  mt-8 w-45 ">
                                    <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                      {" "}
                                      LINK/ADA{" "}
                                    </p>
                                    <h1 className=" flex flex-row  ml-10 mt-2 ">
                                      (( {divLINK_ADA[0]} )){" "}
                                      {divLINK_ADA_persent[0] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[0]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[0]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_ADA[1]} )){" "}
                                      {divLINK_ADA_persent[1] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[1]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[1]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_ADA[2]} )){" "}
                                      {divLINK_ADA_persent[2] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[2]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[2]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_ADA[3]} )){" "}
                                      {divLINK_ADA_persent[3] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[3]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[3]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10 ">
                                    (( {divLINK_ADA[4]} )){" "}
                                      {divLINK_ADA_persent[4] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[4]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[4]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                                    <h1 className=" flex flex-row  ml-10  ">
                                    (( {divLINK_ADA[5]} )){" "}
                                      {divLINK_ADA_persent[5] > 0 ? (
                                        <p className="text-green-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[5]} ))
                                        </p>
                                      ) : (
                                        <p className="text-red-500  ml-2 ">
                                          (( % {divLINK_ADA_persent[5]} ))
                                        </p>
                                      )}{" "}
                                    </h1>

                          
                                  </div>


                                  <div className="ml-0  text-sm  mt-8 w-45 ">
                                          <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                            {" "}
                                            HYPE/DOGE{" "}
                                          </p>
                                          <h1 className=" flex flex-row  ml-10 mt-2 ">
                                            (( {divHYPE_DOGE[0]} )){" "}
                                            {divHYPE_DOGE_persent[0] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[0]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[0]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_DOGE[1]} )){" "}
                                            {divHYPE_DOGE_persent[1] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[1]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[1]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_DOGE[2]} )){" "}
                                            {divHYPE_DOGE_persent[2] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[2]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[2]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_DOGE[3]} )){" "}
                                            {divHYPE_DOGE_persent[3] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[3]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[3]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10 ">
                                          (( {divHYPE_DOGE[4]} )){" "}
                                            {divHYPE_DOGE_persent[4] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[4]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[4]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_DOGE[5]} )){" "}
                                            {divHYPE_DOGE_persent[5] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[5]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_DOGE_persent[5]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

        
                                    </div>


                                    <div className="ml-0  text-sm  mt-8 w-45 ">
                                          <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
                                            {" "}
                                            HYPE/LINK{" "}
                                          </p>
                                          <h1 className=" flex flex-row  ml-10 mt-2 ">
                                            (( {divHYPE_LINK[0]} )){" "}
                                            {divHYPE_LINK_persent[0] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[0]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[0]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_LINK[1]} )){" "}
                                            {divHYPE_LINK_persent[1] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[1]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[1]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_LINK[2]} )){" "}
                                            {divHYPE_LINK_persent[2] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[2]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[2]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_LINK[3]} )){" "}
                                            {divHYPE_LINK_persent[3] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[3]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[3]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10 ">
                                          (( {divHYPE_LINK[4]} )){" "}
                                            {divHYPE_LINK_persent[4] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[4]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[4]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

                                          <h1 className=" flex flex-row  ml-10  ">
                                          (( {divHYPE_LINK[5]} )){" "}
                                            {divHYPE_LINK_persent[5] > 0 ? (
                                              <p className="text-green-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[5]} ))
                                              </p>
                                            ) : (
                                              <p className="text-red-500  ml-2 ">
                                                (( % {divHYPE_LINK_persent[5]} ))
                                              </p>
                                            )}{" "}
                                          </h1>

        
                                    </div>

                            

                                  


              </div>

              <div className=" flex flex-row "   >
              
          
              
      

               
        
              </div>

      
    </div>
  );
};

export default CryptoPrice;
