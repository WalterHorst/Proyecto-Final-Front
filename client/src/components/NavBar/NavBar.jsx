import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import {
  createUserRole,
  userLogOut,
} from "../../redux/Actions/Users/usersActions";
import imagelogo from "../../assets/logo/Logo.png";
import { CartContext } from "../../contexts/ShoppingCartContext";

const NavBar = ({ toggleComponent, userId, userImage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [login, loginState] = useState(true);
  const [cart, setCart] = useContext(CartContext);
  const token = sessionStorage.getItem("jwt_session");

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt_session");
    if (token) {
      loginState(false);
    }
  }, [location]);

  const handleLogout = () => {
    sessionStorage.removeItem("jwt_session");
    dispatch(createUserRole(""));
    dispatch(userLogOut());
    // navigate("/loginRegister");
    loginState(true);
  };

  const handleCart = () => {
    const token = sessionStorage.getItem("jwt_session");
    console.log(token);
    // token ? navigate("/cart") : navigate("/loginRegister")
    if (token) {
      navigate("/cart");
      return;
    }
    alert("Debe ingresar o registrarse");
    navigate("/loginRegister");
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-md navbar-light ${style.navbar}`}>
        <div className="container">
          <Link to="/" className={style.navbar_brand}>
            <img
              src={imagelogo}
              className={style.nav_logo}
              width="60"
              alt="Logo de la página"
            />
          </Link>

          <button
            className={`navbar-toggler ${style.navbar_toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${style.navbar_collapse} collapse navbar-collapse justify-content-between`}
            id="navbarNav"
          >
            <ul className={`navbar-nav ${style.navbar_nav}`}>
              <li className={style.nav_item}>
                <a className={style.nav_link} onClick={() => navigate("/")}>
                  Home
                </a>
              </li>
              <li className={style.nav_item}>
                <a
                  className={style.nav_link}
                  onClick={() => navigate("/store")}
                >
                  Tienda
                </a>
              </li>
              <li className={style.nav_item}>
                <a
                  className={style.nav_link}
                  onClick={() => navigate("/about")}
                >
                  Sobre nosotros
                </a>
              </li>
            </ul>
            <div className={`d-flex ${login ? "" : "always-visible"}`}>
              {login ? (
                <>
                  <button
                    className={`btn btn-sm ${style.btn}`}
                    onClick={() => navigate("/loginRegister")}
                  >
                    Ingresar
                  </button>
                  <button
                    className={`btn btn-sm ${style.btn}`}
                    onClick={() => navigate("/loginRegister")}
                  >
                    Registrarse
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={`btn cart always-visible ${style.btn}`}
                    type="submit"
                  >
                    {login ? (
                      <Link to={`/accountDetail/${userId}`}>
                        (<img src={userImage} />)
                      </Link>
                    ) : (
                      <Link to={`/accountDetail/${userId}`}>
                        <i
                          className={`bi bi-person-circle ${style.custom_icon}`}
                        ></i>
                      </Link>
                    )}
                  </button>
                  <button
                    className={`btn btn-sm ${style.btn}`}
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </>
              )}
              <button
                onClick={handleCart}
                className={`btn cart ${style.btn}`}
                type="submit"
              >
                <i className="bi bi-cart"></i>
                {token && <span>{quantity}</span>}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
