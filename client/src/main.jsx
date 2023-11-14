import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter  } from 'react-router-dom'

import {store} from "./redux/store/store.js"
import { Provider } from "react-redux"


ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>
  
    

)


// importamos store desde store
// importamos Provider desde react-redux.
// Envolvemos la app con la etiqueta Provider y dentro le pasamos store ={store};