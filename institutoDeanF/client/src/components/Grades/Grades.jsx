import style from "./Grades.module.css"
import { Link } from "react-router-dom";
import NavBar from "../Nav/NavBar";



const Grades=()=>{
    return(
        <div>
            <NavBar/>
            <h1>Grades</h1>

            <Link to="/"><button className={style.butom}>Home</button></Link>
        </div>
    )
}

export default Grades