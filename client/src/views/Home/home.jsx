//components
import "./home.style.css"
import Cards from "../../components/Cards/cards"

//react
import { useEffect } from "react";
import { useDispatch } from "react-redux"

//actions
import {getDogs} from "../../../src/redux/actions/actions"

const Home = () =>{

const dispatch = useDispatch();
useEffect( ()=> { dispatch(getDogs())} , [dispatch])
   

////* RENDERIZADO //////* RENDERIZADO //////* RENDERIZADO //////* RENDERIZADO  //////* RENDERIZADO
return(
<div className="home_cont">

   <section className="box cards"> <Cards /> </section>

   <footer  className="box footer"> Derechos reservados© </footer>

</div>)}

export default  Home ;