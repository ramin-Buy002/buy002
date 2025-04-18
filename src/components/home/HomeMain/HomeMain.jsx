import React from 'react'
import "./HomeMain.css"
import { useAuth } from '../../../contexts/authcontext';
import { FaSackDollar , FaListCheck , FaPeopleGroup } from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoIosArrowRoundUp } from "react-icons/io";
import {   CartesianGrid, Legend,  Line,  LineChart,  XAxis, YAxis } from 'recharts';
 

const HomeMain = ({users , sum_money , sum_count }) => {


    const data = [
        {
          "name": "jun",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "feb",
          "uv": 3000,
          "pv": 1398
        },
        {
            "name": "mar",
            "uv": 4000,
            "pv": 2400
          },
          {
            "name": "des",
            "uv": 3000,
            "pv": 1398
          },
          {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
          },
          {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
          },
          {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
          },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ];
      
     const { currentUser } = useAuth(); 
  return (
   <div>
           <div className="headerWidget">
            <h1  class="ml-4 h-8 mt-1"
              >Date & Time : {" "} Wednesday, April 2, 2025</h1>
           </div>
       <div className='widget' >

               

                <div className='widgetRow'>
                    <div className="widgetItem">
                        <span className="widgetTitle">Total sales</span>
                        <div className="widgetMoneyContainer">
                            <span className="widgetMoney">$ {sum_money} </span>
                            <div className='icon01' >
                                <IoIosArrowRoundUp     />
                            </div>
                            <span className="widgetMoneyRate">

                            </span>
                        </div>
                        <span className="widgetSub">$ ....</span>
                        <span>...</span>
                    </div>
            
                    
                <div className='icon'>
                   
                    <FaSackDollar className='icon'  />
                </div>
                </div>



                <div className='widgetRow01'>
                    <div className="widgetItem">
                        <span className="widgetTitle">Orders Received</span>
                        <div className="widgetMoneyContainer">
                            <span className="widgetMoney">{sum_count}   pcs</span>
                            <span className="widgetMoneyRate">
                            <div className='icon01' >
                                <IoIosArrowRoundUp     />
                            </div>
                            </span>
                        </div>
                        <span className="widgetSub">....</span>
                        <span>....</span>
                    </div>
                <div className='icon'>
                    < FaListCheck className='icon'  />
                </div>
                </div>
                
                <div className='widgetRow02'>
                    <div className="widgetItem">
                        <span className="widgetTitle">Helper sale</span>
                        <div className="widgetMoneyContainer">
                            <span className="helperSale">640 people</span>
                            <span className="widgetMoneyRate">
                            <div className='icon01' >
                                <IoIosArrowRoundUp     />
                            </div>
                            </span>
                        </div>
                        <span className="widgetSub"> ...</span>
                        <span>.....</span>
                    </div>
                <div className='icon'>
                    < FaPeopleGroup   className='iconPeople'  />
                </div>
                </div>

                <div className='widgetRow03'>
                    <div className="widgetItem">
                        <span className="widgetTitle">Total Comment</span>
                        <div className="widgetMoneyContainer">
                            <span className="widgetMoney">560 text</span>
                            <span className="widgetMoneyRate">
                            <div className='icon01' >
                                <IoIosArrowRoundUp     />
                            </div>
                            </span>
                        </div>
                        <span className="widgetSub">....</span>
                        <span>...</span>
                    </div>
                <div className='icon'>
                    <TfiCommentAlt className='icon'  />
                </div>
                </div>
        
            </div>
            <div class="flex flex-row ..."  >
                        <div class="  rounded-xl ml-4 mt-10 bg-white w-195 h-110 "  >
                            <span class=" mt-60   ml-70   "   >
                            Market Sales
                            </span>
                            <LineChart width={750} height={400} data={data}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                   
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                        </div>
                        <div class="  rounded-xl mt-10 ml-5 bg-white w-120 h-110 "  >
                            <span class=" mt-60   ml-45   "   >
                            Sales Per Day
                            </span>
                        </div>
            </div>
            <div style={{marginTop:270}} >
            <h1>...</h1>
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