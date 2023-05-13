import '../styling/Card.css'

const Card = ({ plant }) => {
    return (
        <div className="Card" 
        style={{backgroundImage: `url("/images/${plant.name}.jpg")`}}
        >
            <div className='title'>{plant.name}</div>
            <div className='flexboxEnd'>
                <div className='price'>{plant.price}$</div>
                <div className='quantity'>
                    <button>-</button>
                    <input type="number"></input>
                    <button>+</button>
                </div>
            </div>
            
        </div>
        
    )
}

export default Card;