import { Link,useHistory } from "react-router-dom";
import style from "./Register.module.css"
import { useState } from "react";
import axios from "axios"

const Register=()=>{

const history=useHistory()
const [register,setRegister]= useState({
    name:"",
    lastName:"",
    dni:0,
    birthDate:"",
    email:"",
    phone:0,
    image:""
})

const changeHandler=(event)=>{
    setRegister({...register,
        
    [event.target.name]:event.target.value,
   
    })
}

const submitHandler=(event)=>{
    event.preventDefault()
console.log(register,"esto es el register enviado")
    axios.post("http://localhost:3001/student",register)
    .then(res=>alert(res))
    history.push('/')
}


return(
    <form onSubmit={submitHandler}>

    <div>
        <h1 className={style.title}>REGISTER</h1>

<div className={style.conteinerDivDivs}>
<div>
<label htmlFor="name" className={style.label}>Name</label>
<input type="text" value={register.name} name="name" onChange={changeHandler} />
</div>
<div>
<label htmlFor="lastName" className={style.label}>Last Name</label>
<input type="text" value={register.lastName} name="lastName" onChange={changeHandler} />
</div>
<div>
<label htmlFor="dni" className={style.label}>DNI</label>
<input type="text" value={register.dni} name="dni" onChange={changeHandler}/>
</div>
<div>
<label htmlFor="birthDate" className={style.label}>BirtDate</label>
<input type="text" value={register.birthDate} name="birthDate" onChange={changeHandler}/>
</div>
<div>
<label htmlFor="email" className={style.label}>E-mail</label>
<input type="text" value={register.email} name="email" onChange={changeHandler}/>
</div>
<div>
<label htmlFor="phone" className={style.label}>Phone</label>
<input type="number" value={register.phone} name="phone" onChange={changeHandler}/>
</div>

<div>
<label htmlFor="image" className={style.label}>Image</label>
<input type="text" value={register.image} name="image" onChange={changeHandler}/>
</div>
</div>


</div>

<div className={style.buttomDiv}>
    <button type="submit" className={style.butom}>Send</button>
    <Link to="/"><button className={style.butom}>Home</button></Link>
</div>

    </form>
)
/**
 * En React, las etiquetas <input> se consideran elementos vacíos y no deben tener contenido ni etiquetas de cierre.
*/

}




export default Register