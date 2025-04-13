import React  from "react";
import Login from "./components/auth/login";
 
import Register from "./components/auth/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "./components/orders/Orders";
import Home from "./components/home/index";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./contexts/authcontext";
import Offers from "./components/Offers/Offers";
 

function App() {

  const { userLoggedIn } = useAuth();

  const profile_pic =
    "https://givebutter.com/cdn-cgi/image/width=1200/https://givebutter.s3.amazonaws.com/media/PNzfRlb2IQ9Nx95V8sakTYyDpyXOJTpm6lCe2I78.jpeg";

  return (
    <div>
      <BrowserRouter>
        <div className="  relative  ">
          <div>
   
            <div  class="relative" >   
              {userLoggedIn ? (
                <div class="    sticky top-0    bg-sky-950 w-full h-13 ">
                  <div  class="flex flex-row w-9 h-9 absolute inset-y-3 right-35 ">
                    <img   class ="  rounded-md   "
                      src={profile_pic}
                    />
                  </div>
                </div>
              ) : (
                <div> .. </div>
              )}
            </div>

         

            <div>
              {userLoggedIn ? (
                <div className="w-58 fixed sidebar  bg-sky-950">
                  <Sidebar />
                </div>
              ) : (
                <div> </div>
              )}
            </div>

            <Routes>
            
              <Route exact path="/" element={<Login />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/orders" element={<Orders />} /> 
              <Route exact path="/orders/offers/:userId" element={<Offers />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
