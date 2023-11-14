import "./navbar.style.css"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { _getDog__ById__ByName } from "../../redux/actions/actions"

const NavBar = () =>{

const dispatch = useDispatch()

const [name, setName] = useState("")

  const handleChange = (event) =>{

    const value = event.target.value
  console.log(value);
  setName(value)
}

  useEffect(() => {
  dispatch(_getDog__ById__ByName(name));
  }, [name, dispatch]);
  

     return(
      <form className="navBar_cont">

         <header className="nav_logo"></header>


        <select className="select">
        <option value="value 1"> Temperaments</option>
        <option value="value">Value 1</option>
        <option value="value">Value 1</option>
        <option value="value">Value 1</option>
        <option value="value">Value 1</option>
        </select>


        <input 
        type="type"
        onChange={handleChange}
        value={name}
        className="searchBar"
        placeholder="Ingrese el nombre que desea buscar">
        </input>
        

        <button 
        className="nav_button"
        > <p>BUSCAR</p>
        </button>
      </form>
    
    )
}

export default NavBar;