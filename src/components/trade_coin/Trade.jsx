import React, { useState, useEffect } from "react";

const CryptoPrice = () => {



  const [dataCoins, setDataCoins] = useState( [
    { nameCoin : "XRP"   , first_pcs : 10 , now_pcs : 11 , firstPrice : 2.8903 ,  nowPrice : 0 , buy_sell_price : 3.0454  },
    { nameCoin : "DOGE"  , first_pcs : 0 , now_pcs : 0 , firstPrice : 0.2334 ,  nowPrice : 0 , buy_sell_price : 0.25562 }, 
    { nameCoin : "ADA"   , first_pcs : 0 , now_pcs : 0 , firstPrice : 0.8067 ,  nowPrice : 0 , buy_sell_price : 0.8708 },
    { nameCoin : "LINK"  , first_pcs : 0 , now_pcs : 0 , firstPrice : 21.5405 ,  nowPrice : 0 , buy_sell_price : 22.31 },
    { nameCoin : "NEAR"  , first_pcs : 0 , now_pcs : 0 , firstPrice : 2.9705  ,  nowPrice : 0 , buy_sell_price : 3.053 },
    { nameCoin : "AVAX"  , first_pcs : 0 , now_pcs : 0 , firstPrice : 30.7806 ,  nowPrice : 0 , buy_sell_price : 30.24 },
    { nameCoin : "HYPE"  , first_pcs : 0 , now_pcs : 0 , firstPrice : 46.4060  ,  nowPrice : 0 , buy_sell_price : 50.01 } 
         ] ) ;

  
  const [ hi_percent_coin , setHi_percent_coin ] = useState([]) ;

  const [results, setResults] = useState([]);

  const [ a , setA ] = useState([]);
  const [ b , setB ] = useState([]);
  const [ c , setC ] = useState([]);
  const [ d , setD ] = useState([]);



  const symbols = {
    XRP: "XRPUSDT",
    DOGE: "DOGEUSDT",
    ADA: "ADAUSDT",
    LINK: "LINKUSDT",
    NEAR: "NEARUSDT",
    AVAX: "AVAXUSDT",
  };


  const PercentageCalculation = (coins) => {

     const Culcu = (( A_price , B_price , A_buy_sell_price , B_buy_sell_price ) =>{
 
      
        const  Result_Percent =     ( (  ( A_price / A_buy_sell_price ) / ( B_price / B_buy_sell_price ) ) - 1 ) * 100   ;

      return Result_Percent ; 
          
     })

    const Data_percent = [];

    coins.forEach((a, i) => {
      coins.forEach((b, j) => {



        const A_price = a.nowPrice ;
        const B_price = b.nowPrice ;
        
        const A_buy_sell_price = a.buy_sell_price ;
        const B_buy_sell_price = b.buy_sell_price ;

       const Percent =  Culcu ( A_price , B_price , A_buy_sell_price , B_buy_sell_price ) ;


        if (j > i && b.nowPrice !== 0) {

          Data_percent.push({
            label: `${a.nameCoin} / ${b.nameCoin}`,
            coin_name_01: a.nameCoin,
            coin_name_02: b.nameCoin,
            percent: Percent ,
          });
        }
      });
    });

    Data_percent.sort((a, b) => Math.abs(b.percent) - Math.abs(a.percent));

    setResults(Data_percent);
    const filtered = Data_percent.filter(item => Math.abs(item.percent) > 2);
 
    const maxItem = filtered.reduce((max, item) => 
      Math.abs(item.percent) > Math.abs(max.percent) ? item : max
    , filtered[0]);
      
    setHi_percent_coin(maxItem) ;

      console.log("hi_percent_coin" , hi_percent_coin.coin_name_01 , hi_percent_coin.coin_name_02)  ;
    
  };

  const A_B_C_D  = () => {
    const totalFirstValue = dataCoins.reduce((sum, coin) => {
      return sum + (coin.first_pcs * coin.firstPrice);
    }, 0);

    setA(totalFirstValue.toFixed(2)) ;

    const totalNowValue = dataCoins.reduce((sum, coin) => {
      return sum + (coin.now_pcs * coin.nowPrice);
    }, 0);

    setB(totalNowValue.toFixed(2)) ;
    
    const totalWithoutTradeValue = dataCoins.reduce((sum, coin) => {
      return sum + (coin.first_pcs * coin.nowPrice);
    }, 0);

    setC(totalWithoutTradeValue.toFixed(2)) ;
  
    const totalInitialValue = dataCoins.reduce((sum, coin) => {
      return sum + (coin.now_pcs * coin.firstPrice);
    }, 0);

    setD(totalInitialValue.toFixed(2)) ;


  }


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
    A_B_C_D();
    const intervalId = setInterval(fetchPrice, 10000);
    return () => clearInterval(intervalId);
  }, [dataCoins]);

  console.log("Results :: " , results ) ; 
  console.log("Coin_DATA :: " , dataCoins ) ; 



  return (
    <div className="ml-30   mt-8  ">
      
      <div className=" flex  flex-row      ">
        <div className="ml-55   ">

          <h1>The best for trading</h1>

          

          <ul>

            {results.map((r, index) => (

              <div className="flex flex_row">

                  <div   >
                    
                        <p className="  ml-2  mt-2  bg-blue-200  justify-between border rounded-lg p-3   "  key={index}>{r.label}</p>
                   
                  </div>

                  <div className="mt-5 ml-5  text-red-200 " >
                      
                          <p className=    " ml-5 " >
                            {r.percent.toFixed(2)}%
                          </p>


                  </div>

                 

              <div>

        </div>

        </div>

            ))}
             </ul>
          
          </div>


              
         
        
 
                <div className="ml-30    ">
                      <div >

                      <ul>

            {dataCoins.map((r, index) => (

              <div className="flex flex_row ml-12 ">

                  <div  >
                    
                  <p
                                key={index}
                                className="ml-2 mt-2 bg-blue-50 flex justify-between border rounded-lg p-3 w-[680px]"
                              >
                                <span className="text-emerald-950 font-bold ml-3 ">{r.nameCoin}</span>

                                <span  className="ml-6">
                                 now_price {"   "} : {"   " } <span  className=" font-bold "> {r.nowPrice}  </span> <span className="text-gray-500">$</span>
                                </span>

                                <span className="ml-8 " >now_pcs {"  "}: <span  className=" font-bold ">  {r.now_pcs}</span> </span>

                                <span  className="ml-8 " >first_Price {"  "} : <span  className=" font-bold ">  {r.firstPrice}</span></span>
                                <span className="ml-8 " >first_pcs {"  "}: <span  className=" font-bold ">  {r.first_pcs}</span> </span>


                                <span  className="ml-8   mr-9 " >buy_sell_price {"  "} : <span  className=" font-bold ">  {r.buy_sell_price}</span></span>

                              </p>

                   
                  </div>
               
  

        </div>

            ))}
          </ul>

          
          </div>
              <div  className=" flex flex-row " >
                <div  className="  mt-10  ml-10"  >
                      <p   >
                                  <span className="     text-2xl "  >  A =   </span> 
                                  <span   className="     text-2xl "  > ∑ </span>
                                  <span   className="     text-1xl "  > ( price_first * pcs_first  )  =  </span>
                                  <span   className="    ml-3  text-2xl  " >  {a} {"   "} $ </span>
                      </p>

                      <p  className="  mt-3 " >
                                  <span className="     text-2xl "  >   B =   </span> 
                                  <span   className="     text-2xl "  > ∑ </span>
                                  <span   className="     text-1xl "  > ( price_now * pcs_now  )  =  </span>
                                  <span className=" ml-3   text-2xl  "  >  {b} {"   "} $ </span>
                      </p>

                      <p className="  mt-3 " >
                                  <span className="     text-2xl "  >   C =   </span> 
                                  <span   className="     text-2xl "  > ∑ </span>
                                  <span   className="     text-1xl "  > ( price_now * pcs_first  )  =  </span>
                                  <span className=" ml-3    text-2xl  " >  {c} {"   "} $ </span>

                      </p>
                      <p  className="  mt-3 " >
                                    <span className="     text-2xl "  >  D =   </span> 
                                    <span   className="     text-2xl "  > ∑ </span>
                                    <span   className="     text-1xl "  > ( price_first * pcs_now  )  =  </span>
                                    <span className=" ml-3   text-2xl  " > {d} {"   "} $ </span>

                       </p>
                </div>
      
                <div className=" ml-60  mt-10 "  >

                        <h1 className=" font-bold text-2xl " > List ( Buy & Sell )</h1>
                        <h1  className=" text-blue-200  mt-5 ml-5 text-xl "  >  <span >   Sell {"  "} : </span>  
                        <span className=" ml-5 "  >   {hi_percent_coin.coin_name_01   } </span>    </h1>

                        <h1 className=" ml-5  text-xl " >  <span>   Buy  {"   "} :      </span>  
                        <span className=" ml-5 "  >   {hi_percent_coin.coin_name_02   } </span>    </h1>

                        </div>

                 </div>
               
         </div>

      </div>
    </div>
  );
}


export default CryptoPrice;

