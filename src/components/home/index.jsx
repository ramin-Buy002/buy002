import { useAuth } from "../../contexts/authcontext";
import React, { useEffect, useState } from "react";
import {   collection, doc, getDoc, onSnapshot, query, where  } from "firebase/firestore";
import { fireStoreDb } from "../../configuration/firebase-config";
import "./index.css";
import "./../../output.css";
import Sidebar from "../Sidebar";
import HomeMain from "./HomeMain/HomeMain";


const Home = ( ) => {
  

  const { currentUser } = useAuth(); 
  let array_myOffers = [];
  let array_price  = [];
  let array_count  = [];


  const [users, setUsers] = useState([]);
  const [sum_money , setSum_money] = useState(null) ;
  const [sum_count , setSum_count] = useState(null) ;

  const myEmail = currentUser.email;
  
  const getUserData = async () => {
    const docRef = doc(fireStoreDb, "users", myEmail);
    const docSnap = await getDoc(docRef);
    setUsers(docSnap.data());
        
           const uid = docSnap.data().owner_uid;
            
           const  offersRef = collection(fireStoreDb, "offers"); 
          const q = query(offersRef, where("manufacturer" , "==" , uid ));
          onSnapshot(q, (querySnapshot) => {
                          
                                querySnapshot.forEach((doc_01) => {
                          
                                  let obj_01 =  doc_01.id  ;
                                  let price = doc_01.data().Price
                                  array_myOffers =[...array_myOffers, obj_01]
    
     
                                            onSnapshot(collection(doc(fireStoreDb, "offers", obj_01), "orders"), (snapshot) => {
                                                        
                                                snapshot.docs.forEach((doc)=> {
                                                  let Count = doc.data().count ;
                                                    let  sale = Count * price ; 
                                                    array_price.push(sale)
                                                    array_count.push(Count)
                                                    
                                                  
                                              })
    
                                          let sum = array_price.reduce( (acc,e ) => acc + e , 0) ;
                                          setSum_money(sum) ;

                                          let sum01 = array_count.reduce( (acc,e ) => acc + e , 0) ;
                                          setSum_count(sum01) ;
                                            })
                                          })
                                          })
     
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
                     
                      <HomeMain users={users}  sum_money= {sum_money}   sum_count = {sum_count} />
                 
                    </div>
                    
            </div>
           
           
      
    </div>
  

  );
};

export default Home;
