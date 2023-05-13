import '../styling/Shop.css'
import Navbar from "./Navbar";
import { plantFactory } from '../plantFactory';
import { useEffect, useState } from 'react';
import Card from './Card';

const Shop = () => {
    const [plantsInCart, setPlantsInCart] = useState({});
    const [plantList, setPlantList] = useState([
        plantFactory('Appletini', 25),
        plantFactory('Blue Corynephorus', 20),
        plantFactory('Baby Cakes Blackberry', 15),
        plantFactory('Violas', 10),
        plantFactory('Profusion Red Zinnia', 13),
        plantFactory('Purple Majesty Ornamental Millet', 12),
        plantFactory('Jolt Pink Dianthus', 18),
        plantFactory('Ornamental Peppers', 10),
        plantFactory('‘Emerald Lace’ Plectranthus', 17),
        plantFactory('Very Berry Creeping Wintergreen', 15),
    ]);

    function addPlantToTotal(plant) {
        if (!plantsInCart[plant.name]) {
            setPlantsInCart({...plantsInCart, [plant.name]: 1 })
        } else {
            const currentCount = plantsInCart[plant.name];
            setPlantsInCart({...plantsInCart, [plant.name]: currentCount + 1})
        }
    }

    function decreasePlantFromTotal(plant) {{
        const currentCount = plantsInCart[plant.name];
        if (currentCount >= 1) {
            const copyPlantsInCart = {...plantsInCart}
            delete copyPlantsInCart[plant.name]
            setPlantsInCart({...copyPlantsInCart})
        }
    }}

    
    useEffect(() => {
        console.log(plantsInCart);
    }, [plantsInCart]);

    return (
        <div className='shopPage'>
            <Navbar />
            <div className='Shop'>
                {plantList.map((plant) => {
                    return (<Card key={plant.name} 
                        plant={plant} 
                        addPlant={addPlantToTotal} 
                        decreasePlant={decreasePlantFromTotal}/>)
                })}
            </div>
        </div>
    )
}

export default Shop;