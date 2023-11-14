//react
import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
//BrowserRouter me va a permitir poder navegar entre los componentes de la pagina.
//Route con router vamos a poder declarar las rutas.
//views
import Home from "./views/Home/home"
import Landing from "./views/LandingPage/landing"
import Detail from "./views/Detail/detail"
import Form from "./views/Form/form"
import './App.css'

function App() {

    //EXACT va a evitar que se pisen nuestras rutas de detail y home. se va renderizar cuando sea exactamente home.
  return (
    <div>

    <Routes>
   
      <Route exact path="/home" element={ <Home />}></Route>
      <Route path="/landing" element={ Landing }></Route>
      <Route path="/form" element={ Form }></Route>
      <Route path="/home/:id" element={ <Detail />}></Route>

   
    </Routes>
    </div>
  )
}

export default App
