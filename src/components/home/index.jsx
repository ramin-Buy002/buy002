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
              <img src="" />
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
