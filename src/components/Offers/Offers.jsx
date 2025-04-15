 
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import "./Offers.css";
import { collection, query, where, onSnapshot, doc } from "firebase/firestore";
import { fireStoreDb } from "../../configuration/firebase-config";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
 



const Offers = () => {

   const para = useParams();
  
   const offer_id = para.userId ;
 

   const paginationModel = { page: 0, pageSize: 5 };

    const [new_Array_row, setNew_Array_row] = useState([]);
    const [render, setRender] = useState(0);
   
  
    const columns = [
     {
        field: "id",
        headerName: "Offer_ID",
        description: "all pcs offer.",
        width:100,
      }, {
        field: "customer_id",
        headerName: "customer_id",
        description: "all pcs offer.",
        width: 170,
      },{
        field: "pic_profile",
        headerName: "pic_profile",
        description: "all pcs offer.",
        width: 80,
        renderCell: (params)=>{
         
          return (
            <div>
               <img src={params.row.profile_picture} alt="profile_picture" className="userListImg" />
            </div>
          )
        }
      },
       {
        field: "username_01",
        headerName: "username_01",
        description: "all pcs offer.",
        width: 100,
    
      },{
        field: "Price",
        headerName: "Price",
        description: "all pcs offer.",
        width: 60,
      },   {
        field: "status",
        headerName: "status",
        description: "all pcs offer.",
        width: 70,
      }, {
        field: "total_pcs",
        headerName: "total_pcs",
        description: "all pcs offer.",
        width: 100,
      },{
        field: "count",
        headerName: "count",
        description: "all pcs offer.",
        width: 120,
      },{
        field: "numberOrders",
        headerName: "Number_Orders",
        description: "all pcs offer.",
        width: 150,
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
          return ( 
            <div     >
                   <Stack spacing={2} direction="row">
                        <Link to={`/orders/offers/${parameter_id}`} >
                            <Button     variant="contained">   details   </Button>
                        </Link>
                  </Stack>
                                 
            </div>
          )
        }
      }
    ];
    
    const rows = new_Array_row
    console.log("new_Array_row : " , new_Array_row) ;
    
      const getUserData = async () => {

       let new_array_orders = [] ;
       let customer_ID = null ;
       let new_obj_01 = null ;
       console.log("render 1 :::" , render)
       
          const docRef_offer = doc(fireStoreDb, "offers", offer_id);
          onSnapshot(collection(docRef_offer, "orders"), (snapshot) => {
    
            snapshot.docs.forEach((doc)=> {
                   
                      let new_object = doc.data() ;
                      customer_ID = doc.data().customer_id ;
                 
                      const usersRef = collection(fireStoreDb , "users") ;
                      const qqqq = query(usersRef , where("owner_uid" , "==" , customer_ID )) ;
                    
                        onSnapshot(qqqq, (querySnapshot) => {
                      
                        querySnapshot.forEach((doc) => {
                   
                          let obj_01 = {username_01 : doc.data().username } ;
                          let obj_02 = {id :doc.id   } ;
                          let obj_03 = {profile_picture : doc.data().profile_picture } ;


                           new_obj_01 = Object.assign(new_object, obj_01, obj_02 , obj_03 );
                           
                          new_array_orders.push(new_obj_01);
                      //  setRender(1) 

                })
               setNew_Array_row(new_array_orders);
              }) 
             setRender(2) 
            } ) 
            setRender(3) 
       
              })
              
    };
    console.log("render 3 :::" , render)
    
    useEffect(  () => {
      getUserData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
       }, [render]);

  return (
    <div class="bg-sky-950  ">
      <div class="bg-white rounded-l-3xl ml-58 ">
        <h3>...</h3>
   
        <Paper sx={{ height: 800, width: 1300, marginLeft: 3, marginTop: 2 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{ border: 0 }}
          />
        </Paper>
       
      </div>
     
    </div>
  );
}

export default Offers
