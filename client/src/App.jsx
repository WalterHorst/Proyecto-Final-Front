import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import FormProduct from "./components/FomProducto/FormProduct";
import FormUser from './components/FormUser/FormUser';
import Home from './views/Home/Home'
import About from './views/About/About'
import LoginRegister from './views/LoginRegister/LoginRegister'
import AccountDetail from './views/AccountDetail/AccountDetail'
import Store from './views/Store/Store'
import Detail from './views/Detail/Detail'
import Faq from "./views/Faq/faq";
import Privacy from "./views/PrivacyP/Privacy";
import Users from './views/Users/Users'
import Sales from './views/Sales/Sales'
// import Cart from './views/Shopping Cart/Cart';
import Cart from './views/Cart/Cart';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { getUserById } from './redux/Actions/Users/usersActions'
import jwtDecode from 'jwt-decode'


// CONSULTAR RUTAS DEFINIDAS POR EL BACK - PDTE AJUSTAR!! 

const App = () => {

  const dispatch = useDispatch()
  const token = sessionStorage.getItem("jwt_session")

  if (token) {
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;
  
    useEffect(() => {
      dispatch(getUserById(userId));
    }, []);
  }
    
  // NO FUNCIONA
  // const userRole = useSelector(state => state.userRole);
  // const navigate = useNavigate();
  // const location = useLocation();

  // const handleAuth = (token) => {
  //   if(!token && location.pathname != "/loginRegister")
  //   {
  //     navigate("/loginRegister");
  //     return false;
  //   }

  //   return true;
  // }

  // // Esto es autenticación y autorización
  // useEffect(() => {
   
  //   const token = sessionStorage.getItem("jwt_session");
  //   const isLogged = handleAuth(token);
    
  //   // Chequea si el usuario está loggeado
  //   if(isLogged)
  //   {
  //     // Si está loggeado e intenta acceder a una página del admin:
  //     if(location.pathname.includes("admin") && userRole != "ADMIN")
  //     {
  //       // Si no es admin es rechazado
  //       navigate("/");
  //     }
  //   }
  // }, [location, userRole]);
  // NO FUNCIONA

  return (
    <div>
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formProduct" element={<FormProduct/>}></Route>
          <Route path='/formUser' element={<FormUser/>}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/loginRegister" element={<LoginRegister />} />
          <Route path="/accountDetail/:id" element={<AccountDetail />} />
          <Route path="/store" element={<Store />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/preguntas-frecuentes" element={<Faq />} />
          <Route path="/politica-de-privacidad" element={<Privacy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sales" element={<Sales />} />

          <Route path="/adminLogin" element={<LoginRegister />} />
          <Route path="/adminStore" element={<Store />} />
          <Route path="/adminUsers" element={<Users />} />
          <Route path="/adminSales" element={<Sales />} />
        </Routes>
        <Footer/>
      </ShoppingCartProvider>
    </div>
  );
};

export default App;