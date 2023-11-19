import "./card.style.css"
//react-dom
import { Link } from "react-router-dom";

const Card = ({image, name, temperament, weight, id }) => {

    return (
        <div className="card_cont">
            <div>
            <Link to={`/detail/${id}`}>
            <img className="img_card" src={image} />
            <div className="data_dog">
            <h4>{name}</h4>
            {/* <div>Temps: {temperament}</div> */}
            {/* <p>Peso:{weight}</p> */}
            </div>
            </Link>
            </div>
        </div>
    )
}

export default Card;

//iamgen nombre temps y peso

