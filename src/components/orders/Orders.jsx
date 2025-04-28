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

  const paginationModel = { page: 0, pageSize: 12 };

  const { currentUser } = useAuth(); 
   
    let [array_myOffers ] = useState([]);

    const [myArray, setMyArray] = useState([]);

    const [sum , setSum] = useState(1);

    const [all_Array, setAll_Array] = useState([]);

 
    let array_count = [] ;


 

    const columns = [
      {
        field: "post_ID",
        headerName: "Offers",
        description: "all pcs offer.",
        width: 90,
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
        width:200,
      },{
        field: "Price",
        headerName: "Price",
        description: "all pcs offer.",
        width: 120,
        renderCell: (params)=>{
          const price = params.row.Price
           
          return (
            <div>
               <h2 class=" ml-4 text-red-500" > {price} $ </h2>
            </div>
          )
        }
      },   {
        field: "status",
        headerName: "status",
        description: "all pcs offer.",
        width: 100,
      }, {
        field: "total_pcs",
        headerName: "total_pcs",
        description: "all pcs offer.",
        width: 120,
        renderCell: (params)=>{
          let total_p = params.row.total_pcs ;
           
          return (
            <div  className="flex"  >
               <h2 class=" ml-5  " > {total_p } </h2>

            </div>
          )
        }
      }, {
        field: "total_orders",
        headerName: "total_orders",
        description: "all pcs offer.",
        width: 110,
        renderCell: (params)=>{
          let Total = params.row.total_orders ;
           
          return (
            <div  className="flex"  >
               <h2 class=" ml-6  " > {Total } </h2>

            </div>
          )
        }
      } , {
        field: "Percent_Sold",
        headerName: "Percent_Sold",
        description: "all pcs offer.",
        width: 140,
        renderCell: (params)=>{
          let Percent = params.row.Percent_Sold ;
          let percent_ = Percent.toFixed(2) ;
           
          return (
            <div  className="flex"  >
               <h2 class=" ml-4 text-green-500 text-[18px]" > {percent_ } </h2>
             
               <h2   className="ml-3" >  % </h2>

            </div>
          )
        }
        //     valueGetter: (value, row) => `${row.id || ""} ${row.Price || ""}`,
      }, {
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
                            <Button     variant="contained">   view   </Button>
                        </Link>
                  </Stack>
            </div>
          )
        }
      }
    ];
    
      const rows = all_Array   

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
              
                          onSnapshot(q,  (snapshot) => {

                              snapshot.docs.forEach ( (doc) => {

                                  id_offer = doc.id 
                                  let new_object = doc.data() ;
                                  let obj_01 = {id : id_offer  } ;

                                  array_myOffers = [...array_myOffers, id_offer] ;

                                  const postRef =   collection(fireStoreDb , "posts") ;

                                      if(id_offer){
                                    const qqqq = query(postRef ,   where("offer_01" , "==" , id_offer ))  
                                  
                                         onSnapshot(qqqq, (querySnapshot) => {
                                      
                                            querySnapshot.forEach((doc) => { 

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
         
        
                                                      let obj_02 = {img: doc.data().imageUrl
                                                      } ;
                        
                                                      new_obj = Object.assign(new_object , obj_01 , obj_02 ) ;
        
                                                          array =  [...array, new_obj] ;
                                                      setMyArray(array) ;
                                      })
                                      })
                                              }
                              })
                              

                              array_myOffers.forEach( (id_offers  ) => {
                              
                                let sum_count = 0 ;

                                     const docRef_offer =  doc(fireStoreDb, "offers", id_offers);
                                              onSnapshot(collection(docRef_offer, "orders"), (snapshot) => {  
                                                snapshot.docs.forEach((doc)=> {

                                                  let count = doc.data().count ;
                                                  sum_count = sum_count + count  ;

                                                })

                                                  
                                                array_count.push(sum_count ) ;
                                                
                                                if( myArray.length === array_count.length  && sum === 3  ){
 
                                                myArray.forEach(( obj , index )=>{
            
                                                  // console.log(" obj :: " , obj , " index :"  , index) ;
                                             
                                                 let object_02 = { total_orders : array_count[index]} ;
                                                 let total_pcs = obj.total_pcs  ;
                                                  
                                                 let obj_percent =    (array_count[index]  / total_pcs) * 100   ;

                                                //  console.log(" obj_percent  :: " , obj_percent ) ;

                                                 let object_03 = { Percent_Sold : obj_percent } ;
                                                 
                                                 new_obj = Object.assign( obj , object_02  , object_03);
                              
                                                setAll_Array(myArray) ;
                                                  
                                               }
                                               ) 
                                        
                                              } if (sum === 1) {
                                                console.log(    "______-______"  , sum)
                                                setSum( sum + 1 )
                                                 
                                              } if ( sum === 2 ){
                                                console.log(    "______-______"  , sum)
                                                setSum( sum + 1 )
                                              }
                                             })   
                                                    }
                                                  )  })
                                                  }
   console.log("all_Array :" , all_Array )

  useEffect(  () => {
      getUserData();
 
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ sum  ]);
   
  return (
    <div class="bg-sky-950  ">
      <div class="bg-white rounded-l-3xl ml-58 ">
        <h3>..</h3>
        <Paper sx={{ height: 700 , width: 1300, marginLeft: 3, marginTop: 2 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: { paginationModel } ,
              sorting: {
                sortModel: [{ field: 'Percent_Sold', sort: 'desc' }],
              },
            }}
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