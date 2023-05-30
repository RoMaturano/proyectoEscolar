import { Link } from "react-router-dom";
import style from "./Home.module.css"

const Home=()=>{

return (
    <div className={style.divcontainer}>
       
       
        <div className={style.title}>
        <h1> Welcome to educative gestion sistem by Institute Dean Funes </h1>
        </div>

        <div className={style.buttomDiv}>    
        <Link to="/register" ><button className={style.butom}>Register Student</button></Link>
        <Link to="/modify" ><button className={style.butom}>Modify Student</button></Link>
        <Link to="/grades"><button className={style.butom}>Load School Note</button></Link>
        <Link to="/students"><button className={style.butom}>Total Students</button></Link>
        </div>
        







    </div>
)


}




export default Home;


