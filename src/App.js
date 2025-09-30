import React, { useEffect, useState }  from "react";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import {   HashRouter, Route, Routes } from "react-router-dom";
import Orders from "./components/orders/Orders";
import Home from "./components/home/index";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./contexts/authcontext";
import Offers from "./components/Offers/Offers";
import {    doc, getDoc  } from "firebase/firestore";
import { fireStoreDb } from "./configuration/firebase-config";
import { FaLanguage  , FaBell} from "react-icons/fa";
import AddPostSale from "./components/addPostSale/AddPostSale";
import Crypto from "./components/crypto/Crypto";
import Trade from "./components/trade_coin/Trade";


function App() {

 

  const { currentUser } = useAuth(); 
  const [profile_pic , setProfile_pic] = useState(null)
  const [username , setUsername] = useState(null)
 

       const getUserData = async () => {
    
       const myEmail = currentUser.email;
 
       const docRef = doc(fireStoreDb, "users", myEmail);
       const docSnap = await getDoc(docRef);

       setProfile_pic(docSnap.data().profile_picture) ;
    
       setUsername(docSnap.data().username);
         

                                 
    }; 

   useEffect(  () => {
       getUserData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

  return (
    <div>
      <HashRouter>
        <div className="  relative  ">
          <div>
   
            <div  class="relative" >   
              {currentUser ? (
                <div class="    sticky top-0    bg-sky-950 w-full h-14 ">
                  <div  class="flex flex-row absolute  right-15  mt-2       ">
   
                         <div className="iconLan"  >
                              <FaLanguage />
                          </div>
                    
                         <div className="iconLan"  >
                                 <FaBell  />
                          </div>
                       
                           <h2  className="text-white  mr-3 ml-4 mt-3 font-semibold  text-sm "   >{username}</h2>

                           <img src={profile_pic} alt="profile_picture" className="w-9 h-10 mb-0 object-cover ml-1  rounded-2xl " />
                  </div>
                </div>
              ) : (
                <div> .. </div>
              )}
            </div>


            <div>
              {currentUser ? (
                <div className="w-58 fixed sidebar  bg-sky-950">
                  <Sidebar />
                </div>
              ) : (
                <div> </div>
              )}
            </div>

            <Routes>
            
              <Route exact path="*" element={<Home />} />
              <Route exact path="/" element={<Login />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/orders" element={<Orders />} /> 
              <Route exact path="/crypto" element={<Crypto />} /> 
              <Route exact path="/Trade" element={<Trade />} /> 
              <Route exact path="/addPostSale" element={<AddPostSale />} /> 
              <Route exact path="/orders/offers/:userId" element={<Offers />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
