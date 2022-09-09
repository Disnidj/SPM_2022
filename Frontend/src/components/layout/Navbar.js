import React, { Fragment } from "react";
import { useNavigate , Link} from "react-router-dom";
import { BsPersonLinesFill } from "react-icons/bs"
import { BsFillPersonPlusFill } from "react-icons/bs"
import { MdOutlineChecklistRtl } from "react-icons/md"
import { MdPictureAsPdf } from "react-icons/md"
import { FaFileUpload } from "react-icons/fa"

const Navbar = () => {

	const navigate = useNavigate();

	let userRole = localStorage.getItem('userRole');

	const handleSubmit = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userRole");
		localStorage.removeItem("user");
		navigate("/");
	  }

	

	return (
		<div>
			<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">


                {/* customer pages */}
                <a style={{ display: userRole == "Customer" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="#">Fuel Availability</a>
                <a style={{ display: userRole == "Customer" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="#" aria-current="page">Reserve Queue</a>
				<a style={{ display: userRole == "Customer" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="/C_ViewTimeTable">Time Tables</a>


                {/*  admin Pages */}
				<a style={{ display: userRole == "Admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="#" aria-current="page">Fuel Information</a>
                <a style={{ display: userRole == "Admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="#" aria-current="page">Staff Allocation</a>
				<a style={{ display: userRole == "Admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="#" aria-current="page">Salary Information</a>
				<a style={{ display: userRole == "Admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/Addtimetable" aria-current="page">Add Time Table</a>
				<a style={{ display: userRole == "Admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/AdminLeaveViewAll" aria-current="page">View Leaves</a>
				<a style={{ display: userRole == "Admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/ViewAllRoles" aria-current="page">View Roles</a>	
			    <a style={{ display: userRole == "Admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="/staffRegister">Register Employee</a>



				{/*Employee pages*/}
				<a style={{ display: userRole == "Employee" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/EmpViewAllAttendance" aria-current="page">View Attendace</a>
				<a style={{ display: userRole == "Employee" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="#" aria-current="page">Salary Information</a>
				<a style={{ display: userRole == "Employee" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/EmpAttendaceMark" aria-current="page">Attendace Mark</a>
				<a style={{ display: userRole == "Employee" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/EmpLeaveFormCreate" aria-current="page">Leave Application</a>
				<a style={{ display: userRole == "Employee" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/EmpViewAllLeaves" aria-current="page">View All Leaves</a>
				<a style={{ display: userRole == "Employee" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="#" aria-current="page">Other</a>


              </div>
            </div>
          </div>
		  <Link to="/userprofile">
			<button  className="btn btn-success" type="submit" style={{ float: "right", display: userRole ? "flex" : "none" , textDecoration:"none"}}>
				Profile
			</button>
		  </Link>	
          <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{ float: "right", marginRight: "10px" , display:userRole ? "flex":"none"}}>
            {"Logout"}
          </button>
   
        </nav>
			</div>
		</div>
		
	);
};



export default Navbar;
