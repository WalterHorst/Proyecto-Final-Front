import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCategories,
  filterProducts,
  clearFilters,
} from "../../redux/Actions/Products/productsActions";
import style from "./Filters.module.css";

const alphaSortTypes = {
  alfa_asc: "alfa_asc",
  alfa_desc: "alfa_desc",
};

const Filters = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);
  

  const prices = [100, 500, 5000, 7500, 10000, 25000];

  const [filters, setFilters] = useState({
    category: undefined,
    price: undefined,
    sort: undefined,
  });

  // Agregar estado para controlar la visibilidad de los filtros y el botón "Restablecer filtros"
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleFilter = (event) => {
    const { name, value } = event.target;
    if (name === "filter") {
      setFilters((prev) => {
        return {
          ...prev,
          category: value,
        };
      });
      const filterString = createFilterString({ ...filters, category: value });
      dispatch(filterProducts(filterString));
    } else dispatch(clearFilters());
  };

  const toggleFiltersVisibility = () => {
    setFiltersVisible(!filtersVisible);
  };

   // Definir las funciones changeMaxPrice y changeSort
   const changeMaxPrice = (event) => {
    const price = event.target.value;
    setFilters((prev) => {
      return { ...prev, price };
    });

    const filterString = createFilterString({ ...filters, price });
    dispatch(filterProducts(filterString));
  };

  const changeSort = (event) => {
    const sort = event.target.value;

    if (alphaSortTypes[sort]) {
      console.log("EL SORT ES: " + sort);
      const order = sort === alphaSortTypes.alfa_asc;
      console.log("ORDEN ES: " + order);
      dispatch(ordered(order));
      return;
    }

    setFilters((prev) => {
      return { ...prev, sort };
    });

    const filterString = createFilterString({ ...filters, sort });
    dispatch(filterProducts(filterString));
  };

  return (
    <div className="container">
      <div className="row">
        <div className={`col-md-3 d-md-block ${style.sideB}`}>
          <div id="sidebar" className={`sidebar ${filtersVisible ? style.visible : ''}`}>
            <div className="d-flex justify-content-center mt-2">
              <button
                className="btn btn-outline-primary"
                name="toggleFilters"
                onClick={toggleFiltersVisibility}
              >
                Filtros y Ordenamientos
              </button>
            </div>
            {filtersVisible && (
              <div>
                <ul className="navbar-nav d-flex flex-column mt-5 w-100">
              {/* Filtro */}
              <li className="nav-item dropdown w-100">
                {allCategories.length > 0 ? (
                  <select
                    className="form-control mt-2"
                    onChange={handleFilter}
                    name="filter"
                    style={{ color: "black" }}
                  >
                    <option value="" disabled selected hidden>
                      Categorías
                    </option>
                    {allCategories.map((category) => (
                      <option value={category.name} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Cargando categorías...</p>
                )}
              </li>
              {/* Filtro */}
              <li className="nav-item w-100">
                <select className="form-control mt-2" onChange={changeMaxPrice}>
                  <option
                    value={""}
                    className={`nav-link text-light pl-4 ${style.navLink}`}
                  >
                    Precio Máximo
                  </option>
                  {prices?.map((price, index) => (
                    <option value={price} key={index}>
                      ${price} ARS
                    </option>
                  ))}
                </select>
              </li>
              {/* Ordenamiento */}
              <li>
                <select className="form-control mt-2" onChange={changeSort}>
                  <option
                    value={""}
                    className={`nav-link text-light pl-4 ${style.navLink}`}
                  >
                    Ordenar por
                  </option>
                  <option value={"asc"}>Precio Ascendente</option>
                  <option value={"desc"}>Precio Descendente</option>
                  <option value={alphaSortTypes.alfa_asc}>
                    Alfabético Ascendente
                  </option>
                  <option value={alphaSortTypes.alfa_desc}>
                    Alfabético Descendente
                  </option>
                </select>
              </li>
              </ul>
                <div className="d-flex justify-content-center mt-2">
                  <button
                    className="btn btn-secondary"
                    name="clean"
                    onClick={handleFilter}
                  >
                    Restablecer filtros
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;