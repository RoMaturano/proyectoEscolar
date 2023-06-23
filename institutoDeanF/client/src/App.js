
import Detail from "./components/Detail/Detail"
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import TotalStudent from "./components/TotalStudent/TotalStudent"
import {Route,Switch,useLocation,useHistory  } from "react-router-dom";
import { useState } from "react";
import React  from 'react';
import ModifyStudent from "./components/ModifyStudent/ModifyStudent"
import Grades from "./components/Grades/Grades"
import "./App.css"
import SchoolData from "./components/SchoolData/SchoolData";
import Attendance from "./components/Attendance/Attendance"
import Admin from "./components/Administrator/Admin.jsx/Admin";
import Login from "./components/Login/Login";
import CrearUsuario from "./components/Administrator/CrearUsuario/CrearUsuario";
import EditarUsuario from "./components/Administrator/EditarUsuario/EditarUsuario"
import Bannear from "./components/Administrator/Bannear/BannearUsuario";

function App() {
  const location = useLocation();
//  const redirect = redirect()
  const history=useHistory()
  const username = "romaturano96@gmail.com";
  const password = "26rocio";
  const [access, setAccess] = useState(false);
  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      history.push("/home");
    }
  };

  // const loc = useLocation();
  // //  const redirect = redirect()
  //   const his=useHistory()
  //   const userAdmin = "romaturano96@gmail.com";
  //   const passwordAdmin = "26rocio";
  //   const [acc, setAcc] = useState(false);
  //   const loginAdmin = (userAdmin) => {
  //     if (userAdmin.username === username && userAdmin.password === password) {
  //       setAcc(true);
        
  //     }
  //   };


  
  return (
    <div className='app' >
            {location.pathname === "/" ? <Login login={login} />  : " "}
            {/* {location.pathname === "/usuario" ? <LoginAdmin  loginAdmin={ loginAdmin} />  : <Admin/>} */}
      <Switch>
      <Route exact path="/home" render={()=><Home/>}/>
        <Route exact path="/register" render={()=><Register/>}/>
        <Route exact path = "/detail/:id" render={()=><Detail/>}></Route> 
        <Route exact path = "/students" render={()=><TotalStudent />}></Route>
        <Route exact path = "/modify" render={()=><ModifyStudent/>}></Route>
        <Route exact path = "/grades" render={()=><Grades/>}></Route>
        <Route exact path = "/data" render={()=><SchoolData/>}></Route>
        <Route exact path = "/attendance" render={()=><Attendance/>}></Route>
         <Route exact path="/usuario" render={()=><Admin/>} /> 
         <Route exact path = "/crear" render={()=><CrearUsuario/>}></Route> 
         <Route exact path = "/editar" render={()=><EditarUsuario/>}></Route> 
          <Route exact path = "/bannear" render={()=><Bannear/>}></Route> 
          
      </Switch>
    </div>
  );
}

export default App;
