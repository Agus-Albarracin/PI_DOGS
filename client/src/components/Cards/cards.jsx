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
import { filterByOrigin, orderAlphabetic } from "../../redux/actions/actions";

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
console.log("current dogs", currentDogs)


//*  SELECTS ORIGINS *//
const handleFilterByOrigin = (event) => {
    const origin = event.target.value;
    console.log(origin)
    dispatch(filterByOrigin(origin));
    setCurrentPage(1)
    setNavdogs([])
    setSdogs([])
};


//* INPUT **)//
const [busqueda, setBusqueda] = useState("")
const [navdogs, setNavdogs] = useState([])
  
const filtrar = (value) =>{
//    console.log("value que llega a filtrar", value)
//    console.log("filtrar allDogs total de perros:", allDogs)
var filtrados = allDogs.filter((dog) =>
dog.name.toString().toLowerCase().includes(value.toString().toLowerCase()) || dog.id == value)
       
    console.log( "elementos individual", filtrados) 
    setNavdogs(filtrados)
    setSdogs([])

}

const handleChange = (event) =>{
    const value = event.target.value
    setBusqueda(value)
    filtrar(value)
    // console.log("valor de busqueda", busqueda);
    // console.log("valor de navdogs", navdogs);
}


//* TEMPERAMENTS *//
const [vselect, setVselect] = useState("")
const [sdogs, setSdogs] = useState([])

const filter_temp = (value) =>{
    var filter_temp = allDogs.filter((dogs) =>
     dogs.temperament.includes(value))
     console.log("dogs x temps", filter_temp)
     setSdogs(filter_temp)
     setNavdogs([])    
}


const handleSelectChange = (event) =>{
   const value_select_event = event.value
   //valor de lo que captura el selecct
   console.log("valor del select", value_select_event)
   setVselect(value_select_event)
   filter_temp(value_select_event)  

}


const navtotalDogs = navdogs?.length;
const navcurrentDogs = navdogs?.slice(firstpage, lastpage);
console.log("current nav", navcurrentDogs)
const selecttotaldogs = sdogs?.length
const sdogscurrent = sdogs?.slice(firstpage, lastpage)
console.log("current select", sdogscurrent)


//* Valor de todos los temperamentos */
const arr = []
allDogs.map((e)=> e.temperament?.map((x) => arr.push(x)))
var ar = arr.sort()
var allTempe = [...new Set(ar)];
// console.log("allTempe", allTempe)

const ot = allTempe.map((t) => new Object({
    value: t,
    label: t
}))
// console.log(ot)

//** Filtro por nombres. */

const [order, setOrder] = useState(false)

const handleOrderChange = () => {
  dispatch(orderAlphabetic(order))
  setCurrentPage(1)
  order ? setOrder(false) : setOrder(true)

};


return( <div className="box_cont">
{ /*🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶  HTML DE NavBar 🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶*/}
<div>
<NavBar
onClick={handleFilterByOrigin}

handleChange={handleChange}
busqueda={busqueda}

handleSelectChange={ handleSelectChange}
ot={ot}

handleOrderChange={handleOrderChange}
order={order}
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
:  sdogscurrent.length == 0
    ?
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
    :  
          sdogscurrent?.map(({id, image, name, temperament, weight}) =>{
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
          selecttotaldogs={selecttotaldogs}

          page={page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
/>       
</div>


</div>)
}

export default Cards;

