import { Link } from "react-router-dom";


const Home=()=>{

return (
    <div>

        <h1> Welcome to educative gestion sistem by Institute Dean Funes </h1>

        <div>
        <Link to="/register" ><button >Register Student</button></Link>
        <Link to="" ><button>Modify Student</button></Link>
        <Link to=""><button>Load School Note</button></Link>
        <Link to="/students"><button>Total Students</button></Link>
        </div>
        







    </div>
)


}




export default Home;


