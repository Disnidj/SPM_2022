import React, { Profiler, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/layout/Profile";
import Dashboard from "./components/Dashboard";



//admin
import ViewAllRoles from "./components/admin/ViewAllRoles";
import UpdateUser from "./components/admin/UpdateUser";


//customer



//staff
import RegisterStaff from "./components/auth/RegisterStaff";







export default function Router() {
	return (
			<div >
				<Router>
					<Navbar/>	
					<Routes>
						<Route exact path="/" element={<Landing/>} />
						<Route exact path="/dashboard" element={<Dashboard/>} />
						<Route exact path="/register" element={<Register/>} />
						<Route exact path="/login" element={<Login/>} />
						<Route exact path="/userprofile" element={<Profile/>} />

						{/* staff */}

						<Route exact path="/staffRegister" element={<RegisterStaff/>} />

						{/* admin */}
				
						<Route exact path="/ViewAllRoles" element={<ViewAllRoles/>}/>
					
						<Route exact path="/updateUser/:id" element={<UpdateUser/>}/>

						{/* customer */}
				




					</Routes>
					<Footer/>
				</Router>
			</div>
	);
}

