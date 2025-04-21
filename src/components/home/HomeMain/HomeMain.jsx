import React  from 'react'
import "./HomeMain.css"
import { useAuth } from '../../../contexts/authcontext';
import { FaSackDollar , FaListCheck , FaPeopleGroup } from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoIosArrowRoundUp } from "react-icons/io";
import {   CartesianGrid, Legend,  Line,  LineChart,  XAxis, YAxis } from 'recharts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { FaSquare } from "react-icons/fa";
import RecentOrder from '../recentOrder';

const HomeMain = ({users , sum_money , sum_count }) => {

     
    const date = new Date() ;
    const year = date.getFullYear() ;
    const month = date.getMonth() ;
    const day = date.getDay() ;

    const data01 = [
        {
          "name": "JAN",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "FEB",
          "uv": 3000,
          "pv": 1398
        },
        {
            "name": "MAR",
            "uv": 4000,
            "pv": 2400
          },
          {
            "name": "APR",
            "uv": 3000,
            "pv": 1398
          },
          {
            "name": "MAY",
            "uv": 4000,
            "pv": 2400
          },
          {
            "name": "JUN",
            "uv": 4000,
            "pv": 2400
          },
          {
            "name": "JUL",
            "uv": 3000,
            "pv": 1398
          },
        {
          "name": "AUG",
          "uv": 2000,
          "pv": 8200
        },
        {
          "name": "SEP",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "OCT",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "NOV",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "DEC",
          "uv": 3490,
          "pv": 4300
        }
      ];
      const data = [
        { label: 'Group A', value: 400, color: '#0088FE' },
        { label: 'Group B', value: 300, color: '#00C49F' },
        { label: 'Group C', value: 300, color: '#FFBB28' },
        { label: 'Group D', value: 200, color: '#FF8042' },
      ];
      
      const sizing = {
        margin: { right: 5 },
        width: 200,
        height: 200,
        hideLegend: true,
      };
      const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

      const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
      };


     const { currentUser } = useAuth(); 
  return (
   <div>
           <div className="headerWidget">
            <span  class="ml-4 h-8 mt-1"
              > date & time  :    {year} , {month} , {day} </span>
            
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

                    </div>
                <div className='icon'>
                    <TfiCommentAlt className='icon'  />
                </div>
                </div>
        
            </div>
            <div class="flex flex-row h-95"  >
                        <div class="  rounded-xl ml-4 mt-10 bg-white w-195   "  >
                            <span class=" mt-62   ml-90   "   >
                            Market Sales
                            </span>
                            <h1 class="text-white" >...</h1>
                            <div class=" mt-15   "    >
                            <LineChart width={700} height={340} data={data01}  marginTop={20}
                                    margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                   
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                        </div>
                        </div>
                        <div class="  rounded-xl mt-10 ml-5 bg-white w-120  "  >
                            <h2 class=" mt-40   ml-5   "   >
                              status orders
                            </h2>
                            <div  class='flex  flex-row mt-10    '  >
                            <PieChart
                                            series={[
                                                {
                                                outerRadius: 90,
                                                data,
                                                arcLabel: getArcLabel,
                                                },
                                            ]}
                                            sx={{
                                                [`& .${pieArcLabelClasses.root}`]: {
                                                fill: 'white',
                                                fontSize: 14,
                                                },
                                            }}
                                            {...sizing}
                                            />
                               
                                 
                            </div>
                            <div  className=' mt-5  ml-30' >  
                                    <div  className='flex'>     
                                        <FaSquare  className='circle01' />
                                    <h1   >shipment</h1>
                                </div>        
                                <div  className='flex'>     
                                        <FaSquare  className='circle02' />
                                    <h1>delivered</h1>
                                </div>    
                                <div  className='flex'>     
                                        <FaSquare  className='circle03' />
                                    <h1>pending</h1>
                                </div>  
                                <div  className='flex'>     
                                        <FaSquare  className='circle04' />
                                    <h1>canceled</h1>
                                </div>    
                                </div>
                                
                        </div>
            </div>
            <div>
              <RecentOrder />
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