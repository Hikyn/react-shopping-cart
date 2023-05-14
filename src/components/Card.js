import { useState } from 'react';
import '../styling/Card.css'

const Card = ({ plant, addPlant, decreasePlant, setPlantTotal }) => {
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
            setPlantTotal(plant, value)
        }
    }

    return (
        <article className="Card"
        style={{backgroundImage: `url("http://hikyn.github.io/react-shopping-cart/images/${plant.name}.jpg")`}}
        >
            <h1 className='title'>{plant.name}</h1>
            <div className='flexboxEnd'>
                <h2 className='price'>{plant.price}$</h2>
                <div className='quantity'>
                    <button onClick={decrementCounter}>-</button>
                    <input name='quantity' type="number" value={Number(count).toString()} onChange={setCounter}></input>
                    <button onClick={incrementCounter}>+</button>
                </div>
            </div>
            
        </article>
        
    )
}

export default Card;