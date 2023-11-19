//style
import "./navbar.style.css"
//actions
import { _getDog__ById__ByName } from "../../redux/actions/actions"

const NavBar = ({busqueda, handleChange, onClick }) =>{

return(
<div className="navBar_cont">

        <header className="nav_logo"></header>

        <div className="origins">
        <legend>Origin</legend>
    
        <input type="radio"  name="filterOrigin" value="All" onClick={onClick} />
        <label htmlFor="All">All</label>

        <input type="radio" name="filterOrigin" value="API" onClick={onClick}/>
        <label htmlFor="API">API</label>

        <input type="radio" name="filterOrigin" value="Created" onClick={onClick} />
        <label htmlFor="Creados">Yours</label>
      
        </div>

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
        value={busqueda}
        className="searchBar"
        placeholder="WRITE TO SEARCH">
        </input>
        
        <a href="http://localhost:5173/form">
        <button className="nav_button">
        <p>CREAR</p>
        </button>
        </a>
        
</div>
)
}
export default NavBar;