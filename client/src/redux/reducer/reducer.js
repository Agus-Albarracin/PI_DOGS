// import { averageWeight } from "../utils/averageWeight";
import { CLEAN_DETAIL, DELETE_DOG, FILTER_DOGS_BY_ORIGIN, FILTER_TEMPERAMENTS, GET_DOGS, GET_DOG_BYID_BYNAME, GET_DOG_BY_ID, GET_TEMPERAMENTS, ORDER_ALPHABETIC, ORDER_WEIGHT, POST_DOG } from "../actions/actions-type";

const initialState = {
  allDogs: [], 
  allDogsCopy: [], // ES LA COPIA PARA PODER ORDENAR O FILTRAR
  dogById: {},
  postDogs: [],
  dogsByTemp: [],
  dogsByOrigin: [],
  allTemperaments: [],
};

const rootReducer = (state = initialState, {type, payload}) => {
  switch(type){

    case GET_DOGS: {
      console.log("se muestra alldogs", payload)
      return {
        ...state,
        allDogs: payload,
        allDogsCopy: payload,
      };
    };
    case GET_DOG_BY_ID:{
      return {...state,
      }
    }
    case GET_DOG_BYID_BYNAME: {
      return {
        ...state,
        allDogs: payload
      };
    };


    case GET_TEMPERAMENTS: {
      return {
        ...state,
        allTemperaments: payload,
      };
    };
    
    case POST_DOG: {
      return {...state,
        allDogs: [payload]
      };
    };
     
    case FILTER_DOGS_BY_ORIGIN: {
      const allDogsOrigin = state.allDogsCopy;
      const filterByOrigin = payload === "API"
      ? allDogsOrigin.filter(dog => !dog.createIndb)
      : allDogsOrigin.filter(dog => dog.createIndb)
      
      console.log("llega al reducer", allDogsOrigin)
      
      return {
        ...state, 
        allDogs: payload === "All"
        ? allDogsOrigin
        : filterByOrigin,
      };
    };
    
    case FILTER_TEMPERAMENTS: {
      const allDogsTemp = state.allDogsCopy;
      const filterByTemp = payload === "All"
      ? allDogsTemp
      : allDogsTemp.filter(dog => dog.temperaments.filter(temp => temp === payload))
      
      return {
        ...state,
        allDogs: filterByTemp,
      };
    };

    case ORDER_ALPHABETIC: {
      const allDogsName = state.allDogs;
      const orderAlphabetic = payload === true
      ? allDogsName.sort((a,b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
        })
      : allDogsName.sort((a,b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        return 0;
      })
      return {
        ...state,
        allDogs: orderAlphabetic
      };
    };

    default:
      return { ...state }
  }
}
export default rootReducer ;