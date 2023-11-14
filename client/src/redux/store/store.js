import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/reducer.js';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    // esta línea es para poder hacer peticiones a un server
);

//Creamos la carpeta de Redux, con las carpetas actions reducer store con su archivo.
//Importamos el createStore, applyMiddleware, compose desde redux
//importamos el reducer desde reducer.
//importamos thunkMiddleware desde redux-thunk
// creamos una const y guardamos el objeto window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose.
// creamos otra const que sea store y usamos la funcion createStore()
//Por parametro le pasamos reducer, y de segundo parametro la const donde guardamos el compose y le pasamos por parametro apllyMiddleware() y a este le pasamos por parametro thunkMiddleware