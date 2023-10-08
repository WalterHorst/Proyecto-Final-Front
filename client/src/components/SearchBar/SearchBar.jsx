import style from "./Searchbar.module.css"; 
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../redux/Actions/Products/productsActions";
// import { searchUsers, setSearchType } from '../../redux/Actions/Users/usersActions';

function Searchbar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getProductByName(name));
    setName("");
  };

  return (
    <div className={`container mt-3 ${style.searchContainer}`}>
      <div className={`input-group mb-3 ${style.inputGroup}`}>
        <input
          type="search"
          className={`form-control ${style.searchInput}`}
          placeholder="Buscar producto"
          aria-label="Buscar producto"
          aria-describedby="button-addon2"
          onChange={(event) => {
            handleChange(event);
          }}
          value={name}
        />
        <div className={`input-group-append ${style.buttonGroup}`}>
          <button
            className={`btn ${style.btnCustom}`}
            type="button"
            id="button-addon2"
            onClick={(event) => {
              handleSearch(event);
            }}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;


// function Searchbar(component) {
//  const dispatch = useDispatch();
//   const searchType = useSelector((state) => state.searchType);
//   const [info, setInfo] = useState("");
//   dispatch(setSearchType(component));

//   const HandleChange = (event) => {
//     setInfo(() => {
//       const searched = event.target.value;
//       console.log(searchType);
//       if (searchType === "products") {
//         dispatch(searchProducts(searched));
//         return searched;
//       } else if (searchType === "users") {
//         dispatch(searchUsers(searched));
//         return searched;
//       }
//     });
//   };
//   return (
//     <div>
//       <input type="search" value={info} onChange={HandleChange} />
//     </div>
//   );
