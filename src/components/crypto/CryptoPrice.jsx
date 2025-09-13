import React, { useState, useEffect } from "react";

const CryptoPrice = () => {

  const XRP = 3.02 ;
  const FLOKI = 0.0001088 ;
  const DOGE = 0.2960    ;
  const ARB = 0.5220  ;
  const LINK = 23.99 ;
  const NEAR = 2.74 ;
  const ONDO = 1.11 ; 
  const ADA = 0.89 ;
  const AVAX = 28.50 ;
  const TON = 3.19 ;

  const [priceXRP , setPriceXRP ] = useState(null) ;
  const [priceFLOKI , setPriceFLOKI ] = useState(null) ;
  const [priceDOGE , setPriceDOGE ] = useState(null) ;
  const [priceARB , setPriceARB ] = useState(null) ;
  const [priceLINK , setPriceLINK ] = useState(null) ;
  const [priceNEAR , setPriceNEAR ] = useState(null) ;
  const [priceONDO , setPriceONDO ] = useState(null) ;
  const [priceADA , setPriceADA ] = useState(null) ;
  const [priceAVAX , setPriceAVAX ] = useState(null) ;
  const [priceTON , setPriceTON ] = useState(null) ;
 

  const [divXrp_floki, setDivXrp_floki] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divXrp_floki_persent, setDivXrp_floki_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divXrp_doge, setDivXrp_dog] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divXrp_doge_persent, setDivXrp_doge_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divDog_Floki, setDivDog_Floki] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divDoge_floki_persent, setDivDoge_floki_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divXrp_ARB, setDivXrp_ARB] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divXrp_ARB_persent, setDivXrp_ARB_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divLINK_XRP, setDivLINK_XRP] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divLINK_XRP_persent, setDivLINK_XRP_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divARB_floki, setDivARB_floki] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divARB_floki_persent, setDivARB_floki_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divLINK_ARB, setDivLINK_ARB] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divLINK_ARB_persent, setDivLINK_ARB_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  
  const [divLINK_floki, setDivLINK_floki ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divLINK_floki_persent, setDivLINK_floki_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divARB_Doge, setDivARB_Doge] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divARB_Doge_persent, setDivARB_Doge_persent] = useState([
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

  const [divNear_ARB, setDivNear_ARB] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divNear_ARB_persent, setDivNear_ARB_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divLINK_NEAR, setDivLINK_NEAR] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divLINK_NEAR_persent, setDivLINK_NEAR_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divNear_ONDO , setDivNear_ONDO ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divNear_ONDO_persent, setDivNear_ONDO_persent] = useState([
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
  
  
  const [divTON_NEAR, setDivTON_NEAR] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divTON_NEAR_persent, setDivTON_NEAR_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);


  const [divXrp_ONDO, setDivXrp_ONDO ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divXrp_ONDO_persent, setDivXrp_ONDO_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);


  const [divONDO_doge, setDivONDO_doge] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divONDO_doge_persent, setDivONDO_doge_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divONDO_ARB, setDivONDO_ARB] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divONDO_ARB_persent, setDivONDO_ARB_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divLINK_ONDO, setDivLINK_ONDO] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divLINK_ONDO_persent, setDivLINK_ONDO_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divONDO_ADA, setDivONDO_ADA] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divONDO_ADA_persent, setDivONDO_ADA_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [divAVAX_ONDO , setDivAVAX_ONDO ] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [divAVAX_ONDO_persent, setDivAVAX_ONDO_persent] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const symbolXRP = "XRPUSDT"; 
  const symbolFLOKI = "FLOKIUSDT";  
  const symbolDOG = "DOGEUSDT";  
  const symbolARB = "ARBUSDT";  
  const symbolLINK = "LINKUSDT";  
  const symbolNEAR = "NEARUSDT";  
  const symbolONDO = "ONDOUSDT";  
  const symbolADA = "ADAUSDT";  
  const symbolAVAX = "AVAXUSDT";  
  const symbolTON = "TONUSDT";  

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
        setPriceDOGE(dataDOG.price);

        const responseARB = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolARB}`
        );
        const dataARB = await responseARB.json();
        setPriceARB(dataARB.price);

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

        const responseONDO = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolONDO}`
        );
        const dataONDO = await responseONDO.json();
        setPriceONDO(dataONDO.price);

        const responseADA = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolADA}`
        );
        const dataADA = await responseADA.json();
        setPriceADA(dataADA.price);

        const responseAVAX = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolAVAX}`
        );
        const dataAVAX = await responseAVAX.json();
        setPriceAVAX(dataAVAX.price);
        
        
        const responseTON = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbolTON}`
        );
        const dataTON = await responseTON.json();
        setPriceTON(dataTON.price);


      } catch (error) {
        console.error("Error fetching crypto price:", error);
      }
    };

    fetchPrice();

    const intervalId = setInterval(fetchPrice, 15000);

    return () => clearInterval(intervalId);
  }, []);

  ////////// ----------------------------------------------------------------------------------
  const divisionResult_XRP_FLOKI = priceXRP / priceFLOKI;

  const base_xrp_floki = XRP / FLOKI;
  const persent_xrp_floki = (divisionResult_XRP_FLOKI / base_xrp_floki - 1) * 100;

  divXrp_floki_persent.unshift(persent_xrp_floki.toFixed(1));
  divXrp_floki_persent.pop();

  divXrp_floki.unshift(divisionResult_XRP_FLOKI.toFixed(1));
  divXrp_floki.pop();

  //////////  --------------------------------------------------------------------------------
  const divisionResult_XRP_DOGE = priceXRP / priceDOGE;

  const base_xrp_doge = XRP / DOGE;
  const persent_XRP_DOGE = (divisionResult_XRP_DOGE / base_xrp_doge - 1) * 100;

  divXrp_doge_persent.unshift(persent_XRP_DOGE.toFixed(1));
  divXrp_doge_persent.pop();

  divXrp_doge.unshift(divisionResult_XRP_DOGE.toFixed(1));
  divXrp_doge.pop();

  ///////////  ------------------------------------------------------------------------------
  const divisionResult_DOGE_FLOKI = priceDOGE / priceFLOKI ;

  const base_doge_floki = DOGE / FLOKI;
  const persent_doge_floki = (divisionResult_DOGE_FLOKI / base_doge_floki - 1) * 100;

  divDoge_floki_persent.unshift(persent_doge_floki.toFixed(1));
  divDoge_floki_persent.pop();

  divDog_Floki.unshift(divisionResult_DOGE_FLOKI.toFixed(1)) ;
  divDog_Floki.pop();

  ////////////  -----------------------------------------------------------------------------

  const divisionResult_XRP_ARB = priceXRP / priceARB;

  const base_xrp_ARB = XRP / ARB;
  const persent_xrp_ARB = (divisionResult_XRP_ARB / base_xrp_ARB - 1) * 100;

  divXrp_ARB_persent.unshift(persent_xrp_ARB.toFixed(1));
  divXrp_ARB_persent.pop();

  divXrp_ARB.unshift(divisionResult_XRP_ARB.toFixed(1));
  divXrp_ARB.pop();
 

  ////////////  -----------------------------------------------------------------------------

  const divisionResult_LINK_XRP = priceLINK / priceXRP ;

  const base_LINK_XRP = LINK / XRP ;
  const persent_LINK_XRP = (divisionResult_LINK_XRP / base_LINK_XRP - 1) * 100;

  divLINK_XRP_persent.unshift(persent_LINK_XRP.toFixed(1));
  divLINK_XRP_persent.pop();

  divLINK_XRP.unshift(divisionResult_LINK_XRP.toFixed(1));
  divLINK_XRP.pop();
 

  ////////////  -----------------------------------------------------------------------------

  const divisionResult_ARB_floki = priceARB / priceFLOKI ;

  const base_ARB_floki = ARB / FLOKI ;
  const persent_ARB_floki = (divisionResult_ARB_floki / base_ARB_floki - 1) * 100;

  divARB_floki_persent.unshift(persent_ARB_floki.toFixed(1));
  divARB_floki_persent.pop();

  divARB_floki.unshift(divisionResult_ARB_floki.toFixed(1));
  divARB_floki.pop();
 

  ////////////  -----------------------------------------------------------------------------

  const divisionResult_LINK_ARB = priceLINK / priceARB ;

  const base_LINK_ARB = LINK / ARB ;
  const persent_LINK_ARB = (divisionResult_LINK_ARB / base_LINK_ARB - 1) * 100;

  divLINK_ARB_persent.unshift(persent_LINK_ARB.toFixed(1));
  divLINK_ARB_persent.pop();

  divLINK_ARB.unshift(divisionResult_LINK_ARB.toFixed(1));
  divLINK_ARB.pop();
 

  ////////////  ------------------------------------------------------------------------------

  const divisionResult_LINK_floki = priceLINK / priceFLOKI ;

  const base_LINK_floki = LINK / FLOKI ;
  const persent_LINK_floki = (divisionResult_LINK_floki / base_LINK_floki - 1) * 100;

  divLINK_floki_persent.unshift(persent_LINK_floki.toFixed(1));
  divLINK_floki_persent.pop();

  divLINK_floki.unshift(divisionResult_LINK_floki.toFixed(1));
  divLINK_floki.pop();
 

  ////////////  ------------------------------------------------------------------------------

  const divisionResult_ARB_Doge = priceARB / priceDOGE ;

  const base_ARB_Doge = ARB / DOGE ;
  const persent_ARB_Doge = (divisionResult_ARB_Doge / base_ARB_Doge - 1) * 100;

  divARB_Doge_persent.unshift(persent_ARB_Doge.toFixed(1));
  divARB_Doge_persent.pop();

  divARB_Doge.unshift(divisionResult_ARB_Doge.toFixed(1));
  divARB_Doge.pop();
 
  /////////// --------------------------------------------------------------------------------

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

  const divisionResult_NEAR_ARB = priceNEAR / priceARB;

  const base_near_ARB = NEAR / ARB;
  const persent_NEAR_ARB = (divisionResult_NEAR_ARB / base_near_ARB - 1) * 100;

  divNear_ARB_persent.unshift(persent_NEAR_ARB.toFixed(1));
  divNear_ARB_persent.pop();

  divNear_ARB.unshift(divisionResult_NEAR_ARB.toFixed(1));
  divNear_ARB.pop();

  ///////////  ------------------------------------------------------------------------------

  const divisionResult_LINK_NEAR = priceLINK / priceNEAR ;

  const base_LINK_NEAR = LINK / NEAR ;
  const persent_LINK_NEAR = (divisionResult_LINK_NEAR / base_LINK_NEAR - 1) * 100;

  divLINK_NEAR_persent.unshift(persent_LINK_NEAR.toFixed(1));
  divLINK_NEAR_persent.pop();

  divLINK_NEAR.unshift(divisionResult_LINK_NEAR.toFixed(1));
  divLINK_NEAR.pop();
 

  ////////////  -----------------------------------------------------------------------------

  
  const divisionResult_NEAR_ONDO = priceNEAR / priceONDO ;

  const base_near_ONDO = NEAR / ONDO;
  const persent_NEAR_ONDO = (divisionResult_NEAR_ONDO / base_near_ONDO - 1) * 100;

  divNear_ONDO_persent.unshift(persent_NEAR_ONDO.toFixed(1));
  divNear_ONDO_persent.pop();

  divNear_ONDO.unshift(divisionResult_NEAR_ONDO.toFixed(1));
  divNear_ONDO.pop();

  ///////////  ------------------------------------------------------------------------------
  

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

  
  const divisionResult_TON_NEAR = priceTON / priceNEAR;

  const base_TON_NEAR = TON / NEAR ;
  const persent_TON_NEAR = (divisionResult_TON_NEAR / base_TON_NEAR - 1) * 100;

  divTON_NEAR_persent.unshift(persent_TON_NEAR.toFixed(1));
  divTON_NEAR_persent.pop();

  divTON_NEAR.unshift(divisionResult_TON_NEAR.toFixed(1));
  divTON_NEAR.pop();

  //////////  --------------------------------------------------------------------------------

  const divisionResult_XRP_ONDO = priceXRP / priceONDO;

  const base_xrp_ONDO = XRP / ONDO ;
  const persent_XRP_ONDO = (divisionResult_XRP_ONDO / base_xrp_ONDO - 1) * 100;

  divXrp_ONDO_persent.unshift(persent_XRP_ONDO.toFixed(1));
  divXrp_ONDO_persent.pop();

  divXrp_ONDO.unshift(divisionResult_XRP_ONDO.toFixed(1));
  divXrp_ONDO.pop();

  ///////////  ------------------------------------------------------------------------------

  const divisionResult_ONDO_DOGE = priceONDO / priceDOGE;

  const base_ONDO_doge = ONDO / DOGE;
  const persent_ONDO_DOGE = (divisionResult_ONDO_DOGE / base_ONDO_doge - 1) * 100;

  divONDO_doge_persent.unshift(persent_ONDO_DOGE.toFixed(1));
  divONDO_doge_persent.pop();

  divONDO_doge.unshift(divisionResult_ONDO_DOGE.toFixed(1));
  divONDO_doge.pop();

  ///////////  ------------------------------------------------------------------------------

  const divisionResult_ONDO_ARB = priceONDO / priceARB;

  const base_ONDO_ARB = ONDO / ARB;
  const persent_ONDO_ARB = (divisionResult_ONDO_ARB / base_ONDO_ARB - 1) * 100;

  divONDO_ARB_persent.unshift(persent_ONDO_ARB.toFixed(1));
  divONDO_ARB_persent.pop();

  divONDO_ARB.unshift(divisionResult_ONDO_ARB.toFixed(1));
  divONDO_ARB.pop();
 

  ////////////  -----------------------------------------------------------------------------

  
  const divisionResult_LINK_ONDO = priceLINK / priceONDO ;

  const base_LINK_ONDO = LINK / ONDO ;
  const persent_LINK_ONDO = (divisionResult_LINK_ONDO / base_LINK_ONDO - 1) * 100;

  divLINK_ONDO_persent.unshift(persent_LINK_ONDO.toFixed(1));
  divLINK_ONDO_persent.pop();

  divLINK_ONDO.unshift(divisionResult_LINK_ONDO.toFixed(1));
  divLINK_ONDO.pop();
 

  ////////////  -------------------------------------------------------------------------------


  const divisionResult_ONDO_ADA = priceONDO / priceADA ;

  const base_ONDO_ADA = ONDO / ADA ;
  const persent_ONDO_ADA = (divisionResult_ONDO_ADA / base_ONDO_ADA - 1) * 100;

  divONDO_ADA_persent.unshift(persent_ONDO_ADA.toFixed(1));
  divONDO_ADA_persent.pop();

  divONDO_ADA.unshift(divisionResult_ONDO_ADA.toFixed(1));
  divONDO_ADA.pop();

  ///////////  ------------------------------------------------------------------------------

    
  const divisionResult_AVAX_ONDO = priceAVAX / priceONDO ;

  const base_AVAX_ONDO = AVAX / ONDO ;
  const persent_AVAX_ONDO = (divisionResult_AVAX_ONDO / base_AVAX_ONDO - 1) * 100;

  divAVAX_ONDO_persent.unshift(persent_AVAX_ONDO.toFixed(1));
  divAVAX_ONDO_persent.pop();

  divAVAX_ONDO.unshift(divisionResult_AVAX_ONDO.toFixed(1));
  divAVAX_ONDO.pop();
 

  ////////////  ----------------------------------------------------------------------------- 



  return (
    <div className="ml-70   mt-8  ">
      {priceXRP ? (
        <div>
          <p> XRP . . . . : : : : . . . . . (( {priceXRP} $ ))  {" "}  . .  . . . . . . .  . .  . .  .  Price_Buy . . .  . .  {XRP}   </p>
        </div>
      ) : (
        <p>Loading price...</p>
      )}

      {priceFLOKI ? (
        <div>
          <p> FLOKI . . : : : : . . . . . (( {priceFLOKI} $ )) {" "}  . .  . . . . . . .  . . . . .  Price_Buy . . . . . {FLOKI} </p>
        </div>
      ) : (
        <p>Loading price...</p>
      )}

      {priceDOGE ? (
              <div>
                <p> DOGE . . . . : : : : . . . (( {priceDOGE} $ ))  {" "}  . .  . . . . . .  .  . .  .  Price_Buy . . . . . . {DOGE}  </p>
              </div>
            ) : (
              <p>Loading price...</p>
            )}

      {priceDOGE ? (
              <div>
                <p> ARB . . . . : : : : . . . . . (( {priceARB} $ ))  {" "}  . .  . . . . . . .  . .  .  . .  Price_Buy . . . . {ARB}  </p>
              </div>
            ) : (
              <p>Loading price...</p>
            )}

      {priceLINK ? (
                    <div>
                      <p> LINK . . . . : : : : . . . . ((  {priceLINK} $ )) {" "}  . .  . . . . . . .  . .  .  Price_Buy .  . . . . {LINK}  </p>
                    </div>
                  ) : (
                    <p>Loading price...</p>
                  )}
    {priceNEAR ? (
                    <div>
                      <p> NEAR . . . . : : : : . . . . ((  {priceNEAR} $ )) {" "}  . .  . . . . . . .  . .  .  Price_Buy .  . . . . {NEAR}  </p>
                    </div>
                  ) : (
                    <p>Loading price...</p>
                  )}

    {priceONDO ? (
                    <div>
                      <p> ONDO . . . . : : : : . . . . ((  {priceONDO} $ )) {" "}  . .  . . . . . . .  . .  .  Price_Buy .  . . . . {ONDO}  </p>
                    </div>
                  ) : (
                    <p>Loading price...</p>
                  )}
 

        <div className=" flex flex-row ">
          <div className="ml-0  text-sm  mt-8 w-45 ">
            <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
              {" "}
              XRP/FLOKI{" "}
            </p>

            <h1 className=" flex flex-row text-sm ml-10 mt-2 ">
              {divXrp_floki[0]} {" "}
              {divXrp_floki_persent[0] > 0 ? (
                <p className="text-green-500 text-1xl ml-2 ">
                  (( % {divXrp_floki_persent[0]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_floki_persent[0]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row text-sm ml-10  ">
              {divXrp_floki[1]} {" "}
              {divXrp_floki_persent[1] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divXrp_floki_persent[1]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_floki_persent[1]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row text-sm ml-10  ">
                {divXrp_floki[2]}  {" "}
              {divXrp_floki_persent[2] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divXrp_floki_persent[2]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_floki_persent[2]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row text-sm ml-10  ">
              {divXrp_floki[3]}  {" "}
              {divXrp_floki_persent[3] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divXrp_floki_persent[3]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_floki_persent[3]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  text-sm ml-10 ">
                {divXrp_floki[4]}  {" "}
              {divXrp_floki_persent[4] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divXrp_floki_persent[4]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_floki_persent[4]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row text-sm ml-10  ">
              {divXrp_floki[5]} {" "}
              {divXrp_floki_persent[5] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divXrp_floki_persent[5]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_floki_persent[5]} ))
                </p>
              )}{" "}
            </h1>

          </div>

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
              DOGE/FLOKI{" "}
            </p>

            <h1 className=" flex flex-row  ml-10 mt-2 ">
              {divDog_Floki[0]} {" "}
              {divDoge_floki_persent[0] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divDoge_floki_persent[0]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divDoge_floki_persent[0]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
                {divDog_Floki[1]} {" "}
              {divDoge_floki_persent[1] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divDoge_floki_persent[1]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divDoge_floki_persent[1]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
              {divDog_Floki[2]} {" "}
              {divDoge_floki_persent[2] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divDoge_floki_persent[2]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divDoge_floki_persent[2]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
                {divDog_Floki[3]} {" "}
              {divDoge_floki_persent[3] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divDoge_floki_persent[3]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divDoge_floki_persent[3]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
              {divDog_Floki[4]} {" "}
              {divDoge_floki_persent[4] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divDoge_floki_persent[4]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divDoge_floki_persent[4]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10 ">
                {divDog_Floki[5]} {" "}
              {divDoge_floki_persent[5] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divDoge_floki_persent[5]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divDoge_floki_persent[5]} ))
                </p>
              )}{" "}
            </h1>
  

          </div>

          <div className="ml-0  text-sm   mt-8 w-45 ">
            <p className="  ml-10  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
              {" "}
              XRP/ARB{" "}
            </p>
            <h1 className=" flex flex-row  ml-10 mt-2 ">
              (( {divXrp_ARB[0]} )){" "}
              {divXrp_ARB_persent[0] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divXrp_ARB_persent[0]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_ARB_persent[0]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divXrp_ARB[1]} )){" "}
              {divXrp_ARB_persent[1] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divXrp_ARB_persent[1]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_ARB_persent[1]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divXrp_ARB[2]} )){" "}
              {divXrp_ARB_persent[2] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divXrp_ARB_persent[2]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_ARB_persent[2]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divXrp_ARB[3]} )){" "}
              {divXrp_ARB_persent[3] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divXrp_ARB_persent[3]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_ARB_persent[3]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10 ">
            (( {divXrp_ARB[4]} )){" "}
              {divXrp_ARB_persent[4] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divXrp_ARB_persent[4]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_ARB_persent[4]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divXrp_ARB[5]} )){" "}
              {divXrp_ARB_persent[5] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divXrp_ARB_persent[5]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divXrp_ARB_persent[5]} ))
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
            <p className="  ml-10  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
              {" "}
              ARB/FLOKI{" "}
            </p>

            <h1 className=" flex flex-row  ml-15 mt-2 ">
              (( {divARB_floki[0]} )){" "}
              {divARB_floki_persent[0] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_floki_persent[0]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_floki_persent[0]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-15  ">
            (( {divARB_floki[1]} )){" "}
              {divARB_floki_persent[1] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_floki_persent[1]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_floki_persent[1]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-15  ">
            (( {divARB_floki[2]} )){" "}
              {divARB_floki_persent[2] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_floki_persent[2]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_floki_persent[2]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-15  ">
            (( {divARB_floki[3]} )){" "}
              {divARB_floki_persent[3] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_floki_persent[3]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_floki_persent[3]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-15 ">
            (( {divARB_floki[4]} )){" "}
              {divARB_floki_persent[4] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_floki_persent[4]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_floki_persent[4]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-15  ">
            (( {divARB_floki[5]} )){" "}
              {divARB_floki_persent[5] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_floki_persent[5]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_floki_persent[5]} ))
                </p>
              )}{" "}
            </h1>

  
          </div>

    



        </div>

        <div className=" flex flex-row ">

          <div className="ml-0  text-sm  mt-8 w-45 ">
            <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
              {" "}
              LINK/FLOKI{" "}
            </p>
            <h1 className=" flex flex-row  ml-10 mt-2 ">
              (( {divLINK_floki[0]} )){" "}
              {divLINK_floki_persent[0] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_floki_persent[0]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_floki_persent[0]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_floki[1]} )){" "}
              {divLINK_floki_persent[1] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_floki_persent[1]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_floki_persent[1]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_floki[2]} )){" "}
              {divLINK_floki_persent[2] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_floki_persent[2]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_floki_persent[2]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_floki[3]} )){" "}
              {divLINK_floki_persent[3] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_floki_persent[3]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_floki_persent[3]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10 ">
            (( {divLINK_floki[4]} )){" "}
              {divLINK_floki_persent[4] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_floki_persent[4]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_floki_persent[4]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_floki[5]} )){" "}
              {divLINK_floki_persent[5] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_floki_persent[5]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_floki_persent[5]} ))
                </p>
              )}{" "}
            </h1>
  
          </div>

          <div className="ml-0  text-sm  mt-8 w-45 ">
            <p className="  ml-10  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
              {" "}
              ARB/DOGE {" "}
            </p>
            <h1 className=" flex flex-row  ml-15 mt-2 ">
              (( {divARB_Doge[0]} )){" "}
              {divARB_Doge_persent[0] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_Doge_persent[0]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_Doge_persent[0]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-15  ">
            (( {divARB_Doge[1]} )){" "}
              {divARB_Doge_persent[1] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_Doge_persent[1]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_Doge_persent[1]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-15  ">
            (( {divARB_Doge[2]} )){" "}
              {divARB_Doge_persent[2] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_Doge_persent[2]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_Doge_persent[2]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-15  ">
            (( {divARB_Doge[3]} )){" "}
              {divARB_Doge_persent[3] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_Doge_persent[3]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_Doge_persent[3]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-15 ">
            (( {divARB_Doge[4]} )){" "}
              {divARB_Doge_persent[4] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_Doge_persent[4]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_Doge_persent[4]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-15  ">
            (( {divARB_Doge[5]} )){" "}
              {divARB_Doge_persent[5] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divARB_Doge_persent[5]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divARB_Doge_persent[5]} ))
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
              LINK/ARB{" "}
            </p>
            <h1 className=" flex flex-row  ml-10 mt-2 ">
              (( {divLINK_ARB[0]} )){" "}
              {divLINK_ARB_persent[0] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ARB_persent[0]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ARB_persent[0]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_ARB[1]} )){" "}
              {divLINK_ARB_persent[1] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ARB_persent[1]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ARB_persent[1]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_ARB[2]} )){" "}
              {divLINK_ARB_persent[2] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ARB_persent[2]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ARB_persent[2]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_ARB[3]} )){" "}
              {divLINK_ARB_persent[3] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ARB_persent[3]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ARB_persent[3]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10 ">
            (( {divLINK_ARB[4]} )){" "}
              {divLINK_ARB_persent[4] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ARB_persent[4]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ARB_persent[4]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_ARB[5]} )){" "}
              {divLINK_ARB_persent[5] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ARB_persent[5]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ARB_persent[5]} ))
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
              TON/NEAR{" "}
            </p>
            <h1 className=" flex flex-row  ml-10 mt-2 ">
              (( {divTON_NEAR[0]} )){" "}
              {divTON_NEAR_persent[0] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divTON_NEAR_persent[0]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divTON_NEAR_persent[0]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divTON_NEAR[1]} )){" "}
              {divTON_NEAR_persent[1] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divTON_NEAR_persent[1]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divTON_NEAR_persent[1]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divTON_NEAR[2]} )){" "}
              {divTON_NEAR_persent[2] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divTON_NEAR_persent[2]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divTON_NEAR_persent[2]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divTON_NEAR[3]} )){" "}
              {divTON_NEAR_persent[3] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divTON_NEAR_persent[3]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divTON_NEAR_persent[3]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10 ">
            (( {divTON_NEAR[4]} )){" "}
              {divTON_NEAR_persent[4] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divTON_NEAR_persent[4]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divTON_NEAR_persent[4]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divTON_NEAR[5]} )){" "}
              {divTON_NEAR_persent[5] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divTON_NEAR_persent[5]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divTON_NEAR_persent[5]} ))
                </p>
              )}{" "}
            </h1>

  
          </div>

        </div>

        <div className=" flex flex-row " >
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
                  NEAR/ARB{" "}
                </p>
                <h1 className=" flex flex-row  ml-10 mt-2 ">
                  (( {divNear_ARB[0]} )){" "}
                  {divNear_ARB_persent[0] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ARB_persent[0]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ARB_persent[0]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divNear_ARB[1]} )){" "}
                  {divNear_ARB_persent[1] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ARB_persent[1]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ARB_persent[1]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divNear_ARB[2]} )){" "}
                  {divNear_ARB_persent[2] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ARB_persent[2]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ARB_persent[2]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divNear_ARB[3]} )){" "}
                  {divNear_ARB_persent[3] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ARB_persent[3]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ARB_persent[3]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10 ">
                (( {divNear_ARB[4]} )){" "}
                  {divNear_ARB_persent[4] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ARB_persent[4]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ARB_persent[4]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divNear_ARB[5]} )){" "}
                  {divNear_ARB_persent[5] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ARB_persent[5]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ARB_persent[5]} ))
                    </p>
                  )}{" "}
                </h1>

  
          </div>


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
                  NEAR/ONDO{" "}
                </p>
                <h1 className=" flex flex-row  ml-10 mt-2 ">
                  (( {divNear_ONDO[0]} )){" "}
                  {divNear_ONDO_persent[0] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ONDO_persent[0]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ONDO_persent[0]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divNear_ONDO[1]} )){" "}
                  {divNear_ONDO_persent[1] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ONDO_persent[1]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ONDO_persent[1]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divNear_ONDO[2]} )){" "}
                  {divNear_ONDO_persent[2] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ONDO_persent[2]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ONDO_persent[2]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divNear_ONDO[3]} )){" "}
                  {divNear_ONDO_persent[3] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ONDO_persent[3]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ONDO_persent[3]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10 ">
                (( {divNear_ONDO[4]} )){" "}
                  {divNear_ONDO_persent[4] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ONDO_persent[4]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ONDO_persent[4]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divNear_ONDO[5]} )){" "}
                  {divNear_ONDO_persent[5] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divNear_ONDO_persent[5]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divNear_ONDO_persent[5]} ))
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

        </div>

        <div className=" flex flex-row "   >
            <div className="ml-0  text-sm   mt-8 w-45 ">
              <p className="  ml-10  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
                {" "}
                XRP/ONDO{" "}
              </p>
              <h1 className=" flex flex-row  ml-10 mt-2 ">
                (( {divXrp_ONDO[0]} )){" "}
                {divXrp_ONDO_persent[0] > 0 ? (
                  <p className="text-green-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[0]} ))
                  </p>
                ) : (
                  <p className="text-red-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[0]} ))
                  </p>
                )}{" "}
              </h1>

              <h1 className=" flex flex-row  ml-10  ">
              (( {divXrp_ONDO[1]} )){" "}
                {divXrp_ONDO_persent[1] > 0 ? (
                  <p className="text-green-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[1]} ))
                  </p>
                ) : (
                  <p className="text-red-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[1]} ))
                  </p>
                )}{" "}
              </h1>

              <h1 className=" flex flex-row  ml-10  ">
              (( {divXrp_ONDO[2]} )){" "}
                {divXrp_ONDO_persent[2] > 0 ? (
                  <p className="text-green-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[2]} ))
                  </p>
                ) : (
                  <p className="text-red-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[2]} ))
                  </p>
                )}{" "}
              </h1>

              <h1 className=" flex flex-row  ml-10  ">
              (( {divXrp_ONDO[3]} )){" "}
                {divXrp_ONDO_persent[3] > 0 ? (
                  <p className="text-green-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[3]} ))
                  </p>
                ) : (
                  <p className="text-red-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[3]} ))
                  </p>
                )}{" "}
              </h1>

              <h1 className=" flex flex-row  ml-10 ">
              (( {divXrp_ONDO[4]} )){" "}
                {divXrp_ONDO_persent[4] > 0 ? (
                  <p className="text-green-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[4]} ))
                  </p>
                ) : (
                  <p className="text-red-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[4]} ))
                  </p>
                )}{" "}
              </h1>

              <h1 className=" flex flex-row  ml-10  ">
              (( {divXrp_ONDO[5]} )){" "}
                {divXrp_ONDO_persent[5] > 0 ? (
                  <p className="text-green-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[5]} ))
                  </p>
                ) : (
                  <p className="text-red-500  ml-2 ">
                    (( % {divXrp_ONDO_persent[5]} ))
                  </p>
                )}{" "}
              </h1>

    
            </div>

            <div className="ml-0  text-sm  mt-8 w-45 ">
                <p className="  ml-10  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
                  {" "}
                  ONDO/DOGE{" "}
                </p>
                <h1 className=" flex flex-row  ml-10 mt-2 ">
                  (( {divONDO_doge[0]} )){" "}
                  {divONDO_doge_persent[0] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_doge_persent[0]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_doge_persent[0]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_doge[1]} )){" "}
                  {divONDO_doge_persent[1] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_doge_persent[1]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_doge_persent[1]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_doge[2]} )){" "}
                  {divONDO_doge_persent[2] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_doge_persent[2]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_doge_persent[2]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_doge[3]} )){" "}
                  {divONDO_doge_persent[3] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_doge_persent[3]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_doge_persent[3]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10 ">
                (( {divONDO_doge[4]} )){" "}
                  {divONDO_doge_persent[4] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_doge_persent[4]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_doge_persent[4]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_doge[5]} )){" "}
                  {divONDO_doge_persent[5] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_doge_persent[5]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                        (( % {divONDO_doge_persent[5]} ))
                    </p>
                  )}{" "}
                </h1>

  
          </div>

          <div className="ml-0  text-sm  mt-8 w-45 ">
                <p className="  ml-10  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
                  {" "}
                  NEAR/ARB{" "}
                </p>
                <h1 className=" flex flex-row  ml-10 mt-2 ">
                  (( {divONDO_ARB[0]} )){" "}
                  {divONDO_ARB_persent[0] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ARB_persent[0]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_ARB_persent[0]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_ARB[1]} )){" "}
                  {divONDO_ARB_persent[1] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ARB_persent[1]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_ARB_persent[1]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_ARB[2]} )){" "}
                  {divONDO_ARB_persent[2] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ARB_persent[2]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_ARB_persent[2]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_ARB[3]} )){" "}
                  {divONDO_ARB_persent[3] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ARB_persent[3]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_ARB_persent[3]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10 ">
                (( {divONDO_ARB[4]} )){" "}
                  {divONDO_ARB_persent[4] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ARB_persent[4]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_ARB_persent[4]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_ARB[5]} )){" "}
                  {divONDO_ARB_persent[5] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ARB_persent[5]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                 (( % {divONDO_ARB_persent[5]} ))
                    </p>
                  )}{" "}
                </h1>

  
          </div>

          <div className="ml-0  text-sm  mt-8 w-45 ">
            <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
              {" "}
              LINK/ONDO{" "}
            </p>
            <h1 className=" flex flex-row  ml-10 mt-2 ">
              (( {divLINK_ONDO[0]} )){" "}
              {divLINK_ONDO_persent[0] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[0]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[0]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_ONDO[1]} )){" "}
              {divLINK_ONDO_persent[1] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[1]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[1]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_ONDO[2]} )){" "}
              {divLINK_ONDO_persent[2] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[2]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[2]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_ONDO[3]} )){" "}
              {divLINK_ONDO_persent[3] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[3]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[3]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10 ">
            (( {divLINK_ONDO[4]} )){" "}
              {divLINK_ONDO_persent[4] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[4]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[4]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_ONDO[5]} )){" "}
              {divLINK_ONDO_persent[5] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[5]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[5]} ))
                </p>
              )}{" "}
            </h1>

  
          </div>

          <div className="ml-0  text-sm  mt-8 w-45 ">
                <p className="  ml-10  bg-amber-400  flex flex-row justify-between border rounded-lg p-3 ">
                  {" "}
                  ONDO/ADA{" "}
                </p>
                <h1 className=" flex flex-row  ml-10 mt-2 ">
                  (( {divONDO_ADA[0]} )){" "}
                  {divONDO_ADA_persent[0] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ADA_persent[0]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_ADA_persent[0]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_ADA[1]} )){" "}
                  {divONDO_ADA_persent[1] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ADA_persent[1]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_ADA_persent[1]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_ADA[2]} )){" "}
                  {divONDO_ADA_persent[2] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ADA_persent[2]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_ADA_persent[2]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_ADA[3]} )){" "}
                  {divONDO_ADA_persent[3] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ADA_persent[3]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_ADA_persent[3]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10 ">
                (( {divONDO_ADA[4]} )){" "}
                  {divONDO_ADA_persent[4] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ADA_persent[4]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                      (( % {divONDO_ADA_persent[4]} ))
                    </p>
                  )}{" "}
                </h1>

                <h1 className=" flex flex-row  ml-10  ">
                (( {divONDO_ADA[5]} )){" "}
                  {divONDO_ADA_persent[5] > 0 ? (
                    <p className="text-green-500  ml-2 ">
                      (( % {divONDO_ADA_persent[5]} ))
                    </p>
                  ) : (
                    <p className="text-red-500  ml-2 ">
                        (( % {divONDO_ADA_persent[5]} ))
                    </p>
                  )}{" "}
                </h1>

  
          </div>

          <div className="ml-0  text-sm  mt-8 w-45 ">
            <p className="  ml-10  bg-blue-400  flex flex-row justify-between border rounded-lg p-3 ">
              {" "}
              AVAX/ONDO{" "}
            </p>
            <h1 className=" flex flex-row  ml-10 mt-2 ">
              (( {divAVAX_ONDO[0]} )){" "}
              {divAVAX_ONDO_persent[0] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divAVAX_ONDO_persent[0]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divAVAX_ONDO_persent[0]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divLINK_ONDO[1]} )){" "}
              {divLINK_ONDO_persent[1] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[1]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divLINK_ONDO_persent[1]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divAVAX_ONDO[2]} )){" "}
              {divAVAX_ONDO_persent[2] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divAVAX_ONDO_persent[2]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divAVAX_ONDO_persent[2]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divAVAX_ONDO[3]} )){" "}
              {divAVAX_ONDO_persent[3] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divAVAX_ONDO_persent[3]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divAVAX_ONDO_persent[3]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10 ">
            (( {divAVAX_ONDO[4]} )){" "}
              {divAVAX_ONDO_persent[4] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divAVAX_ONDO_persent[4]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divAVAX_ONDO_persent[4]} ))
                </p>
              )}{" "}
            </h1>

            <h1 className=" flex flex-row  ml-10  ">
            (( {divAVAX_ONDO[5]} )){" "}
              {divAVAX_ONDO_persent[5] > 0 ? (
                <p className="text-green-500  ml-2 ">
                  (( % {divAVAX_ONDO_persent[5]} ))
                </p>
              ) : (
                <p className="text-red-500  ml-2 ">
                  (( % {divAVAX_ONDO_persent[5]} ))
                </p>
              )}{" "}
            </h1>

  
          </div>
  
        </div>

      
    </div>
  );
};

export default CryptoPrice;
