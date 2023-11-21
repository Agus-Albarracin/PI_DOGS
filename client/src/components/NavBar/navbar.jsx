//style
import "./navbar.style.css"
//react
import Select from "react-select"
import { useState } from "react"
import { useSelector } from "react-redux"

const NavBar = ({busqueda, handleChange, onClick, ot, handleSelectChange}) =>{

// const allDogs = useSelector((state) => state.allDogs)
// //? filtro de temps
// const [vselect, setVselect] = useState("")
// const [sdogs, setSdogs] = useState([])

// const filter_temp = (value) =>{
//     var filter_temp = allDogs.filter((dogs) =>
//      dogs.temperament.includes(value))
//      console.log("dogs x temps", filter_temp)
//      setSdogs(filter_temp)    
// }

// const handleSelectChange = (event) =>{
//    const value_select_event = event.value
//    //valor de lo que captura el selecct
//    console.log("valor del select", value_select_event)
//    setVselect(value_select_event)
//    filter_temp(value_select_event)  
// }

return(
<div className="navBar_cont">
           
        <div>
          <img className="nav_logo" src="https://img.freepik.com/vector-premium/logo-perro-que-es-cabeza-perro_649271-1380.jpg?w=2000"></img>
        </div>

        <div className="origins">
        <legend>Origin</legend>
    
        <input type="radio"  name="filterOrigin" value="All" onClick={onClick} />
        <label htmlFor="All">All</label>

        <input type="radio" name="filterOrigin" value="API" onClick={onClick}/>
        <label htmlFor="API">API</label>

        <input type="radio" name="filterOrigin" value="Created" onClick={onClick} />
        <label htmlFor="Creados">Yours</label>
      
        </div>

        <Select className="select"
         options={ot}
         onChange= { handleSelectChange } 
        >
        </Select>
     

        <input 
        type="type"
        onChange={handleChange}
        value={busqueda}
        className="searchBar"
        placeholder="WRITE TO SEARCH">
        </input>
        
        <a href="http://localhost:5173/form">
        <button className="nav_button">
        <p>CREATE</p>
        </button>
        </a>
        
</div>
)
}
export default NavBar;