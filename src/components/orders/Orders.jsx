import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import "./Orders.css";
import { collection, query, where, onSnapshot, doc, getDoc} from "firebase/firestore";
import { fireStoreDb } from "../../configuration/firebase-config";
import { useAuth } from "../../contexts/authcontext";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {  Link } from 'react-router-dom'


export default function Orders() {

  const paginationModel = { page: 0, pageSize: 8 };

  const { currentUser } = useAuth(); 
  
     
    const [myArray, setMyArray] = useState([]);
  

    const columns = [
      {
        field: "post_ID",
        headerName: "Offers",
        description: "all pcs offer.",
        width: 80,
        renderCell: (params)=>{
         const image = params.row.img
          return (
            <div>
               <img src={image} alt="profile_picture" className="userListImg" />
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
          // console.log("parameter_id :: " , parameter_id)
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

              let array = [];
              let id_offer = null ;
              let new_obj = {} ;
              
              const myEmail = currentUser.email;

              const docRef = doc(fireStoreDb, "users", myEmail);
              const docSnap = await getDoc(docRef);

              const uid = docSnap.data().owner_uid;

              const  offersRef = collection(fireStoreDb, "offers"); 

              const q =    query(offersRef, where("manufacturer" , "==" , uid ));
              
                          onSnapshot(q, (snapshot) => {

                              snapshot.docs.forEach((doc) => {

                                  id_offer = doc.id 
                                  let new_object = doc.data() ;
                                  let obj_01 = {id : id_offer  } ;
                                  console.log("id : id_offer " ,  id_offer ) ;

                                  const postRef = collection(fireStoreDb , "posts") ;

                                      if(id_offer){
                                    const qqqq = query(postRef ,   where("offer_01" , "==" , id_offer ))  
                                  
                                          onSnapshot(qqqq, (querySnapshot) => {
                                      
                                            querySnapshot.forEach((doc) => {

                                              console.log("id_offer  001 " , id_offer) ;
                                              console.log("post_id  001 " , doc.id) ;

                                              let obj_02 = {img: doc.data().imageUrl
                                              } ;
                
                                              new_obj = Object.assign(new_object , obj_01 , obj_02 ) ;

                                                  array =  [...array, new_obj] ;
                                              setMyArray(array) ;
                              })
                              })
                                              }
                                      if(id_offer){
                                        const qqqq = query(postRef ,   where("offer_02" , "==" , id_offer ))  
                                      
                                              onSnapshot(qqqq, (querySnapshot) => {
                                          
                                                querySnapshot.forEach((doc) => {
    
                                                  console.log("id_offer  002 " , id_offer) ;
                                                  console.log("post_id  002 " , doc.id) ;
    
                                                  let obj_02 = {img: doc.data().imageUrl
                                                  } ;
                    
                                                  new_obj = Object.assign(new_object , obj_01 , obj_02 ) ;
    
                                                      array =  [...array, new_obj] ;
                                                  setMyArray(array) ;
                                  })
                                  })
                                              }
                                      if(id_offer){
                                            const qqqq = query(postRef ,   where("offer_03" , "==" , id_offer ))  
                                          
                                                  onSnapshot(qqqq, (querySnapshot) => {
                                              
                                                    querySnapshot.forEach((doc) => {
        
                                                      console.log("id_offer  003 " , id_offer) ;
                                                      console.log("post_id  003 " , doc.id) ;
        
                                                      let obj_02 = {img: doc.data().imageUrl
                                                      } ;
                        
                                                      new_obj = Object.assign(new_object , obj_01 , obj_02 ) ;
        
                                                          array =  [...array, new_obj] ;
                                                      setMyArray(array) ;
                                      })
                                      })
                                              }
                              })})}
     
   // console.log("myArray" , myArray)

 
      
  useEffect(  () => {
      getUserData();
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   
  return (
    <div class="bg-sky-950  ">
      <div class="bg-white rounded-l-3xl ml-58 ">
        <h3>..</h3>
        <Paper sx={{ height: 700 , width: 1300, marginLeft: 3, marginTop: 2 }}>
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
