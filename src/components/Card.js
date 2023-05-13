import { useState } from 'react';
import '../styling/Card.css'

const Card = ({ plant, addPlant, decreasePlant }) => {
    const [count, setCount] = useState(0);

    function incrementCounter() {
        setCount(count + 1);
        addPlant(plant);
    }

    function decrementCounter() {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            setCount(0);
        }
        decreasePlant(plant);
    }

    function setCounter(e) {
        const value = Number(e.target.value);
        if (value >= 0) {
            setCount(e.target.value)
        }
    }

    return (
        <div className="Card" 
        style={{backgroundImage: `url("/images/${plant.name}.jpg")`}}
        >
            <div className='title'>{plant.name}</div>
            <div className='flexboxEnd'>
                <div className='price'>{plant.price}$</div>
                <div className='quantity'>
                    <button onClick={decrementCounter}>-</button>
                    <input type="number" value={Number(count).toString()} onChange={setCounter}></input>
                    <button onClick={incrementCounter}>+</button>
                </div>
            </div>
            
        </div>
        
    )
}

export default Card;