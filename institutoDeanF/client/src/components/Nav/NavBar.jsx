import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar=()=>{
    return(
        <div className={style.divContainer}>
            
        <div className={style.buttomDiv}>    
        <Link to="/register" ><button type="button" className={style.buttom}>Register Student</button></Link>
        <Link to="/modify" ><button type="button" className={style.buttom}>Modify Student</button></Link>
        <Link to="/grades"><button type="button" className={style.buttom}>Load School Note</button></Link>
        <Link to="/students"><button type="button" className={style.buttom}>Total Students</button></Link>
        </div>

        
        </div>
    )
}

export default NavBar