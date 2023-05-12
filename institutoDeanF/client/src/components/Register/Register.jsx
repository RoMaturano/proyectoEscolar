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

        <Link to="/"><button>Home</button></Link>
<div>

<label htmlFor="name">Name</label>
<input type="text" value={register.name} name="name" onChange={changeHandler}></input>

<label htmlFor="lastName">Last Name</label>
<input type="text" value={register.lastName} name="lastName" onChange={changeHandler} ></input>

<label htmlFor="dni">DNI</label>
<input type="text" value={register.dni} name="dni" onChange={changeHandler}></input>

<label htmlFor="birthDate">BirtDate</label>
<input type="text" value={register.birthDate} name="birthDate" onChange={changeHandler}></input>

<label htmlFor="email">E-mail</label>
<input type="text" value={register.email} name="email" onChange={changeHandler}></input>

<label htmlFor="phone">Phone</label>
<input type="number" value={register.phone} name="phone" onChange={changeHandler}></input>

<label htmlFor="image">Image</label>
<input type="text" value={register.image} name="image" onChange={changeHandler}></input>
</div>


</div>

<div>
    <button type="submit">Send</button>
</div>

    </form>
)


}




export default Register