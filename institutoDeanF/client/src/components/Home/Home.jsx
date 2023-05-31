import { Link } from "react-router-dom";
import style from "./Home.module.css"



const Home=()=>{
    const images = [
        'https://lh3.googleusercontent.com/p/AF1QipP4Y8UTv02xM8_g0QYt5dVXfWYbGDn3SEL_0J8b=s680-w680-h510',
        'https://www.institutodeanfunes.edu.ar/wp-content/uploads/2017/11/Instituto-Dean-Funes.jpg',
        'https://1.bp.blogspot.com/-B1LP1Ocws2w/Wt4KTeNknDI/AAAAAAAAC4E/R0qYIteC2koh6X5OhBtPRiisBUV0eh3VACLcBGAs/s1600/IMG_20180419_151011521.jpg',
       
      ];
    
return (
    <div className={style.divcontainer}>
       
       
        <div className={style.containertitle}>
        <h1 className={style.title}> Welcome to educative gestion sistem by Institute Dean Funes </h1>
        </div>
        <div className={style.homephotosContainer} >
         <img className={style.img} src='https://www.institutodeanfunes.edu.ar/wp-content/uploads/2017/11/Instituto-Dean-Funes.jpg'/>

        </div>

        <div className={style.buttomDiv}>    
        <Link to="/register" ><button type="button" className={style.buttomHome}>Register Student</button></Link>
        <Link to="/modify" ><button type="button" className={style.buttomHome}>Modify Student</button></Link>
        <Link to="/grades"><button type="button" className={style.buttomHome}>Load School Note</button></Link>
        <Link to="/students"><button type="button" className={style.buttomHome}>Total Students</button></Link>
        </div>
        







    </div>
)


}




export default Home;


