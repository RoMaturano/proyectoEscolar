import style from "./Modify.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

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
        <h1>Modify student</h1>
      </div>
      
          <div>
            <label htmlFor="id">Id</label>
            <input
              type="text"
              name="id"
              value={formModify.id}
              onChange={changeHandler}
            />
            {errors.id && <span className={style.span}>{errors.id}</span>}
          </div>

          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formModify.name}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              name="lastName"
              value={formModify.lastName}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="dni">DNI</label>
            <input
              type="number"
              name="dni"
              value={formModify.dni}
              onChange={changeHandler}
            />
            {errors.dni && <span className={style.span}>{errors.dni}</span>}
          </div>

          <div>
            <label htmlFor="birthDate">BirthDate</label>
            <input
              type="text"
              name="birthDate"
              value={formModify.birthDate}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={formModify.email}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={formModify.phone}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              value={formModify.image}
              onChange={changeHandler}
            />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
          <Link to="/"> <button className={style.butom}>Home</button></Link>
        </form>
   
  
  );
};

export default ModifyStudent;
