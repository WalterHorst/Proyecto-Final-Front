import { GET_PRODUCTS, 
  GET_PRODUCT_NAME, 
  GET_PRODUCT_ID, 
  GET_PRODUCTS_CATEGORIES, 
  CREATE_PRODUCT, 
  UPDATE_PRODUCT, 
  DELETE_PRODUCT, 
  GET_FILTERED_PRODUCTS, 
  CLEAR_FILTERS, 
  ROLE, 
  SET_SEARCH_TYPE,
  SEARCH_USERS,
  SEARCH_PRODUCTS,
  ORDERED,
  GET_USER_BY_ID, 
  USER_LOG_OUT,
  SET_USER
} from "../Actions/action-types";

const initialState = {
    products: [],
    productsCopy: [],
    categories: [],
    updatedProduct: [],
    userLogged: [],
    users: [],
    userRole: "",
    allUsers: [],
    searchType: "users",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                productsCopy: action.payload
            };
        case GET_PRODUCTS_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case GET_PRODUCT_NAME:
            return {
                ...state,
                products: action.payload
            };
        case GET_PRODUCT_ID:
            return {
                ...state,
                products: [action.payload]
            };
        case CREATE_PRODUCT:
            return {
                ...state,
                products: action.payload
            };
        case UPDATE_PRODUCT:
            state.updatedProduct = action.payload;
            return {
                ...state
            };
        case DELETE_PRODUCT:
            const productToDelete = action.payload;
            const fileteredProducts = state.products.filter((product) => product.id !== productToDelete);
            return {
                ...state,
                products: fileteredProducts
            }
        case GET_FILTERED_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case CLEAR_FILTERS:
            return {
                ...state,
                products: [...state.productsCopy]
            }
        case ROLE:
            return {...state, userRole: action.payload};

          case SET_SEARCH_TYPE:
            return { ...state, searchType: action.payload.component 
            };
          case SEARCH_USERS:
            return {
              ...state,
              products: state.allUsers.filter((user) =>
                user.name.toUpperCase().includes(action.payload.toUpperCase())
              ),
            };
          case SEARCH_PRODUCTS:
            return {
              ...state,
              products: state.productsCopy.filter((product) =>
                product.name.toUpperCase().includes(action.payload.toUpperCase())
              ),
            };
          case ORDERED: {
            const sortedProducts = [...state.products].sort((a, b) => {
              if (action.payload) {
                return a.name.localeCompare(b.name);
              } else {
                return b.name.localeCompare(a.name);
              }
            });
            return {
              ...state,
              products: sortedProducts,
            };
          }

          case SET_USER: {
            return {
              ...state,
              userLogged: [action.payload]
            }
          }

          case GET_USER_BY_ID: {
            return {
              ...state,
              userLogged: [action.payload]
            }
          }

          case USER_LOG_OUT: {
            return {
              ...state,
              userLogged: []
            }
          }

        default:
            return {...state}
    }
};

export default reducer;



// Reemplazar lógica case ORDERED para traerlo desde el back
// Error búsqueda por nombre cuando se omiten la mayúscula inicial en cada palabra