import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllStaff } from "../../../Redux/actions";
import CardsUsers from "../CardsUsers/CardsUsers";
import { Link } from "react-router-dom";
import style from "./AllUser.module.css"

const AllUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStaff());
  }, [dispatch]);

  return (
    <div>
      <h1>
        all user
        <CardsUsers/>
        <Link to="usuario">
          <button className={style.button}>Volver</button>
        </Link>
        <Link to="banned">
          <button className={style.button}>Banned</button>
        </Link>
      </h1>
    </div>
  );
};

export default AllUser;
