//style
import "./cards.style.css"
//components
import Card from "../Card/card"
import Paginado from "../Paginado/paginado"
import NavBar from "../NavBar/navbar"

//react
import React from "react"
import { useState } from "react"

//react-redux
import { useSelector, useDispatch } from "react-redux"
//actions
import { filterByOrigin } from "../../redux/actions/actions";


const Cards = ({}) =>{

const dispatch = useDispatch();
const allDogs = useSelector((state) => state.allDogs)

//use selector le va a decir que este componente apunte a este estado.
//* PAGINADO **//
const totalDogs = allDogs?.length;
const page = 8;
const [currentPage, setCurrentPage] = useState(1);
const lastpage = currentPage * page;
const firstpage = lastpage - page;
const currentDogs = allDogs?.slice(firstpage, lastpage);


//*  SELECTS ORIGINS *//
const handleFilterByOrigin = (event) => {
    const origin = event.target.value;
    console.log(origin)
    dispatch(filterByOrigin(origin));
    setCurrentPage(1)
};


//* INPUT **)//
const [busqueda, setBusqueda] = useState("")
const [navdogs, setNavdogs] = useState([])
  
const filtrar = (value) =>{
   console.log("value que llega a filtrar", value)
  console.log("filtrar allDogs total de perros:", allDogs)

      var filtrados = allDogs.filter((elemento) =>
          elemento.name.toString().toLowerCase().includes(value.toString().toLowerCase()) 
       || elemento.id == value)
  
 console.log( "elementos individual", filtrados) 
 setNavdogs(filtrados) 
}

const handleChange = (event) =>{
    const value = event.target.value
    setBusqueda(value)
    filtrar(value)
    // console.log("valor de busqueda", busqueda);
    // console.log("valor de navdogs", navdogs);
}

const navtotalDogs = navdogs?.length;
//currentDogs
const navcurrentDogs = navdogs?.slice(firstpage, lastpage);
// console.log("navdogs", navtotalDogs)
// console.log("navcurrentdogs", navcurrentDogs)

//* Valor de todos los temperamentos */
// const arr = []
// allDogs.map((e)=> e.temperament?.map((x) => arr.push(x)))
// var ar = arr.sort()
// var sin = [...new Set(ar)];
// console.log("sin", sin)
//totalDogs


return( <div className="box_cont">
{ /*🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶  HTML DE NavBar 🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶*/}
<div>
<NavBar
busqueda={busqueda}
handleChange={handleChange}
onClick={handleFilterByOrigin}
value={origin}
/>
</div>

{ /*🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶  HTML DE CARTAS 🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶*/}  
<div className="cards_cont" key={currentPage}>

{  navcurrentDogs.length !== 0

?
    navcurrentDogs?.map(({id, image, name, temperament, weight}) =>{
    // * EL MAP ES LA FUNCION PARA QUE ME RENDERIZE LAS CARTAS
    return <Card
            key ={id}
            id ={id}
            image = {image}
            name = {name}
            // temperament= {temperament?.map((t)=>{ return <p>{t}</p>})}
            weight={weight} />
    }) 
:
    currentDogs?.map(({id, image, name, temperament, weight}) =>{
    // * EL MAP ES LA FUNCION PARA QUE ME RENDERIZE LAS CARTAS
    return <Card
           key ={id}
           id ={id}
           image = {image}
           name = {name}
           // temperament= {temperament?.map((t)=>{ return <p>{t}</p>})}
           weight={weight} />
    })
}

</div>

{ /*🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶  HTML DE PAGINADO 🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶*/}  
<div className="page_cont">
<Paginado
          totalDogs={totalDogs}
          navtotalDogs={navtotalDogs}
          
          page={page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
/>       
</div>


</div>)
}

export default Cards;

