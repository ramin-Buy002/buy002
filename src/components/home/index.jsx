import { useAuth } from "../../contexts/authcontext";
import React, { useEffect, useState } from "react";
import {  collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { firebaseApp, fireStoreDb } from "../../configuration/firebase-config";
import {  useNavigate } from "react-router-dom";
import { doSignOut } from "../../configuration/auth";
import "./index.css";
import "./../../output.css";
import Sidebar from "../Sidebar";
import { getAuth } from "firebase/auth";
import HomeMain from "./HomeMain/HomeMain";


const Home = ({ value }) => {
  

  const { currentUser } = useAuth(); 

  const [users, setUsers] = useState([]);
  const [users01, setUsers01] = useState([]);


  const auth = getAuth(firebaseApp);
   console.log("1111" , auth)
  

  const myEmail = currentUser.email;
  
  
   
 

    // Create a query against the collection.
  //  const q = query(citiesRef, where("state", "==", "CA"));

  //  const querySnapshot = await getDocs(q);

 //   querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
  //    console.log( " => ", doc.data());
  //  });
   // console.log("04" , querySnapshot ) ;


  



  const getUserData = async () => {
    const docRef = doc(fireStoreDb, "users", myEmail);
    const docSnap = await getDoc(docRef);
    setUsers(docSnap.data());
     
  };
 
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div  class="isolate   bg-sky-950  " >
           
                      <div  className="w-58 fixed sidebar  bg-sky-950" >
                          <Sidebar />

                      </div>
                    
            <div className=" ml-58 bg-gray-100 rounded-l-3xl">
             <h3    > </h3>
                    <div class="mt-1 ml-5">
                     
                      <HomeMain users={users} />
                 
                    </div>
                    
            </div>
           
           
      
    </div>
  

  );
};

export default Home;
