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
                  <div  class="flex flex-row absolute  right-35  mt-2   ml-12   ">

                       <h2  className="text-white  mr-3  mt-2 font-semibold"   >{username}</h2>
                       <img src={profile_pic} alt="profile_picture" className="w-11 h-10 object-cover  rounded-2xl " />
                       <div className="iconLan"  >
                        <FaBell  />
                             

                          </div>
                          <div className="iconLan"  >
                     
                              <FaLanguage />

                          </div>
                         
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
              <Route exact path="/orders/offers/:userId" element={<Offers />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
