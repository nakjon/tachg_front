import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { lazy } from "react";

const Navbar=lazy( ()=> 
import("./Navbar"))

const Footer=lazy( ()=> 
import("./Footer"))


const MasterLayout = () => {

  return (

    <div style={{backgroundColor:'azure'}}>
         <div id="nav-top-bar">
          <Navbar />
         </div>
            <div id="layoutSidenav" style={{position:'sticky'}} >
              <main>
                <div className="container-fluid ">
                  <Suspense>
                    <Outlet />
                  </Suspense>
                </div>
              </main>
              <Footer />
            
          </div>
        </div>
  )
}

export default MasterLayout
