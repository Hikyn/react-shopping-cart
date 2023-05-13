import '../styling/Card.css'

const Card = ({ plant }) => {
    return (
        <div className="Card" 
        style={{backgroundImage: `url("/images/${plant.name}.jpg")`}}
        >
            <div className='title'>{plant.name}</div>
            <div className='price'>{plant.price}$</div>
        </div>
        
    )
}

export default Card;