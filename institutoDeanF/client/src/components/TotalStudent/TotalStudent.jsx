import {  useEffect} from "react";
import { getAllStudents } from "../../Redux/actions";
import { useDispatch} from "react-redux";
import CardsStudents from '../CardsStudents/CardsStudents'
import style from "./TotalStuden.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const TotalStudent=()=>{
    const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getAllStudents())
},[dispatch])


    return(
        <div>
            <h1 className={style.title} >totalStudentLLL</h1>
            <Link to="/"><button className={style.buttom}>Home</button></Link>
            
            <CardsStudents/>
        </div>
    )
    
    }
    
    export default TotalStudent