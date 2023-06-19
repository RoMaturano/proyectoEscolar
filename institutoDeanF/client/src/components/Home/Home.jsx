import { Link } from "react-router-dom";
import style from "./Home.module.css"
import NavBar from "../Nav/NavBar"


const Home=()=>{
    // const images = [
    //     'https://lh3.googleusercontent.com/p/AF1QipP4Y8UTv02xM8_g0QYt5dVXfWYbGDn3SEL_0J8b=s680-w680-h510',
    //     'https://www.institutodeanfunes.edu.ar/wp-content/uploads/2017/11/Instituto-Dean-Funes.jpg',
    //     'https://1.bp.blogspot.com/-B1LP1Ocws2w/Wt4KTeNknDI/AAAAAAAAC4E/R0qYIteC2koh6X5OhBtPRiisBUV0eh3VACLcBGAs/s1600/IMG_20180419_151011521.jpg',
       
    //   ];
    
return (
    <body className={style.divcontainer}>
        <header className={style.header}>
            <div className={style.img}>
                
            </div>
           
            <div className={style.div1}>
                <Link to="/"><h2 className={style.t1}>INSTITUCION EDUCATIVA</h2></Link>
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


