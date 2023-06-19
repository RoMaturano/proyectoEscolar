import { Link } from "react-router-dom"
import style from "./Card.module.css"

const CardStudent=(student)=>{
    return (
        <div className={style.cardContainer}>
                <Link to={`detail/${student.id}`} >
                <h2>Name: {student.name}</h2>
                </Link>

                <h3>Lastname:{student.lastName}</h3>
                <h3>DNI: {student.dni}</h3>
                <h3>birthDate: {student.birthDate}</h3>


                <div>
                    
            <img src={student.imageURL?student.imageURL :student.image} alt="img not insert" className={style.divimage}  ></img>

                </div>




        </div>
    )
}


export default CardStudent

