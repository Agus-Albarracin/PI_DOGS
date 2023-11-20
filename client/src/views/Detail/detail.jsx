import "./detail.style.css"

//action
import { getDogById } from "../../redux/actions/actions";
//react
import { useEffect, useState } from "react";
//react-redux
import { useDispatch } from "react-redux";
//react-dom
import { useParams } from "react-router-dom";
//axios
import axios from "axios";

const Detail = () =>{

    const {id} = useParams();
    const [dogs, setDogs] = useState("")

    useEffect(() => {
        axios(`http://localhost:3001/dogs/${id}`).then(({ data }) => {
            console.log(data)
           if (data.name) {
              setDogs(data);
           } else {
              window.alert('No hay perros con ese ID');
           }
        });
        return setDogs({});
     }, [id]);
     

    return (
    <div className="detail_cont">
        <div className="box foto">
           <img className="pic" src={dogs.image && dogs.image} alt="name"></img>
        </div>
        <div className="box detail">
            <h1>{dogs.name && dogs.name}</h1>
           <h2>Altura: {dogs.height && dogs.height}</h2>
           <h2>Peso: {dogs.weight && dogs.weight}</h2>
           <h2>Años de vida:{dogs.life_span && dogs.life_span}</h2>
           <h2>Temperaments: {dogs.temperament && dogs.temperament?.map((t) => t + ". ") }</h2>
        </div>
        <footer className="footerdetail"> Derechos reservados© </footer>    
    </div>
    )
}

export default  Detail;