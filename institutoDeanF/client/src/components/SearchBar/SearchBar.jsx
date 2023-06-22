import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {get_by_name} from "../../Redux/actions"



const SearchBar=()=>{
const dispatch = useDispatch()
const [name, setName]=useState("")


const handleInputChange=(event)=>{
    //console.log(event.target.value,"event.target.value");
setName(event.target.value)
}

const handleSubmit=(event)=>{
    event.preventDefault()

  dispatch(get_by_name(name)) 
}


return (
    <div >
        <input type='text' placeholder="insert name..." onChange={(event)=>handleInputChange(event)} />
        <button type='submit' onClick={(event)=>handleSubmit(event)} >BUSCAR</button>
    </div>
)


}


export default SearchBar