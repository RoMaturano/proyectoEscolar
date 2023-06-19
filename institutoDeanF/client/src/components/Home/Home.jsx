import { Link } from "react-router-dom";
import style from "./Home.module.css"
import NavBar from "../Nav/NavBar"


const Home=()=>{
   
    
return (
    <body className={style.divcontainer}>
        <header className={style.header}>
            <div className={style.img}>
                
            </div>
           
            <div className={style.div1}>
                <Link to="/"><h2 className={style.t1}>INSTITO PRIVADO</h2></Link>
                <Link to="/"><h2 className={style.t2}>DEAN FUNES</h2></Link>
            </div>
            <div className={style.div2}>
                <NavBar/>  
            </div>
        </header>
        <main className={style.contenido}>
            <hr className={style.hr1}></hr>
            <h1>Bienvenido al sistema educativo de autogestion para la Institucion Dean Funes</h1>
            <hr className={style.hr2}></hr>
        </main>
    </body>
)


}




export default Home;


