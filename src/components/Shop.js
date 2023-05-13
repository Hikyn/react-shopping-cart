import '../styling/Shop.css'
import Navbar from "./Navbar";
import { plantFactory } from '../plantFactory';
import { useEffect, useState } from 'react';
import Card from './Card';

const Shop = () => {
    let test = plantFactory('Appletini', 13);
    console.log(test);
    const [plantList, setPlantList] = useState([
        plantFactory('Appletini', 13),
        plantFactory('Blue Corynephorus', 13),
        plantFactory('Baby Cakes Blackberry', 13),
        plantFactory('Violas', 13),
        plantFactory('Profusion Red Zinnia', 13),
        plantFactory('Purple Majesty Ornamental Millet', 13),
        plantFactory('Jolt Pink Dianthus', 13),
        plantFactory('Ornamental Peppers', 13),
        plantFactory('‘Emerald Lace’ Plectranthus', 13),
        plantFactory('Very Berry Creeping Wintergreen', 13),
    ]);

    return (
        <div className='shopPage'>
            <Navbar />
            <div className='Shop'>
                {plantList.map((plant) => {
                    return (<Card key={plant.name} plant={plant} />)
                })}
            </div>
        </div>
    )
}

export default Shop;