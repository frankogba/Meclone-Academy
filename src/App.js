import React, {useState} from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Navbar';
import './style.css';
 import Home from "./pages/Home";
import History from "./pages/History";
 import HeadTeacher from "./pages/Headteacher-ddress";
import Vacancy from "./pages/Vacancy";
import Vission from "./pages/Vision-mission";
import PortalLogin from "./pages/PortalLogin";
import Register from './pages/Register';
import VideoPlayer  from './components/VideoPlayer';
// import Login from "./pages/Login";
// import History from "./pages/History";
// import VisionMission from "./pages/Vision";
// import ContactUs from "./pages/Contact";
// import Vacancy from "./pages/Vacancy";
// import Register from "./components/Register";

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {

  //   setCurrentForm(formName);

  // }
 
  
  return (
    <div className="App">
       
       <BrowserRouter>
           <Nav />
           <VideoPlayer />
    <Routes> 

   <Route path="/#" exact component={Home}></Route>
<Route path="/history" component={History}></Route>
<Route path="/headteacher-address" component={HeadTeacher}></Route>
<Route path="/vission-mission" component={Vission}></Route>
 <Route path="/vacancy" component={Vacancy}></Route>
 <Route path="/PortalLogin" component={PortalLogin}></Route>
<Route path="/Register" component={Register}></Route>
{/* <Route path="/Vision, mission" component={VisionMission}></Route>
<Route path="/Contact us" component={ContactUs}></Route>
<Route path="/Vacancy" component={Vacancy}></Route>   */}

     </Routes>
    </BrowserRouter>



    </div>
  );
}

export default App;
