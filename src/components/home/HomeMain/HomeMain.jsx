import React from 'react'
import "./HomeMain.css"
import { useAuth } from '../../../contexts/authcontext';
import { FaSackDollar , FaListCheck} from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";
import { BsBasket } from "react-icons/bs";
import { IoIosArrowRoundUp } from "react-icons/io";

const HomeMain = ({users}) => {

     const { currentUser } = useAuth(); 
     console.log("eee" , users.owner_uid)
  return (
   <div>
           <div className="headerWidget">
            <h1  class="ml-4 h-8 mt-1"
              >Date & Time : {" "} Wednesday, April 2, 2025</h1>
           </div>
       <div className='widget' >

               

                <div className='widgetRow'>
                    <div className="widgetItem">
                        <span className="widgetTitle">Revenue</span>
                        <div className="widgetMoneyContainer">
                            <span className="widgetMoney">$ 33.2</span>
                            <div className='icon01' >
                                <IoIosArrowRoundUp     />
                            </div>
                            <span className="widgetMoneyRate">

                            </span>
                        </div>
                        <span className="widgetSub">$ 33.2</span>
                        <span>rrr</span>
                    </div>
            
                    
                <div className='icon'>
                   
                    <FaSackDollar className='icon'  />
                </div>
                </div>



                <div className='widgetRow01'>
                    <div className="widgetItem">
                        <span className="widgetTitle">Orders Received</span>
                        <div className="widgetMoneyContainer">
                            <span className="widgetMoney">$ 33.2</span>
                            <span className="widgetMoneyRate">
                            <div className='icon01' >
                                <IoIosArrowRoundUp     />
                            </div>
                            </span>
                        </div>
                        <span className="widgetSub">$ 33.2</span>
                        <span>rrr</span>
                    </div>
                <div className='icon'>
                    < FaListCheck className='icon'  />
                </div>
                </div>
                
                <div className='widgetRow02'>
                    <div className="widgetItem">
                        <span className="widgetTitle">Total Sales</span>
                        <div className="widgetMoneyContainer">
                            <span className="widgetMoney">$ 33.2</span>
                            <span className="widgetMoneyRate">
                            <div className='icon01' >
                                <IoIosArrowRoundUp     />
                            </div>
                            </span>
                        </div>
                        <span className="widgetSub">$ 33.2</span>
                        <span>rrr</span>
                    </div>
                <div className='icon'>
                    <  BsBasket  className='icon'  />
                </div>
                </div>

                <div className='widgetRow03'>
                    <div className="widgetItem">
                        <span className="widgetTitle">Total Comment</span>
                        <div className="widgetMoneyContainer">
                            <span className="widgetMoney">$ 33.2</span>
                            <span className="widgetMoneyRate">
                            <div className='icon01' >
                                <IoIosArrowRoundUp     />
                            </div>
                            </span>
                        </div>
                        <span className="widgetSub">$ 33.2</span>
                        <span>rrr</span>
                    </div>
                <div className='icon'>
                    <TfiCommentAlt className='icon'  />
                </div>
                </div>
        
            </div>
            <div class="flex flex-row ..."  >
                        <div class="  rounded-xl ml-4 mt-10 bg-white w-195 h-100 "  >
                            <span class=" mt-60   ml-70   "   >
                            Market Sales
                            </span>
                        </div>
                        <div class="  rounded-xl mt-10 ml-5 bg-white w-120 h-100 "  >
                            <span class=" mt-60   ml-45   "   >
                            Sales Per Day
                            </span>
                        </div>
            </div>
            <div style={{marginTop:270}} >
            <h1></h1>
            </div>
            {currentUser.displayName
             ? currentUser.displayName
             : currentUser.email}
           username : {users.username}  
           <div>
           owner_uid : {users.owner_uid}    
           </div> 
           
    </div>        
  )
}

export default HomeMain