import { Link } from "react-router-dom"
import style from "./Card.module.css"

const CardStudent=({id,name,lastName,dni,birthDate,image})=>{
    return (
        <div className={style.cardContainer}>
                <Link to={`detail/${id}`} >
                <h2>Name: {name}</h2>
                </Link>

                <h3>Lastname:{lastName}</h3>
                <h3>DNI: {dni}</h3>
                <h3>birthDate: {birthDate}</h3>


                <div>
            <img src={image} alt="img not insert" className={style.divimage}  ></img>

                </div>




        </div>
    )
}


export default CardStudent

