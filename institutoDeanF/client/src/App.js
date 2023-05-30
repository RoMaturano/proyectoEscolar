
import Detail from "./components/Detail/Detail"
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import TotalStudent from "./components/TotalStudent/TotalStudent"
import {Route,Switch} from "react-router-dom";
import React  from 'react';
import ModifyStudent from "./components/ModifyStudent/ModifyStudent"
import Grades from "./components/Grades/Grades"


function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" render={()=><Home/>} />
        <Route path="/register" render={()=><Register/>}/>
         <Route path = "/detail/:id" render={()=><Detail/>}></Route> 
        <Route path = "/students" render={()=><TotalStudent/>}></Route>
        <Route path = "/modify" render={()=><ModifyStudent/>}></Route>
        <Route path = "/grades" render={()=><Grades/>}></Route>
      </Switch>
    </div>
  );
}

export default App;
