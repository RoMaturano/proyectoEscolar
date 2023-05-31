import style from "./Modify.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import NavBar from "../Nav/NavBar";
 import validations from "./Validation"

const ModifyStudent = () => {
  
    

  const [formModify, setformModify] = useState({
    id: "",
    name: "",
    lastName: "",
    dni: 0,
    birthDate: "",
    email: "",
    phone: "",
    image: "",
  });
   const [errors,setErrors]=useState({})
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3001/student", formModify)
      .then((res) => alert(res));

  };

  const changeHandler = (e) => {
    setErrors(validations({...formModify,[e.target.name]:e.target.value}))
    setformModify({
      ...formModify,
      [e.target.name]: e.target.value,
    });
  };

  return (
  
     
        <form onSubmit={submitHandler}>
             <div>
              <NavBar/>
        <h1 className={style.title}>Modify student</h1>
      </div>
          <div className={style.conteinerDivDivs}>

          <div className={style.divLabelInput}>
            <label htmlFor="id"  className={style.label}>Id</label>
            <input
              type="text"
              name="id"
              value={formModify.id}
              onChange={changeHandler}
              className={style.input}
              />
            {errors.id && <span className={style.span}>{errors.id}</span>}
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="name" className={style.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formModify.name}
              onChange={changeHandler}
              className={style.input}
              />
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="lastName" className={style.label}>LastName</label>
            <input
              type="text"
              name="lastName"
              value={formModify.lastName}
              onChange={changeHandler}
              className={style.input}
            />
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="dni" className={style.label}>DNI</label>
            <input
              type="number"
              name="dni"
              value={formModify.dni}
              onChange={changeHandler}
              className={style.input}
              />
            {errors.dni && <span className={style.span}>{errors.dni}</span>}
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="birthDate" className={style.label}>BirthDate</label>
            <input
              type="text"
              name="birthDate"
              value={formModify.birthDate}
              onChange={changeHandler}
              className={style.input}
              />
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="email" className={style.label}>Email</label>
            <input
              type="text"
              name="email"
              value={formModify.email}
              onChange={changeHandler}
               className={style.input}
            />
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="phone" className={style.label}>Phone</label>
            <input
              type="text"
              name="phone"
              value={formModify.phone}
              onChange={changeHandler}
              className={style.input}
              />
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="image" className={style.label}>Image</label>
            <input
              type="text"
              name="image"
              value={formModify.image}
              onChange={changeHandler}
               className={style.input}
               />
          </div>
               </div>
          <div className={style.buttomDiv}>
            <button type="submit" className={style.buttomSend}>Send</button>
          <Link to="/"> <button className={style.butom}>Home</button></Link>
          </div>
        </form>
   
  
  );
};

export default ModifyStudent;
