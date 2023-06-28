import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "./Banned.module.css"

const Banned=()=>{

    const dispatch=useDispatch()
    const [bannedUser, setBannerUser] = useState({
        idStaffTeacher: "",
        banned:"",
       
      });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/staffB", bannedUser).then((res) => alert(res));
    
      };

    const selectBanned=(e)=>{
        setBannerUser({
         ...bannedUser,
         banned:e.target.value
        })
       }
       const changeHandler = (e) => {
     
        setBannerUser({
          ...bannedUser,
          [e.target.name]: e.target.value,
        });
      };
   

    return(
        <form onSubmit={submitHandler} >

        <div>
            <h1>BANNED</h1>
            <div className={style.divLabelInput}>
              <label htmlFor="idStaffTeacher"  className={style.label}>ID</label>
              <input
                type="text"
                name="idStaffTeacher"
                value={bannedUser.idStaffTeacher}
                onChange={changeHandler}
                className={style.input}
                />
          
            </div>



            <div >
              <select name="banned"  onChange={selectBanned}>
                <option value="">Elegir Opcion</option>
                <option value="active">Activo</option>
                <option value="inactivo">Inactivo</option>
             
                </select>
            </div>
            <Link to="/editar"><button>Editar</button></Link>
            <Link to="/usuario"><button>Admin</button></Link>
            <div className={style.buttomDiv}>
            <button type="submit" className={style.butom}>ACEPTAR</button>
          </div>
        </div>
        </form>
    )
}


export default Banned