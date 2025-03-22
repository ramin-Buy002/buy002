 
import "./App.css";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { fireStoreDb } from "./configuration/firebase-config";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(fireStoreDb, "users"));
    setUsers(querySnapshot.docs.map((doc) => doc.data()));
  };

  // call the function
  fetchData()
    
    .catch(console.error);

  // useEffect(async () => {

  // }, []);

  return (
    <div  >
       
        
       <div  >

        <h1 >hello</h1>
        </div>
       <div>
        
       </div>

    
        <h1>Data from database:</h1>
        <ul>
          {users.map((item, index) => (
            <li key={index}>{item.email}</li>
          ))}
        </ul>
    
    </div>
  );
}

export default App;
