import "./App.css";
import user from "./../src/assets/user.png"
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import menu02 from "./../src/assets/menu02.png";
import { fireStoreDb } from "./configuration/firebase-config";

const App = () => {
  const [textColor, setTextColor] = useState("black");
  const [users, setUsers] = useState([]);

  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(fireStoreDb, "users"));
    setUsers(querySnapshot.docs.map((doc) => doc.data()));
  };
  fetchData()
    // make sure to catch any error
    .catch(console.error);

  const handleColorChange = () => {
    const newColor = textColor === "black" ? "red" : "black";
    setTextColor(newColor);
    console.log("001");
    
  };
  

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
  // <img src= />
  return (
    <div className="App">
      <div className="menu-container">
        <div className="menu-trigger" onClick={()=> setOpen(!open)} > 
        <img className="menu-trigger-img" src={menu02}></img>
        <h3>The kiet<bar/><span>Website Designer</span> </h3>

      </div>
      </div>

      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <h3>The kiet<bar/><span>Website Designer</span> </h3>
        <ul>
          <DropdownItem img = {user} text = {"list Orders"} />
          <DropdownItem img = {user} text = {"reports"} />
          <DropdownItem img = {user} text = {"Shipment"} />
          <DropdownItem img = {user} text = {"Add post"} />
          <DropdownItem img = {user} text = {"Add post sale"} />
          <DropdownItem img = {user} text = {"my profile"} />
        </ul>
      </div>
    <div>
      <div className="App02"  >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={styles.colorButton}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.colorButtonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                styles.colorButton.backgroundColor)
            }
            onClick={handleColorChange}
          >
            List Orders
          </button>
          <button
            style={styles.colorButton}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.colorButtonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                styles.colorButton.backgroundColor)
            }
            onClick={handleColorChange}
          >
            Reports
          </button>
          <button
            style={styles.colorButton}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.colorButtonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                styles.colorButton.backgroundColor)
            }
            onClick={handleColorChange}
          >
            Add Post Sale
          </button>
          <button
            style={styles.colorButton}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.colorButtonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                styles.colorButton.backgroundColor)
            }
            onClick={handleColorChange}
          >
            Shipment
          </button>
        </div>
        <div style={{ ...styles.content, color: textColor }}>
          A Computer Science portal for geeks. It contains well written, well
          thought and well explained computer science and programming articles.
        </div>
        </div>
          <div>
            <h1>Data from database:</h1>
          <ul>
            {users.map((item, index) => (
              <li key={index}>{item.email}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const DropdownItem = (props)=>{

  return (
    <li className="dropdownItem" >
      <img src={props.img} ></img>
      <a> {props.text} </a>
    </li>
  );
}

export default App;
