import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';


const AddPostSale = () => {
  return (
    <div class="bg-sky-950  ">
            <div className=" ml-58 bg-gray-100 rounded-l-3xl">
             <h3> ..</h3>
                    <div className=" flex row">
                    
                
                         
                    <div  class=" bg-white  w-83  h-165 ml-200 mb-30 -mt-6  "  >
                            <div  class=" flex bg-green-300  w-77  h-85 ml-3 mt-3  "  >
                               <div  > 
                                  <div  class=" bg-white  w-13  h-13  ml-60 mt-3 " ></div>
                                  <div  class=" bg-white  w-13  h-13  ml-60 mt-3 " ></div>
                                  <div  class=" bg-white  w-13  h-13  ml-60 mt-3 " ></div>
                                  <div  class=" bg-white  w-13  h-13  ml-60 mt-3 " ></div>
                               </div>
                            </div>
                <div>
                     <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' } }}
                    noValidate
                    autoComplete="off"
                  >
    
    
                      <div>
                      <TextField
                          id="standard-multiline-flexible"
                          label="Caption"
                          multiline
                          maxRows={2}
                          variant="standard"
                        />
                      
                      </div>
                    
                
                     </Box>
                </div>    
                <div >
                     <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 2 , width: '19ch' , height:'4ch' } }}
                    noValidate
                    autoComplete="off"
                  >
                  
                      <div   class="flex flex-row">
                      <TextField
                          label=""
                          id="outlined-start-adornment"
                          sx={{ m: 1, width: '25ch' }}
                          slotProps={{
                            input: {
                              startAdornment: <InputAdornment position="start">price $ : </InputAdornment>
                            },
                          }}
                        />
                   
                      </div>
                      <div   class="flex flex-row">
                      <TextField
                          label=""
                          id="outlined-start-adornment"
                          sx={{ m: 1, width: '25ch' }}
                          slotProps={{
                            input: {
                              startAdornment: <InputAdornment position="start">price $ : </InputAdornment>
                            },
                          }}
                        />
                   
                      </div>
                      <div   class="flex flex-row">
                      <TextField
                          label=""
                          id="outlined-start-adornment"
                          sx={{ m: 1, width: '25ch' }}
                          slotProps={{
                            input: {
                              startAdornment: <InputAdornment position="start">price $ : </InputAdornment>
                            },
                          }}
                        />
                   
                      </div>
                        
                      
                
                     </Box>
                </div>  
                    </div>
                 
                    </div>
                    
            </div>
       </div>
  )
}

export default AddPostSale