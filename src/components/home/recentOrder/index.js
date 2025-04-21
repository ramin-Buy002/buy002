import React from 'react' ;
import { DataGrid } from '@mui/x-data-grid' ;
import Paper from '@mui/material/Paper' ;
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
 


const RecentOrder = () => {

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
              <img   alt="profile_picture" className="userListImg" />
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
       width: 100,
     },{
       field: "numberOrders",
       headerName: "Number_Orders",
       description: "all pcs offer.",
       width: 130,
     },{
       field: "created_At",
       headerName: "Created_At",
       description: "all pcs offer.",
       width: 140,
       renderCell: (params)=>{
       //  const new_date = params.row.created_At
      //   const date = new Date(new_date.seconds  * 1000);
         
         return (
           <div>
              <h2>  </h2>
           </div>
         )
       } 
      }, {
       field: "action",
       headerName: "View",
       description: "all pcs offer.",
       width: 100,
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
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
      
      const paginationModel = { page: 0, pageSize: 5 };


  return (
     

        <div style={{ marginLeft:24 , marginTop:20}} >
          <div>
         
            <h1  style={{  backgroundColor:"#727D73" , width: '97%' , height:27  , color:"#ffffff" }}  >
              <span style={{  marginLeft:30 }}   >Recent Orders</span>
            </h1>
          </div>
                    <Paper sx={{ height: 400, width: '97%' }}>
                            <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            sx={{ border: 0 }}
                            />
                    </Paper>
                    
            </div>
  )
}

export default RecentOrder