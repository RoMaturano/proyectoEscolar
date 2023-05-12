import {GET_ALL_STUDENTS} from "./actionsTypes"
import axios from "axios"


export const getAllStudents=()=>{

return   async(dispatch)=>{

    const response = await axios.get(`http://localhost:3001/student`)

    const data=response.data

   dispatch({
    type:GET_ALL_STUDENTS,
    payload:data
   })

}

}