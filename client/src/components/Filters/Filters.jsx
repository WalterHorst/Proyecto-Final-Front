import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCategories,
  filterProducts,
  clearFilters,
  ordered,
} from "../../redux/Actions/Products/productsActions";
import Searchbar from "../SearchBar/SearchBar";

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
    name: undefined,
  });

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

  // Filter string es la query que se pasa por la action
  const createFilterString = (filters_obj) => {
    const filtersArr = [];

    for (const key of Object.keys(filters_obj)) {
      console.log("Key: " + key);
      if (filters_obj[key] && filters_obj[key].length > 0) {
        filtersArr.push("" + key + "=" + filters_obj[key]);
      }
    }
    let filterString = "?";
    filterString += filtersArr.join("&");
    return filtersArr.length ? filterString : "";
  };

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
      const order = sort === alphaSortTypes.alfa_asc;
      dispatch(ordered(order));
      return;
    }

    setFilters((prev) => {
      return { ...prev, sort };
    });

    const filterString = createFilterString({ ...filters, sort });
    dispatch(filterProducts(filterString));
  };

  const searchByName = (name) => {
    setFilters((prev) => {
      return { ...prev, name };
    });
    const filterString = createFilterString({ ...filters, name });

    dispatch(filterProducts(filterString));
  };

  return (
    <>
      <Searchbar onClick={searchByName} />

      <div>
        <p>Filtrar por categoria: </p>

        <select onChange={handleFilter} name="filter">
          <option value={""}>-- Categoria --</option>
          {allCategories.map((category) => (
            <option value={category.name} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <select className="form-control mt-2" onChange={changeMaxPrice}>
          <option value={""}> Precio Max. </option>
          {prices?.map((price, index) => (
            <option value={price} key={index}>
              ${price} ARS
            </option>
          ))}
        </select>
        <select className="form-control mt-2" onChange={changeSort}>
          <option value={""}>-- Ordenar por... --</option>
          <option value={"asc"}>Precio Asc.</option>
          <option value={"desc"}>Precio Desc.</option>
          <option value={alphaSortTypes.alfa_asc}>Alfabetico Asc. </option>
          <option value={alphaSortTypes.alfa_desc}>Alfabetico Desc.</option>
        </select>
        <button
          className="btn btn-secondary mt-2"
          name="clean"
          onClick={handleFilter}
        >
          Restablecer filtros
        </button>

        <div className="col-md-9"></div>
      </div>
    </>
  );
};

export default Filters;
