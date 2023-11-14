//components
import "./home.style.css"
// import Cards from "../../components/Cards/cards"
import NavBar from "../../components/NavBar/navbar"
import Cards from "../../components/Cards/cards"
//react
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
//actions
import { getDogs, getTemperaments} from "../../redux/actions/actions"

const Home = () =>{

const dispatch = useDispatch()
// con el useDispatch lo que voy hacer es comunicarme con el store, le estaria enviando una api.



////////////////////////////////////* Funciones de SECCTION //////////////////////////////////
   //GET que muestra todas las cartas de los perros.
   // el useSelector va a indicar de que estado (el estado que esta en initialState en reducer) depende este componente y va a estar pendiente a los cambios que le sucedan en automatico.  


   useEffect( ()=> {  dispatch(getDogs()) } , [])
   //El useEffect lo vamos a usar para indicar lo que queremos mostrar en la pagina en el momento que la pagina se carga por primera vez.
   //a través de un callback le pasamos el dispatch con la actions que queremos realizar que importamos desde redux como primer parametro.
   //como segundo parametro le pasamos una array de dependecias, que le decimos en que momento queremos que se vuelva a ejecutar.
   // Le pasamos dispatch que es cuando queremos que se ejecute.

   // useEffect(() => {
   //    const fetchData = async () => {
   //      await Promise.all([   dispatch(getDogs()), dispatch(getTemperaments())   ]);

   //    };
  
   //    fetchData();
   //  }, [dispatch]);
   /* El método Promise. all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada. */

////* RENDERIZADO //////* RENDERIZADO //////* RENDERIZADO //////* RENDERIZADO  //////* RENDERIZADO 


/*🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶   RENDERIZADO   🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶*/

return(<div className="home_cont">
{ /*🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶  HTML DE NAVBAR   🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶*/}
<nav className="box navbar">
            <NavBar
            />
</nav>

{ /*🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶  HTML DE SECTION  🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶*/}
<section className="box cards">
       <Cards />

</section>

{ /*🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶  HTML DE FOOTER 🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶*/}       
<footer  className="box footer"> Derechos reservados©
</footer>


</div>)}

export default  Home ;