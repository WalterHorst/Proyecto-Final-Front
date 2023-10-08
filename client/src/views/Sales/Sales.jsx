import { useEffect } from "react";
import CardsShop from "../../components/CardsShop/CardsShop";
import style from "./Sales.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../redux/Actions/Users/usersActions";
import jwtDecode from "jwt-decode";

const Sales = () => {
  const token = sessionStorage.getItem("jwt_session");
  const { id } = jwtDecode(token);
  const [user] = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  const compras = [
    {
      date: "05/10/2023",
      id: "vslfnj23498ad",
      total: 23.342,
      name: "Pelota",
      units: 3,
      image: "image",
    },
    {
      date: "24/11/2024",
      id: "lñajasfdasd234",
      total: 10.424,
      name: "Comida",
      units: 1,
      image: "image",
    },
  ];

  return (
    <div>
      <h1 className={style.title}>Mis compras</h1>
      <CardsShop compras={compras} />
      {/* <CardsShop compras={user.sales}/> */}
    </div>
  );
};

export default Sales;
