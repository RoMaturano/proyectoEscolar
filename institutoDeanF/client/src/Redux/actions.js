import {GET_ALL_STUDENTS,GET_BY_NAME} from "./actionsTypes"
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

export const get_by_name=(name)=>{
    return async (dispatch)=>{
        
            let data;
            const  response= await axios.get(`http://localhost:3001/student/${name}`)
            const responseAll=await axios.get(`http://localhost:3001/student`)  
            const dataAll= responseAll.data
            
            let dataF=response?.data
           //console.log(dataF,"DATAAAAA")
           if(dataF.length>0){
            data=dataF
           }else{
            alert("No existe el nombre buscado")
            data=dataAll
           }
            console.log(data,"data final");
            return dispatch({
                type:GET_BY_NAME,
                payload: data
            })
       
    }    
}