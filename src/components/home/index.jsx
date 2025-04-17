import { useAuth } from "../../contexts/authcontext";
import React, { useEffect, useState } from "react";
import {  doc, getDoc  } from "firebase/firestore";
import { fireStoreDb } from "../../configuration/firebase-config";
 
import "./index.css";
import "./../../output.css";
import Sidebar from "../Sidebar";
import HomeMain from "./HomeMain/HomeMain";


const Home = ( ) => {
  

  const { currentUser } = useAuth(); 

  const [users, setUsers] = useState([]);

  const myEmail = currentUser.email;
  
  const getUserData = async () => {
    const docRef = doc(fireStoreDb, "users", myEmail);
    const docSnap = await getDoc(docRef);
    setUsers(docSnap.data());
     
  };
 
  useEffect(() => {
    getUserData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
    <div  class="isolate      bg-sky-950  " >
                   
                      <div  className="w-58 fixed sidebar  bg-sky-950" >
                          <Sidebar />

                      </div>
                    
            <div className=" ml-58 bg-gray-100 rounded-l-3xl">
             <h3    > ..</h3>
                    <div class="mt-1 ml-5">
                     
                      <HomeMain users={users} />
                 
                    </div>
                    
            </div>
           
           
      
    </div>
  

  );
};

export default Home;
