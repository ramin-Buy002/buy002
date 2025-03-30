import React from "react";
import Login from "./components/auth/login";
import Header from "./components/header";
import Register from "./components/auth/register";
import Home from "./components/home";
import { AuthProvider } from "./contexts/authcontext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
    
        <AuthProvider>
            <Header />
            <Routes>
              <Route path="*" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
                              
            </Routes>
        </AuthProvider>
    
    </div>
  );
}

export default App;