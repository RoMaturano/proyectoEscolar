import Validation from "./Validation"
import { useState, useEffect } from "react";




const Login=({ login })=>{
    const [userData, setUserData] = useState({
        username: "",
        password: "",
      });
      const [errors, setErrors] = useState({
        username: "",
        password: "",
      });
      
  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(Validation({// le paso todo a medida que la persona va a escribiendo
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  useEffect(() => {
    Validation(userData);
  }, [userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };



return(
    <form onSubmit={handleSubmit} className="formu">
      <label className="lblForm" htmlFor="username"> Usuario</label><br />
      <input className="inputForm" onChange={handleInputChange} value={userData.username} name="username" type="text" maxLength="35"/> <br /> <br />
      {errors.username && <p className="pError">{errors.username}</p>}
      
       
      <label className="lblForm" htmlFor="password"> Contraseña</label><br />
      <input className="inputForm"onChange={handleInputChange} value={userData.password}name="password"type="text" /> <br /> <br />
      {errors.password && <p className="pError">{errors.password}</p>} <br />
     
      <button className="btnForm">Login</button>
    </form>
)




}

export default Login