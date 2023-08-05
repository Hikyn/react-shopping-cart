import "../styling/Shop.css";
import Navbar from "./Navbar";
import { Plant } from "../plantFactory";
import React, { useEffect, useState } from "react";
import OrderTotal from "./OrderTotal";
import Card from "./Card";

interface plantsInCart {
  plantsInCart: Record<string, Item>;
}

interface Item {
  count: number;
  price: number;
}

const Shop = () => {
  const [plantsInCart, setPlantsInCart] = useState({});
  const [plantList, setPlantList] = useState<Plant[]>([
    new Plant("Appletini", 25),
    new Plant("Blue Corynephorus", 20),
    new Plant("Baby Cakes Blackberry", 15),
    new Plant("Violas", 10),
    new Plant("Profusion Red Zinnia", 13),
    new Plant("Purple Majesty Ornamental Millet", 12),
    new Plant("Jolt Pink Dianthus", 18),
    new Plant("Ornamental Peppers", 10),
    new Plant("‘Emerald Lace’ Plectranthus", 17),
    new Plant("Very Berry Creeping Wintergreen", 15),
  ]);

  function addPlantToTotal(plant: Plant) {
    const plantInCart: Item =
      plantsInCart[plant.name as keyof typeof plantsInCart];
    if (!plantInCart) {
      setPlantsInCart({
        ...plantsInCart,
        [plant.name]: { count: 1, price: plant.price },
      });
    } else {
      let currentCount = plantInCart["count" as keyof typeof plantInCart];
      currentCount += 1;
      setPlantsInCart({
        ...plantsInCart,
        [plant.name]: { count: currentCount, price: plant.price },
      });
    }
  }

  function setPlantTotal(plant: Plant, quantity: number) {
    if (quantity <= 0) {
      return;
    }
    if (!plantsInCart[plant.name as keyof typeof plantsInCart]) {
      setPlantsInCart({
        ...plantsInCart,
        [plant.name]: { count: quantity, price: plant.price },
      });
    } else {
      setPlantsInCart({
        ...plantsInCart,
        [plant.name]: { count: quantity, price: plant.price },
      });
    }
  }

  function decreasePlantFromTotal(plant: Plant) {
    {
      const plantInCart: Item =
        plantsInCart[plant.name as keyof typeof plantsInCart];
      if (!plantInCart) {
        return;
      }
      const currentCount = plantInCart["count"];
      if (currentCount === 1) {
        const copyPlantsInCart = { ...plantsInCart };
        delete copyPlantsInCart[plant.name as keyof typeof plantsInCart];
        setPlantsInCart({ ...copyPlantsInCart });
      } else {
        setPlantsInCart({
          ...plantsInCart,
          [plant.name]: { count: currentCount - 1, price: plant.price },
        });
      }
    }
  }

  useEffect(() => {
    console.log(plantsInCart);
  }, [plantsInCart]);

  return (
    <div className="shopPage">
      <Navbar />
      <div className="Shop" role="main">
        {plantList.map((plant) => {
          return (
            <Card
              key={plant.name}
              plant={plant}
              addPlant={addPlantToTotal}
              decreasePlant={decreasePlantFromTotal}
              setPlantTotal={setPlantTotal}
            />
          );
        })}
      </div>
      <OrderTotal plantsInCart={plantsInCart} />
    </div>
  );
};

export default Shop;
