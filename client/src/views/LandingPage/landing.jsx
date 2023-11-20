import "./landing.style.css"
const Landing = () =>{


    return(
        <div className="landing_cont">
        <section className="boxes">
        <section className="text_cont">
        <p>  Dogs are pets par excellence, there is a reason they say they are man's best friend. Noble, affectionate, faithful like no one else, protective... These pets are capable of giving us all their love without asking for anything in return. It doesn't matter if it is a small breed dog or a large breed dog, they all have the same innocence in their hearts.
             {/* Los perros son las mascotas por excelencia, por algo se dice que son el mejor amigo del hombre. Nobles, cariñosos, fieles como nadie, protectores... Estos animales de compañía son capaces de brindarnos todo su amor sin pedir nada a cambio. No importa si se trata de un perro de raza pequeña o de un perro de raza grande, todos poseen la misma inocencia en su corazón. */}
</p>
        
        <a href="http://localhost:5173/home">
        <button className="boton_home" >
        PRESS TO<br></br>HOME
        </button>
        </a>
        </section>
        
         </section>
        </div>
    )
}

export default Landing;