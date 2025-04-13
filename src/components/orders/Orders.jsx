import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import "./Orders.css";
import { collection, query, where, onSnapshot, doc, getDoc } from "firebase/firestore";
import { fireStoreDb } from "../../configuration/firebase-config";
import { useAuth } from "../../contexts/authcontext";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {  Link } from 'react-router-dom'


export default function Orders() {

  const paginationModel = { page: 0, pageSize: 5 };

  const { currentUser } = useAuth(); 
  
     
    const [myArray, setMyArray] = useState([]);
    const [post_ID, setPost_ID] = useState([]);
    const [picPost, setPicPost] = useState(null);

    const columns = [
      {
        field: "post_ID",
        headerName: "Offers",
        description: "all pcs offer.",
        width: 80,
        renderCell: (params)=>{
         
          return (
            <div>
               <img src={picPost} alt="profile_picture" className="userListImg" />
            </div>
          )
        }
      },
      {
        field: "id",
        headerName: "Offer_ID",
        description: "all pcs offer.",
        width:160,
      },{
        field: "Price",
        headerName: "Price",
        description: "all pcs offer.",
        width: 60,
        renderCell: (params)=>{
          const price = params.row.Price
           
          return (
            <div>
               <h2 class="text-red-500" > {price} $ </h2>
            </div>
          )
        }
      },   {
        field: "status",
        headerName: "status",
        description: "all pcs offer.",
        width: 70,
      }, {
        field: "total_pcs",
        headerName: "total_pcs",
        description: "all pcs offer.",
        width: 80,
      },{
        field: "PercentSold",
        headerName: "Percent Sold",
        description: "all pcs offer.",
        width: 120,
      },{
        field: "numberOrders",
        headerName: "Number_Orders",
        description: "all pcs offer.",
        width: 150,
   //     valueGetter: (value, row) => `${row.id || ""} ${row.Price || ""}`,
      },{
        field: "created_At",
        headerName: "Created_At",
        description: "all pcs offer.",
        width: 180,
        renderCell: (params)=>{
          const new_date = params.row.created_At
          const date = new Date(new_date.seconds  * 1000);
           
          return (
            <div>
               <h2> {date.toDateString()} </h2>
            </div>
          )
        }
      }, {
        field: "action",
        headerName: "View",
        description: "all pcs offer.",
        width: 130,
        renderCell: (params)=>{
           const parameter_id = params.row.id
           console.log("parameter_id :: " , parameter_id)
          return ( 
            <div     >
                   <Stack spacing={2} direction="row">
                        <Link to={`/orders/offers/${parameter_id}`} >
                            <Button     variant="contained">   view   </Button>
                        </Link>
                  </Stack>
                
                 
            </div>
          )
        }
      }
    ];
    
      const rows = myArray  


    
      const getUserData = async () => {

      const myEmail = currentUser.email;

      const docRef = doc(fireStoreDb, "users", myEmail);
      const docSnap = await getDoc(docRef);

      const uid = docSnap.data().owner_uid;

      const  offersRef = collection(fireStoreDb, "offers"); 
      const  ppostsRef = collection(fireStoreDb, "posts"); 

      const q = query(offersRef, where("manufacturer" , "==" , uid ));
      onSnapshot(q, (snapshot) => {
        let array = [];
 
       snapshot.docs.forEach((doc) => {
          array.push({...doc.data() , id: doc.id})
      
       console.log("array_post_ID" , array[0].post_ID    ) ;
      setPost_ID( array[0].post_ID );
      setMyArray(array)
      }) })
    
      const qqq = query(ppostsRef,  post_ID );

      onSnapshot(qqq, (snapshot) => {
      
      snapshot.docs.forEach((doc) => {

      setPicPost(doc.data().imageUrl)
      console.log( "doc.data().imageUrl" , doc.data() );
      }) })
      
    
    };
      
  useEffect(  () => {
      getUserData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   
  return (
    <div class="bg-sky-950  ">
      <div class="bg-white rounded-l-3xl ml-58 ">
        <h3>..</h3>
        <Paper sx={{ height: 800, width: 1300, marginLeft: 3, marginTop: 2 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            disableRowSelectionOnClick
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </div>
     
    </div>
  );
}
