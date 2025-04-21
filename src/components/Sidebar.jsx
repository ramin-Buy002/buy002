import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import "./../output.css";
import "react-tooltip/dist/react-tooltip.css";
import { MdOutlineLocalShipping  , MdAccountBalanceWallet  } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { doSignOut } from "../configuration/auth";

const Sidebar = () => {
  const activeMenu = true;
  const navigate = useNavigate();

  
  return (
    <div
      className="ml-3 h-screen 
    md:overflow-hidden overflow-auto 
    md:hover:overflow-auto pb-10 "
    >
      {activeMenu && (
        <>
          <div
            className="flex justify-between 
        items-center   flex-row "
          >
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 ml-3
              mt-4 flex text-x1 font-bold 
              -tracking-tight dark:text-white
              text-white  "
            >
              <BsBasket /> <span className="  text-rose-400" > Buy_together</span>
            </Link>
 
          </div>
          <div className="mt-2  ">
 
              <div className=" text-white   "  >
                 <div className=" p-6 mt-4  flex flex-row  " >
                 <IoHomeOutline className="mr-1 mt-1 w-7" />
                  <NavLink
                    to="/home"
                    style={({ isActive }) => ({
                        color:  "white"  ,
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                        marginRight: "15px",
                    })}
                >
                    Home
                  </NavLink>
                  </div>
                  <div className="p-1 mt-1 ml-5 flex flex-row " >
                  <FaListCheck className="mr-1 mt-1 w-7" />
                  <NavLink
                    to="/orders"
                    style={({ isActive }) => ({
                        color: "white",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                    })}
                >
                   Offers / Order 
                  </NavLink>
                  </div>
                  <div className="p-1 mt-5 ml-5 flex flex-row " >
                  <MdOutlineLocalShipping className="mr-1 mt-1 w-7" />
                  <NavLink
                    to="/orders"
                    style={({ isActive }) => ({
                        color: "white",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                    })}
                >
                    Add Post Sale
                  </NavLink>
                  </div>
                  <div className="p-1 mt-5 ml-5 flex flex-row " >
                  <MdOutlineLocalShipping className="mr-1 mt-1 w-7" />
                  <NavLink
                    to="/orders"
                    style={({ isActive }) => ({
                        color: "white",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                    })}
                >
                    Shipment
                  </NavLink>
                  </div>
                  <div className="p-1 mt-5 ml-5 flex flex-row " >
                  <MdOutlineLocalShipping className="mr-1 mt-1 w-7" />
                  <NavLink
                    to="/orders"
                    style={({ isActive }) => ({
                        color: "white",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                    })}
                >
                    Reports
                  </NavLink>
                  </div>
                  <div className="p-1 mt-5 ml-5 flex flex-row " >
                  < MdAccountBalanceWallet  className="mr-1 mt-1 w-8" />
                  <NavLink
                    to="/orders"
                    style={({ isActive }) => ({
                        color: "white",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                    })}
                >
                    Wallet
                  </NavLink>
                  </div>


                  <div   className="p-5">
                  <NavLink
                    to="/orders"
                    style={({ isActive }) => ({
                        color: "white",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                    })}
                >
                    Calender
                  </NavLink>
                  </div>
                  <div   className="ml-5">
                  <NavLink
                    to="/orders"
                    style={({ isActive }) => ({
                        color: "white",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                    })}
                >
                    Edit Profile
                  </NavLink>
                  </div>
                  
                
                  <div className="ml-5 mt-5" >
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
               
              </div>
          
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
