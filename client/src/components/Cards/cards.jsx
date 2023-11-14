//style
import "./cards.style.css"
//components
import Card from "../Card/card"
import Paginado from "../Paginado/paginado"

//react
import { useState } from "react"
//react-redux
import { useSelector } from "react-redux"


const Cards = ({}) =>{
   
    const allDogs = useSelector((state) => state.allDogsCopy)
    //use selector le va a decir que este componente apunte a este estado.

//* PAGINADO **//
    const totalDogs = allDogs.length;
    const page = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const lastpage = currentPage * page;
    const firstpage = lastpage - page;
    const currentDogs = allDogs.slice(firstpage, lastpage);

return( <div className="box_cont">

{ /*🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶  HTML DE CARTAS 🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶*/}  
<div className="cards_cont">
{currentDogs.map(({id, image, name, temperament, weight}) =>{
// * EL SLICE ES LA FUNCION DE dogs.
// * el slice va a recortar los cartas de tal carta a tal carta y esas son las que se van a mapear  
// * EL MAP ES LA FUNCION DE SECCTION PARA QUE ME RENDERIZE LAS CARTAS
return <Card
            key ={id}
            id ={id}
            image = {image}
            name = {name}
            temperament= {temperament}
            weight={weight}
        />
    })
}
</div>

{ /*🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶  HTML DE PAGINADO 🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶*/}  
<div className="page_cont">
<Paginado
          totalDogs={totalDogs}
          page={page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
/>       
</div>


</div>)
}

export default Cards;

