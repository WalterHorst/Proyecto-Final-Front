import { GET_PRODUCTS, 
    GET_PRODUCT_NAME, 
    GET_PRODUCT_ID, 
    GET_PRODUCTS_CATEGORIES, 
    CREATE_PRODUCT, 
    UPDATE_PRODUCT, 
    DELETE_PRODUCT, 
    GET_FILTERED_PRODUCTS,
    CLEAR_FILTERS, 
    SEARCH_PRODUCTS, 
    ORDERED 
} from "../action-types";
import axios from "axios";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      console.log(sessionStorage.getItem("jwt_session"))
      const { data } = await axios.get(
        "https://pf-back-deploy.onrender.com/product",
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("jwt_session"),
          },
          
        }
      )

      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const getProductByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://pf-back-deploy.onrender.com/product?name=${name}`,
        {
          headers: {
            Authorization:"Bearer " + sessionStorage.getItem("jwt_session"),
          }
        }
      )

      dispatch({
        type: GET_PRODUCT_NAME,
        payload: data,
      })
    } catch (error) {
      console.log(error);
    }
  }
};

export const getProductByID = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://pf-back-deploy.onrender.com/product/${id}`,
        {
          headers: {
            Authorization:"Bearer " + sessionStorage.getItem("jwt_session"),
          }
        }
      )

      dispatch({
        type: GET_PRODUCT_ID,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
};

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://pf-back-deploy.onrender.com/category",
        {
          headers: {
            Authorization:"Bearer " + sessionStorage.getItem("jwt_session"),
          }
        }
      );

      dispatch({
        type: GET_PRODUCTS_CATEGORIES,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
};

export const createProduct = (body) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://pf-back-deploy.onrender.com/product",
        body,
        {
          headers: {
            Authorization:"Bearer " + sessionStorage.getItem("jwt_session"),
          }
        },
      );

      dispatch({
        type: CREATE_PRODUCT,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
};

export const updateProduct = (id, body) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `https://pf-back-deploy.onrender.com/product/${id}`,
        body,
        {
          headers: {
            Authorization:"Bearer " + sessionStorage.getItem("jwt_session"),
          }
        },
      )
      dispatch({
        type: UPDATE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://pf-back-deploy.onrender.com/product/${id}`,
      {
        headers: {
          Authorization:"Bearer " + sessionStorage.getItem("jwt_session"),
        }
      }
      )

      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      })
    } catch (error) {
      console.log(error)
    }
  }
};

export const filterProducts = (filter) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://pf-back-deploy.onrender.com/product${filter}`,
        {
          headers: {
            Authorization:"Bearer " + sessionStorage.getItem("jwt_session"),
          }
        },
      )

      if(typeof data === 'string') {
        dispatch({
          type: GET_FILTERED_PRODUCTS,
          payload: []
      })
      }
        dispatch({
            type: GET_FILTERED_PRODUCTS,
            payload: data
        })
      } catch (error) {
          console.log(error)
      }
  }
};

export const clearFilters = () => {
    return async (dispatch) => {
        try {
            dispatch({ type:CLEAR_FILTERS })
        }catch (error) {
            alert(error.response.data) 
        }
    }
};

export const searchProducts = (searched) => {
    return { type: SEARCH_PRODUCTS, payload: searched };
};

export const ordered = (order) => {
  return { type: ORDERED, payload: order }
};