import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css' 

 function   Navbar() {
   
  return (
  
        <div className="container">
            
            <nav>
                <div className="menu-icons">
                   <i className="fas fa-bars"></i>
                   <i className="fas fa-times"></i>
                </div>
                <a href="/#index.html" className="logo">MEC-LONES ACADEMY</a>
                <ul class="nav-list">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#">ABOUT US <i class="fas fa-caret-down"></i></a>
                        <ul class="sub-menu">
                            <li>
                            <Link to="/headteacher-address.html">HEAD TEACHER WELCOME</Link>
                            </li>
                            <li>
                            <Link to="/history.html">HISTORY</Link>
                                
                            </li>
                            <li>
                            <Link to="/vision-amission.html">VISION, MISSION & AIM</Link>
                            </li>
                            <li>
                            <Link to="/vacancy">VACANCY</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">GOVERNANCE<i class="fas fa-caret-down"></i></a>
                        <ul className="sub-menu">
                                    <li>
                                        <a href="#">BOARD OF TRUSTEES</a>
                                    </li>
                                    <li>
                                        <a href="#">BOARD OF MANAGEMENT</a>
                                    </li>
                                    <li>
                                        <a href="#">SCHOOL LEADERSHIP</a>
                                    </li>
                                    <li>
                                        <a href="#">STUDENT LEADERSHIP TEAM</a>
                                    </li>
                                </ul>
                    </li>
                    <li>
                        <a href="#">SCHOOL LIFE 
                            <i class="fas fa-caret-down"></i>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#">ACADEMICS & ASSESMENT RPT</a>
                            </li>
                            <li>
                                <a href="#"> CURRICULUM MAP </a>
                            </li>
                            <li>
                                <a href="#">ART</a>
                            </li>
                            <li>
                                <a href="#">SPORTS</a>
                            </li>
                             <li>
                                 <a href="#"> TERM DATES</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">ADMISSIONS <i class="fas fa-caret-down"></i></a>
                        <ul className="sub-menu">
                                    <li>
                                        <a href="#">WELCOME</a>
                                    </li>
                                    <li>
                                        <a href="#">OUR ADMISSION PROCESS</a>
                                    </li>
                                    <li>
                                        <a href="#"> FEES </a>
                                    </li>
                                    <li>
                                        <a href="#"> REGISTER YOUR CHILD </a>
                                    </li>
                                </ul>
                    </li>
                    <li>
                        <a href="#">COMMUNITY<i className="fas fa-caret-down"></i></a>
                        <ul className="sub-menu">
                                    <li>
                                        <a href="#">PTA</a>
                                    </li>
                                    <li>
                                        <a href="#">ENDOWMENT FUND</a>
                                    </li>
                                    <li>
                                        <a href="#">STUDENT COUNCIL </a>
                                    </li>
                                    <li>
                                        <a href="#">OTHERS </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="#">SCHOOL LEAVERS DESTINATION</a>
                                            </li>
                                            <li>
                                                <a href="#">ALUMNI</a>
                                            </li>
                                            <li>
                                                <a href="#">NEWS</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                    </li>
                    <li className="move-right btn">
                            <Link to="/PortalLogin">PORTAL LOGIN</Link>
                    </li>
                </ul>
                
            </nav>
            <script src="script.js"></script>
        </div>
      
 
  )
}


export default Navbar;
