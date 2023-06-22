import {  useEffect} from "react";
import { getAllStudents } from "../../Redux/actions";
import { useDispatch} from "react-redux";
import CardsStudents from '../CardsStudents/CardsStudents'
import style from "./TotalStuden.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../Nav/NavBar";
import SearchBar from "../SearchBar/SearchBar"

const TotalStudent=()=>{
    const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getAllStudents())
},[dispatch])


    return(
        <div>
            <NavBar/>
            <h1 className={style.title} >totalStudentLLL</h1>
            <Link to="/"><button className={style.buttom}>Home</button></Link>
            <SearchBar ></SearchBar>

            <CardsStudents/>
        </div>
    )
    
    }
    
    export default TotalStudent