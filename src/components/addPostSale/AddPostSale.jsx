import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {  Button, InputAdornment, Tooltip } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import rare_main from "./../../assets/rare_main.jpg";
import { auth, fireStoreDb } from "../../configuration/firebase-config";
import {
  addDoc,
  collection,
  doc,
  FieldValue,
  limit,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  ref, 
  uploadBytes,
  getStorage,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { getAuth } from "firebase/auth";

const AddPostSale = () => {
 
  
  const [loading, setLoading] = useState(null);
  const [name, setName] = useState("");

  let array = [];
  const [kl, setKl] = useState(null);
  const [kd, setKd] = useState(null);

  const [offer_price_01, setOffer_price_01] = useState("");
  const [offer_price_02, setOffer_price_02] = useState("");
  const [offer_price_03, setOffer_price_03] = useState("");
  const [offer_pcs_01, setOffer_pcs_01] = useState("");
  const [offer_pcs_02, setOffer_pcs_02] = useState("");
  const [offer_pcs_03, setOffer_pcs_03] = useState("");

  // const [uploadProgress, setUploadProgress] = useState(0);
  // const [imageUrl, setImageUrl] = useState("");

  // const [data, setData] = useState("");
  const [main_img, setMain_img] = useState(rare_main);

  const [small_img_01, setSmall_img_01] = useState(rare_main);
  const [small_img_02, setSmall_img_02] = useState(rare_main);
  const [small_img_03, setSmall_img_03] = useState(rare_main);
  const [small_img_04, setSmall_img_04] = useState(rare_main);

  const fileUploadRef = useRef();
  const fileUploadRef_01 = useRef();
  const fileUploadRef_02 = useRef();
  const fileUploadRef_03 = useRef();
  const fileUploadRef_04 = useRef();
  
  const getUsername = () => {
    const auth = getAuth();
    const user = auth.currentUser;
     
     query(
      collection(fireStoreDb, 'users'),
      limit(1, where('owner_uid', '==', user.uid)),
    );
      onSnapshot(doc(fireStoreDb, 'users', user.email), doc => {
      setKl(doc.data().username);
      setKd(doc.data().profile_picture);
      console.log('username: ', doc.data().username);
      console.log(' profile_picture : ', doc.data().profile_picture);
    });
  };


  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };
  const uploadImageDisplay = () => {
    const uploadedFile = fileUploadRef.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);

    setMain_img(cachedURL);
  };

  const handleImageUpload_01 = (event) => {
    event.preventDefault();
    fileUploadRef_01.current.click();
  };
  const uploadImageDisplay_01 = () => {
    const uploadedFile = fileUploadRef_01.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);

    setSmall_img_01(cachedURL);
  };

  const handleImageUpload_02 = (event) => {
    event.preventDefault();
    fileUploadRef_02.current.click();
  };
  const uploadImageDisplay_02 = () => {
    const uploadedFile = fileUploadRef_02.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);

    setSmall_img_02(cachedURL);
  };

  const handleImageUpload_03 = (event) => {
    event.preventDefault();
    fileUploadRef_03.current.click();
  };
  const uploadImageDisplay_03 = () => {
    const uploadedFile = fileUploadRef_03.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);

    setSmall_img_03(cachedURL);
  };

  const handleImageUpload_04 = (event) => {
    event.preventDefault();
    fileUploadRef_04.current.click();
  };
  const uploadImageDisplay_04 = () => {
    const uploadedFile = fileUploadRef_04.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);

    setSmall_img_04(cachedURL);
  };

  const upload_pic = async () => {

    
    const storage = getStorage();
    const storageRef = ref(storage, uuidv4());
    const image = await fetch(main_img);
    const bytes = await image.blob();
    await uploadBytes(storageRef, bytes).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((imageUrl) => {
        array.push({ imageUrl });
      });
    });

    const storageRef_01 = ref(storage, uuidv4());
    const image_01 = await fetch(small_img_01);
    const bytes_01 = await image_01.blob();
    await uploadBytes(storageRef_01, bytes_01).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((imageUrl) => {
        array.push({ imageUrl });
      });
    });
    const storageRef_02 = ref(storage, uuidv4());
    const image_02 = await fetch(small_img_02);
    const bytes_02 = await image_02.blob();
    await uploadBytes(storageRef_02, bytes_02).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((imageUrl) => {
        array.push({ imageUrl });
      });
    });

    const storageRef_03 = ref(storage, uuidv4());
    const image_03 = await fetch(small_img_03);
    const bytes_03 = await image_03.blob();
    await uploadBytes(storageRef_03, bytes_03).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((imageUrl) => {
        array.push({ imageUrl });
      });
    });

    const storageRef_04 = ref(storage, uuidv4());
    const image_04 = await fetch(small_img_04);
    const bytes_04 = await image_04.blob();
    await uploadBytes(storageRef_04, bytes_04).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((imageUrl) => {
        array.push({ imageUrl });
        
        console.log("array_0001111", array);
      });
    })
    setTimeout(upload_post , 4000) ;
  };

    const upload_post = async() => {
      console.log("0006");

    const uploadPost_ = addDoc(collection(fireStoreDb, "posts"), {
      mode: "sale",
      caption: name,
      offer01: [offer_price_01, offer_pcs_01],
      offer02: [offer_price_02, offer_pcs_02],
      offer03: [offer_price_03, offer_pcs_03],
      createdAt: serverTimestamp(fireStoreDb, FieldValue),
      likes: 0,
      like_by_users: [],
      comments: [],
      gallery: array,
      imageUrl: array[0].imageUrl,

      owner_uid: auth.currentUser.uid ,
      username:  kl ,
      profile_picture:  kd ,
    });
    setMain_img(rare_main);
    setSmall_img_01(rare_main);
    setSmall_img_02(rare_main);
    setSmall_img_03(rare_main);
    setSmall_img_04(rare_main);

    const post_id = (await uploadPost_).id;
     
    console.log('uploading offers ... ');

    const uploadOffer_01 = addDoc(collection(fireStoreDb, 'offers'), {
      number_offer : "01" ,
      post_ID: post_id,
      Price: offer_price_01,
      created_At: serverTimestamp(fireStoreDb, FieldValue),
      manufacturer: auth.currentUser.uid,
      username: kl,
      status: 'open',
      total_pcs: offer_pcs_01,
    });

    const uploadOffer_02 = addDoc(collection(fireStoreDb , 'offers'), {

      number_offer : "02" ,
      post_ID: post_id,
      Price: offer_price_02 ,
      created_At: serverTimestamp(fireStoreDb , FieldValue),
      manufacturer: auth.currentUser.uid,
      username: kl,
      status: 'open',
      total_pcs: offer_pcs_02 ,
    });

    const uploadOffer_03 = addDoc(collection(fireStoreDb , 'offers'), {

      number_offer : "03" ,
      post_ID: post_id,
      Price: offer_price_03 ,
      created_At: serverTimestamp(fireStoreDb, FieldValue),
      manufacturer: auth.currentUser.uid,
      username: kl,
      status: 'open',
      total_pcs: offer_pcs_03 ,
    });

     

    const post_Ref = collection(fireStoreDb , 'posts');

    await updateDoc(doc(post_Ref, post_id), {
      offer_01: (await uploadOffer_01).id,
      offer_02: (await uploadOffer_02).id,
      offer_03: (await uploadOffer_03).id,
    });
    setLoading(false);
  }
  
  useEffect(() => {
    getUsername();
  }, []);

  return (
    <div class="bg-sky-950  ">
      <div className="  flex-row ml-58 bg-gray-100 rounded-l-3xl">
        <h3> ..</h3>

        <div class="flex ">
          <div>
            <div>
              <form id="form" encType="multipart/form-data">
                <div class="  mb-5">
                  <span class="ml-45  mr-10  ">
                    <Button
                      variant="contained"
                      onChange={(e) => {
                        setMain_img(e.target.files[0]);
                      }}
                      color="success"
                      size="small"
                      type="submit"
                      onClick={handleImageUpload}
                    >
                      select main Image
                    </Button>
                    <input
                      type="file"
                      id="file"
                      ref={fileUploadRef}
                      onChange={uploadImageDisplay}
                      hidden
                    />
                  </span>
                  <span>please select main pic for at post</span>
                </div>

                <div class="  mb-5">
                  <span class="ml-45  mr-10  ">
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      type="submit"
                      onClick={handleImageUpload_01}
                    >
                      select small_pic_01
                    </Button>
                    <input
                      type="file"
                      id="file"
                      ref={fileUploadRef_01}
                      onChange={uploadImageDisplay_01}
                      hidden
                    />
                  </span>
                  <span>please add pic for small_pic_01</span>
                </div>

                <div class="  mb-5">
                  <span class="ml-45  mr-10  ">
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      type="submit"
                      onClick={handleImageUpload_02}
                    >
                      select small_pic_02
                    </Button>
                    <input
                      type="file"
                      id="file"
                      ref={fileUploadRef_02}
                      onChange={uploadImageDisplay_02}
                      hidden
                    />
                  </span>
                  <span>please add pic for small_pic_02</span>
                </div>

                <div class="  mb-5">
                  <span class="ml-45  mr-10  ">
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      type="submit"
                      onClick={handleImageUpload_03}
                    >
                      select small_pic_03
                    </Button>
                    <input
                      type="file"
                      id="file"
                      ref={fileUploadRef_03}
                      onChange={uploadImageDisplay_03}
                      hidden
                    />
                  </span>
                  <span>please add pic for small_pic_03</span>
                </div>

                <div class="  mb-5">
                  <span class="ml-45  mr-10  ">
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      type="submit"
                      onClick={handleImageUpload_04}
                    >
                      select small_pic_04
                    </Button>
                    <input
                      type="file"
                      id="file"
                      ref={fileUploadRef_04}
                      onChange={uploadImageDisplay_04}
                      hidden
                    />
                  </span>
                  <span>please add pic for small_pic_04</span>
                </div>
              </form>
            </div>

            <div class="ml-33 mt-12 bg-white w-130 h-70 ">
              <div class="  p-2">
                <TextField
                  error={name.length === 0}
                  helperText={!name.length ? "" : ""}
                  value={name}
                  id="outlined-multiline-static"
                  label="Caption : "
                  InputLabelProps={{
                    style: { color: "#121212", fontFamily: "satisfies" },
                  }}
                  multiline
                  rows={10}
                  placeholder="Write Caption ...."
                  style={{ width: "505px" }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className=" flex row">
            <div class=" bg-white  shadow-lg w-83 rounded-2xl h-168 ml-50 mb-30 -mt-9  ">
              <div class=" flex bg-gray-400  w-77 rounded-xl h-85 ml-3 mt-3  ">
                <img
                  src={main_img}
                  alt="profile_picture"
                  class=" w-76.5 h-84.5 ml-0.25 mt-0.25   
                                 rounded-xl "
                />

                <div>
                  <div class=" bg-gray-100  w-13  h-13 rounded-xl  -ml-15 mt-3">
                    <img
                      src={small_img_01}
                      alt="profile_picture"
                      class=" w-12 h-12.5 ml-0.5 mt-0.5
                                 rounded-xl "
                    />
                  </div>
                  <div class=" bg-gray-100  w-13  h-13 rounded-xl  -ml-15 mt-3 ">
                    <img
                      src={small_img_02}
                      alt="profile_picture"
                      class=" w-12 h-12.5 ml-0.5 mt-1
                                 rounded-xl "
                    />
                  </div>
                  <div class=" bg-gray-100 w-13  h-13 rounded-xl   -ml-15 mt-3 ">
                    <img
                      src={small_img_03}
                      alt="profile_picture"
                      class=" w-12 h-12.5 ml-0.5 mt-1
                                 rounded-xl "
                    />
                  </div>
                  <div class=" bg-gray-100  w-13  h-13 rounded-xl  -ml-15 mt-3 ">
                    <img
                      src={small_img_04}
                      alt="profile_picture"
                      class=" w-12 h-12.5 ml-0.5 mt-1
                                 rounded-xl "
                    />
                  </div>
                </div>
              </div>
              <div>
                <Box
                  component="form"
                  sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="  h-10 w-70    flex font-sans ml-5 mt-2">
                    {/* <h1 className="font-serif flex-row text-1xl text-gray-600">Caption :   </h1> */}
                    <div style={{ width: 270, whiteSpace: "nowrap" }}>
                      <p class=" font-serif text-gray-400 ">Caption ::</p>
                      <p class="overflow-hidden text-ellipsis text-sm ml-3">
                        {" "}
                        {name}{" "}
                      </p>
                    </div>
                  </div>
                </Box>
              </div>
              <div class="ml-1 ">
                <Box
                  component="form"
                  // sx={{ '& .MuiTextField-root': { m: 2 , width: '19ch' , height:'3ch' } }}
                  noValidate
                  autoComplete="off"
                >
                  <div class="flex flex-row ml-3 mt-4">
                    <TextField
                      label="offer_01"
                      inputProps={{
                        style: { fontSize: 12 },
                      }}
                      placeholder=" price ..."
                      id="outlined-start-adornment"
                      onChange={(e) => {
                        setOffer_price_01(e.target.value);
                      }}
                      sx={{
                        m: 1,
                        width: "12ch",
                        "& .MuiOutlinedInput-input": { height: 8 },
                        fontSize: 22,
                      }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment
                              sx={{ fontSize: 15 }}
                              position="start"
                            ></InputAdornment>
                          ),
                        },
                      }}
                    />
                    <TextField
                      label=""
                      inputProps={{
                        style: { fontSize: 12 },
                      }}
                      onChange={(e) => {
                        setOffer_pcs_01(e.target.value);
                      }}
                      id="outlined-start-adornment"
                      placeholder=" pcs ..."
                      sx={{
                        m: 1,
                        width: "14ch",
                        "& .MuiOutlinedInput-input": { height: 8 },
                      }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start"> </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </div>

                  <div class="flex flex-row ml-3 mt-2">
                    <TextField
                      label="offer_02"
                      inputProps={{
                        style: { fontSize: 12 },
                      }}
                      onChange={(e) => {
                        setOffer_price_02(e.target.value);
                      }}
                      placeholder=" price ..."
                      id="outlined-start-adornment"
                      sx={{
                        m: 1,
                        width: "12ch",
                        "& .MuiOutlinedInput-input": { height: 8 },
                        fontSize: 22,
                      }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment
                              sx={{ fontSize: 15 }}
                              position="start"
                            >
                              {" "}
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                    <TextField
                      label=""
                      inputProps={{
                        style: { fontSize: 12 },
                      }}
                      onChange={(e) => {
                        setOffer_pcs_02(e.target.value);
                      }}
                      placeholder=" pcs ..."
                      id="outlined-start-adornment"
                      sx={{
                        m: 1,
                        width: "14ch",
                        "& .MuiOutlinedInput-input": { height: 8 },
                      }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start"> </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </div>
                  <div class="flex flex-row ml-3 mt-2">
                    <TextField
                      label="offer_03"
                      inputProps={{
                        style: { fontSize: 12 },
                      }}
                      onChange={(e) => {
                        setOffer_price_03(e.target.value);
                      }}
                      placeholder=" price ..."
                      id="outlined-start-adornment"
                      sx={{
                        m: 1,
                        width: "12ch",
                        "& .MuiOutlinedInput-input": { height: 8 },
                        fontSize: 22,
                      }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment
                              sx={{ fontSize: 15 }}
                              position="start"
                            >
                              {" "}
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                    <TextField
                      label=""
                      inputProps={{
                        style: { fontSize: 12 },
                      }}
                      onChange={(e) => {
                        setOffer_pcs_03(e.target.value);
                      }}
                      placeholder=" pcs ..."
                      id="outlined-start-adornment"
                      sx={{
                        m: 1,
                        width: "14ch",
                        "& .MuiOutlinedInput-input": { height: 8 },
                      }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start"> </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </div>

                  <div class="ml-27 mt-2">
                    <Tooltip title="Click to see loading">
                      <Button
                        onClick={ async () => {
                        setLoading(true);
                        await  upload_pic();
                        // await upload_post();
                        }}
                        loading={loading}
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
  );
};

export default AddPostSale;



//  add post sale

//  1 .   upload data post_sale whitout   offers_id

//  {    const uploadPost_ = addDoc(collection(db, 'posts'), {
//   mode: 'sale',
//   caption: caption,
//   offer01: [Price01, pcs01],
//   offer02: [Price02, pcs02],
//   offer03: [Price03, pcs03],
//   createdAt: serverTimestamp(db, FieldValue),
//   likes: 0,
//   like_by_users: [],
//   comments: [],
//   gallery: array,
//   imageUrl: array[0].imageUrl,

//   owner_uid: auth.currentUser.uid,
//   username: kl,
//   profile_picture: kd,
// });   }

//  2 .   upload 3 offer_id with post_sale_id

// {   number_offer : "03" ,
// post_ID: post_id,
// Price: Price03,
// created_At: serverTimestamp(db, FieldValue),
// manufacturer: auth.currentUser.uid,
// username: kl,
// status: 'open',
// total_pcs: pcs03 }

//  3 .   add 3 offer_id  in  post_sale     offer_01:  offer_02:  offer_03:
