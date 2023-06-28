import style from "./Modify.module.css";
import React, { useState } from "react";
import axios from "axios";
import FooterPag from "../Footer/FooterPag";


const ModifyStudent = () => {
  
  const [formModify, setFormModify] = useState({
    id: "",
    name: "",
    lastName: "",
    dni: 0,
    birthDate: "",
    email: "",
    phone: "",
    image: "",
  });
   
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3001/student", formModify)
      .then((res) => alert(res));

  };

  const changeHandler = (e) => {
   
    setFormModify({
      ...formModify,
      [e.target.name]: e.target.value,
    });
  };

  return (
        <form onSubmit={submitHandler} className={style.divbody}>
        <div  className={style.divcontainer}>
          <div>
         
          <h1 className={style.title}>Modificar estudiante</h1>
          </div>
          <div className={style.conteinerDivDivs}>
            <div className={style.divLabelInput}>
              <label htmlFor="id"  className={style.label}>ID</label>
              <input
                type="text"
                name="id"
                value={formModify.id}
                onChange={changeHandler}
                className={style.input}
                />
              
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="name" className={style.label}>Nombre</label>
              <input
                type="text"
                name="name"
                value={formModify.name}
                onChange={changeHandler}
                className={style.input}
                />
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="lastName" className={style.label}>Apellido</label>
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
             
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="birthDate" className={style.label}>Fecha de nacimiento</label>
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
              <label htmlFor="phone" className={style.label}>Telefono</label>
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
            <button type="submit" className={style.buttomSend}>ACEPTAR</button>
          </div>
          <FooterPag/>
        </div>
        </form>
   
  
  );
};

export default ModifyStudent;
