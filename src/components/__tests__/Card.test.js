import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Card from "../Card";
import { plantFactory } from "../../plantFactory";
import { act } from "react-dom/test-utils";

describe("Card component", () => {
    it("renders correct title", () => {
        const plant = plantFactory('Appletini', 25);
        render(<Card 
            key={plant.name} 
            plant={plant}
        />);
        expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(/Appletini/i);
    });

    it("renders correct price", () => {
        const plant = plantFactory('Appletini', 25);
        render(<Card 
            key={plant.name} 
            plant={plant}
        />);
        expect(screen.getByRole("heading", { level: 2 }).textContent).toMatch(/25/i);
    });

    it("renders default quantity", () => {
        const plant = plantFactory('Appletini', 25);
        render(<Card 
            key={plant.name} 
            plant={plant}
        />);
        expect(screen.getByRole("spinbutton").value).toMatch(/0/i);
    });

    it("increases quantity", async () => {
        const user = userEvent.setup();

        const plant = plantFactory('Appletini', 25);

        const addPlantToTotal = jest.fn();
        const decreasePlantFromTotal = jest.fn();

        render(<Card 
            key={plant.name} 
            plant={plant}
            addPlant={addPlantToTotal} 
            decreasePlant={decreasePlantFromTotal}
        />);

        const button = screen.getByRole("button", { name: "+" });

        await act(async() => {
            await user.click(button);
        })
        

        expect(screen.getByRole("spinbutton").value).toMatch(/1/i);
    });

    it("increases quantity 5 times correctly", async () => {
        // Ensure that no double click issue present
        const user = userEvent.setup();

        const plant = plantFactory('Appletini', 25);

        const addPlantToTotal = jest.fn();
        const decreasePlantFromTotal = jest.fn();

        render(<Card 
            key={plant.name} 
            plant={plant}
            addPlant={addPlantToTotal} 
            decreasePlant={decreasePlantFromTotal}
        />);

        const button = screen.getByRole("button", { name: "+" });

        for(let i = 0; i < 5; i += 1) {
            await act(async () => {
                await user.click(button);
            })
        }
        
        expect(screen.getByRole("spinbutton").value).toMatch(/5/i);
    });

    it("can't decrease quantity below zero", async () => {
        // Ensure that no double click issue present
        const user = userEvent.setup();

        const plant = plantFactory('Appletini', 25);

        const addPlantToTotal = jest.fn();
        const decreasePlantFromTotal = jest.fn();
        render(<Card 
            key={plant.name} 
            plant={plant}
            addPlant={addPlantToTotal} 
            decreasePlant={decreasePlantFromTotal}
        />);
        
        const button = screen.getByRole("button", { name: "-" });

        await act(async() => {
            await user.click(button);
        })
        
        expect(screen.getByRole("spinbutton").value).toMatch(/0/i);
    });

    it("can't decrease quantity from 1 to 0", async () => {
        // Ensure that no double click issue present
        const user = userEvent.setup();

        const plant = plantFactory('Appletini', 25);

        const addPlantToTotal = jest.fn();
        const decreasePlantFromTotal = jest.fn();

        render(<Card 
            key={plant.name} 
            plant={plant}
            addPlant={addPlantToTotal} 
            decreasePlant={decreasePlantFromTotal}
        />);

        expect(screen.getByRole("spinbutton").value).toMatch(/0/i);
        const increaseButton = screen.getByRole("button", { name: "+" });

        await act(async() => {
            await user.click(increaseButton);
        })
        expect(screen.getByRole("spinbutton").value).toMatch(/1/i);

        const decreaseButton = screen.getByRole("button", { name: "-" });

        await act(async() => {
            await user.click(decreaseButton);
        })
        
        expect(screen.getByRole("spinbutton").value).toMatch(/0/i);
    });

    it("calls addPlantToTotal correct number of times", async () => {
        const user = userEvent.setup();

        const plant = plantFactory('Appletini', 25);

        const addPlantToTotal = jest.fn();
        const decreasePlantFromTotal = jest.fn();
        
        render(<Card 
            key={plant.name} 
            plant={plant}
            addPlant={addPlantToTotal} 
            decreasePlant={decreasePlantFromTotal}
        />);

        const increaseButton = screen.getByRole("button", { name: "+" });
    
        await act(async() => {
            await user.click(increaseButton);
            await user.click(increaseButton);
            await user.click(increaseButton);
        })
    
        expect(addPlantToTotal).toHaveBeenCalledTimes(3);
      });

      it("calls decreasePlantFromTotal correct number of times", async () => {
        const user = userEvent.setup();

        const plant = plantFactory('Appletini', 25);

        const addPlantToTotal = jest.fn();
        const decreasePlantFromTotal = jest.fn();
        
        render(<Card 
            key={plant.name} 
            plant={plant}
            addPlant={addPlantToTotal} 
            decreasePlant={decreasePlantFromTotal}
        />);

        const decreaseButton = screen.getByRole("button", { name: "-" });
    
        await act(async() => {
            await user.click(decreaseButton);
            await user.click(decreaseButton);
            await user.click(decreaseButton);
        })
    
        expect(decreasePlantFromTotal).toHaveBeenCalledTimes(3);
      });

      it("manually inputing number calls setPlantTotal correct number of times", async () => {
        const user = userEvent.setup();

        const plant = plantFactory('Appletini', 25);

        const addPlantToTotal = jest.fn();
        const decreasePlantFromTotal = jest.fn();
        const setPlantTotal = jest.fn();
        
        render(<Card 
            key={plant.name} 
            plant={plant}
            addPlant={addPlantToTotal} 
            decreasePlant={decreasePlantFromTotal}
            setPlantTotal={setPlantTotal}
        />);

        const input = screen.getByRole("spinbutton");
    
        await act(async() => {
            await user.type(input, "126");
        })
    
        expect(setPlantTotal).toHaveBeenCalledTimes(3);
      });
  });
