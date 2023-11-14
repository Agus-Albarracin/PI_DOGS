import "./card.style.css"

const Card = ({image, name, temperament, weight }) => {

    return (
        <div className="card_cont">
            <div>
            <img className="img_card" src={image} />
            <div className="data_dog">
            <h4>{name}</h4>
            {/* <p>Temps:{temperament}</p> */}
            <p>Peso:{weight}</p>
            </div>
            </div>
        </div>
    )
}

export default Card;

//iamgen nombre temps y peso

