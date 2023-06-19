import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar=()=>{
    return(
        <div className={style.header}>
            
        <div className={style.nav}>    
        <Link to="/" ><button type="button" className={style.buttom}>Inicio pagina</button></Link>
        <Link to="/register" ><button type="button" className={style.buttom}>Registrar estudiante</button></Link>
        <Link to="/modify" ><button type="button" className={style.buttom}>Modificar estudiante</button></Link>
        <Link to="/grades"><button type="button" className={style.buttom}>Cargar nota escolar</button></Link>
        <Link to="/students"><button type="button" className={style.buttom}>Total estudiantes</button></Link>
        </div>

        
        </div>
    )
}

export default NavBar