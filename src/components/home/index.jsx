import { useAuth } from "../../contexts/authcontext";
import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { fireStoreDb } from "../../configuration/firebase-config";
import menu02 from "./../../assets/menu02.png";
import user from "./../../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../../configuration/auth";
import "./index.css";
import { Tooltip } from "react-tooltip";
import { FiSettings } from "react-icons/fi";
import "./../../output.css";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Home = ({ value }) => {
  

  const { currentUser } = useAuth();

  const [textColor, setTextColor] = useState("black");
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  const myEmail = currentUser.email;
  const myUid = currentUser.uid;

  const navigate = useNavigate();

  const styles = {
    container: {
      textAlign: "center",
      backgroundColor: "#0f1111",
      width: "100%",
      height: "55px",
    },

    profile: {
      with: "36px",
      height: "36px",
      alignItems: "start",
      marginTop: "8px",
    },
    buyto: {
      fontSize: 20,
      marginTop: "33px",
      marginLeft: "300px",
      color: "#ffffff",
    },
    container_01: {
      backgroundColor: "#232f3e",
      height: "45px",
    },
    heading: {
      color: "#ffffff",
    },
    colorButton: {
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
      borderRadius: "5px",
      fontSize: "16px",
      marginTop: "20px",
      margin: "20px",
    },
    colorButtonHover: {
      backgroundColor: "#45a049",
    },
    content: {
      fontSize: "18px",
      marginTop: "30px",
    },
  };

  const { userLoggedIn } = useAuth();
  console.log("ggg", userLoggedIn);

  const handleColorChange = () => {
    const newColor = textColor === "black" ? "red" : "black";
    setTextColor(newColor);
    console.log("001");
  };

  const getUserData = async () => {
    const docRef = doc(fireStoreDb, "users", myEmail);
    const docSnap = await getDoc(docRef);
    setUsers(docSnap.data());
    console.log("Wallet:", docSnap.data().Wallet);
  };
  const profile_pic = users.profile_picture
  console.log("ffffff" , profile_pic)

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div  class="isolate  bg-white " >

            <div  className="fixed md:static bg-green-900 w-full h-12 " >   </div>
     
                      <div  className="w-62 fixed sidebar  bg-sky-50" >
                          <Sidebar />
                    </div>

            <div style={{ padding: 80, marginLeft: 200 }}>
              Hello{" "}
              {currentUser.displayName
                ? currentUser.displayName
                : currentUser.email}
              , you are now logged in.
              <div>
              <img src="data:image/jpeg;base64,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"  /> 
              </div>
              <div>email : {currentUser.email}</div>
              <div>uid : {myUid}</div>
              <div> profile_picture : {users.profile_picture}</div>
              <div> uu: {userLoggedIn} </div>
              <button
                onClick={() => {
                  doSignOut().then(() => {
                    navigate("/login");
                  });
                }}
              >
                Logout
              </button>
            </div>
            <div className="fixed md:static bg-main-bg 
                dark:bg-main-dark-bg navbar w-full ml-70">
                  <Navbar />
             </div>
            
            <div>
              <FiSettings />
            </div>
    </div>
  

  );
};

export default Home;
