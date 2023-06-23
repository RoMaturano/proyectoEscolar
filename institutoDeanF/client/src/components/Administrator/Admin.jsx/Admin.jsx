import { Link } from "react-router-dom";

 



const Admin =()=>{
 //   http://localhost:3001/staff
return(
    <div>
        <div>
        <h1>ADMINISTRADOR</h1>

   </div>

<div>
    <Link to="/crear" ><button>Crear</button></Link>
    <Link to="/editar" ><button>Editar</button></Link>
    <Link to="/bannear" ><button>Bannear</button></Link>
    <Link to="/habilitar" ><button>Habilitar</button></Link>

</div>





    </div>
)








}

export default Admin