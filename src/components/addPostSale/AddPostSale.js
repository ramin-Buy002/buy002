import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, InputAdornment, Tooltip } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddPostSale = () => {

  const[loading , setLoading] = useState(null) ;


 
  return (
    <div class="bg-sky-950  ">
            <div className=" ml-58 bg-gray-50 rounded-l-3xl">
             <h3> ..</h3>
                    <div className=" flex row">
                    
                
                         
                    <div  class=" bg-white  shadow-lg w-83  h-168 ml-200 mb-30 -mt-6  "  >
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
    
    
                      <div class="ml-6 mt-3">
                       <span  class="text-blue-400">
                        Caption :  
                       </span>
                      
                      </div>
                    
                
                     </Box>
                </div>    
                <div class="ml-1 mt-10" >
                     <Box
                    component="form"
                    // sx={{ '& .MuiTextField-root': { m: 2 , width: '19ch' , height:'3ch' } }}
                    noValidate
                    autoComplete="off"
                  >
                  
                      <div   class="flex flex-row ml-3">
                      <TextField
                          label="offer_01"
                          inputProps={{
                            style: { fontSize: 14  }
                        }}
                          placeholder=" price ..."
                          id="outlined-start-adornment"
                          sx={{ m: 1, width: '12ch' , "& .MuiOutlinedInput-input":{height:10 },
                          fontSize:22
                           }}
                          slotProps={{
                            
                            input: {
                              startAdornment: <InputAdornment 
                              sx={{fontSize:15}}
                              position="start" ></InputAdornment>
                            },
                          }}
                        />
                         <TextField
                          label=""
                          inputProps={{
                            style: { fontSize: 15  }
                        }}
                          id="outlined-start-adornment"
                          placeholder=" pcs ..."
                          sx={{ m: 1, width: '14ch' , "& .MuiOutlinedInput-input":{height:10}
                           }}
                          slotProps={{
                            input: {
                              startAdornment: <InputAdornment position="start"> </InputAdornment>
                            },
                          }}
                        />
                   
                      </div>
                     
                      <div   class="flex flex-row ml-3">
                      <TextField
                          label="offer_02"
                          inputProps={{
                            style: { fontSize: 15  }
                        }}
                          placeholder=" price ..."
                          id="outlined-start-adornment"
                          sx={{ m: 1, width: '12ch' , "& .MuiOutlinedInput-input":{height:10 },
                          fontSize:22
                           }}
                          slotProps={{
                            
                            input: {
                              startAdornment: <InputAdornment 
                              sx={{fontSize:15}}
                              position="start" > </InputAdornment>
                            },
                          }}
                        />
                         <TextField
                          label=""
                          inputProps={{
                            style: { fontSize: 15  }
                        }}
                          placeholder=" pcs ..."
                          id="outlined-start-adornment"
                          sx={{ m: 1, width: '14ch' , "& .MuiOutlinedInput-input":{height:10}
                           }}
                          slotProps={{
                            input: {
                              startAdornment: <InputAdornment position="start"> </InputAdornment>
                            },
                          }}
                        />
                   
                      </div>
                      <div   class="flex flex-row ml-3">
                      <TextField
                          label="offer_03"
                          inputProps={{
                            style: { fontSize: 15  }
                        }}
                          placeholder=" price ..."
                          id="outlined-start-adornment"
                          sx={{ m: 1, width: '12ch' , "& .MuiOutlinedInput-input":{height:10 },
                          fontSize:22
                           }}
                          slotProps={{
                            
                            input: {
                              startAdornment: <InputAdornment 
                              sx={{fontSize:15}}
                              position="start" > </InputAdornment>
                            },
                          }}
                        />
                         <TextField
                          label=""
                          inputProps={{
                            style: { fontSize: 15  }
                        }}
                          placeholder=" pcs ..."
                          id="outlined-start-adornment"
                          sx={{ m: 1, width: '14ch' , "& .MuiOutlinedInput-input":{height:10}
                           }}
                          slotProps={{
                            input: {
                              startAdornment: <InputAdornment position="start"> </InputAdornment>
                            },
                          }}
                        />
                   
                      </div>
                  
                      <div  class="ml-27 mt-1" >

                              <Tooltip title="Click to see loading">
                                                            <Button  onClick={() => setLoading(true)} loading={loading}
                                                              component="label"
                                                              role={undefined}
                                                              variant="contained"
                                                              tabIndex={-1}
                                                              startIcon={<CloudUploadIcon />}
                                                            >
                                                              Upload
                                                          
                                                            </Button>
                              </Tooltip>
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