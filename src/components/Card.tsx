import { useState } from 'react';
import '../styling/Card.css';
import { Plant } from '../plantFactory';
import React from 'react';

interface Props {
    plant: Plant;
    addPlant: (plant: Plant) => void;
    decreasePlant: (plant: Plant) => void;
    setPlantTotal: (plant: Plant, quantity: number) => void;
}

const Card: React.FC<Props> = ({ plant, addPlant, decreasePlant, setPlantTotal }) => {
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

    function setCounter(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target) { return }
        const element = e.target as HTMLInputElement;
        const value = Number(element.value);
        if (value >= 0) {
            setCount(value);
            setPlantTotal(plant, value);
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
                    <input 
                        name='quantity' 
                        type="number" 
                        value={Number(count).toString()} 
                        onChange={setCounter}>
                    </input>
                    <button onClick={incrementCounter}>+</button>
                </div>
            </div>
            
        </article>
        
    )
}

export default Card;