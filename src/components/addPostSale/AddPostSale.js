import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, InputAdornment, Tooltip } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import rare_main from "./../../assets/rare_main.jpg"
import rare_small from "./../../assets/rare_small.jpg"
import rare_small_01 from "./../../assets/rare_small01.jpg"
import rare_small_02 from "./../../assets/rare_small02.jpg"
import rare_small_03 from "./../../assets/rare_small03.jpg"


const AddPostSale = () => {

  const[loading , setLoading] = useState(null) ;


 
  return (
    <div class="bg-sky-950  ">
            <div className=" ml-58 bg-gray-100 rounded-l-3xl">
             <h3> ..</h3>

           <div  class="flex " >
           <div  class="ml-33 mt-80 bg-amber-50 w-130 h-70 " >
               <div class="mt-2 ml-2" >
                    <TextField
                    id="outlined-multiline-static"
                    label="Caption : "
                    multiline
                    rows={10}
                    placeholder='Write Caption ....'
                    style={{width :"505px"}}
                  />
               </div>

             </div>
                    <div className=" flex row">
                      
                    <div  class=" bg-white  shadow-lg w-83 rounded-2xl h-168 ml-50 mb-30 -mt-9  "  >
                
                            <div  class=" flex bg-gray-400  w-77 rounded-xl h-85 ml-3 mt-3  "  >
                                <img src={rare_main} alt="profile_picture" class=" w-76.5 h-84.5 ml-0.25 mt-0.25   
                                rounded-xl " />

                                  <div>
                                      <div  class=" bg-gray-100  w-13  h-13 rounded-xl  -ml-15 mt-3" >
                                      <img src={rare_small} alt="profile_picture" class=" w-12 h-12.5 ml-0.5 mt-0.5
                                rounded-xl " />
                                      </div>
                                      <div  class=" bg-gray-100  w-13  h-13 rounded-xl  -ml-15 mt-3 " >
                                      <img src={rare_small_01} alt="profile_picture" class=" w-12 h-12.5 ml-0.5 mt-1
                                rounded-xl " />
                                      </div>
                                      <div  class=" bg-gray-100 w-13  h-13 rounded-xl   -ml-15 mt-3 " >
                                      <img src={rare_small_02} alt="profile_picture" class=" w-12 h-12.5 ml-0.5 mt-1
                                rounded-xl " />
                                      </div>
                                      <div  class=" bg-gray-100  w-13  h-13 rounded-xl  -ml-15 mt-3 " >
                                      <img src={rare_small_03} alt="profile_picture" class=" w-12 h-12.5 ml-0.5 mt-1
                                rounded-xl " />
                                      </div>
                                  </div>
                            </div>
                <div>
                     <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' } }}
                    noValidate
                    autoComplete="off"
                  >
    
    
                  <div className="font-sans ml-5 mt-3 ">
                    <h1 className="font-serif text-1xl text-gray-600">Caption :</h1>
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
                            style: { fontSize: 14 ,  }
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
       </div>
  )
}

export default AddPostSale