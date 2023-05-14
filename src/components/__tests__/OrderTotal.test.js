import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import OrderTotal from "../OrderTotal";

describe("OrderTotal component", () => {
    it("Starts with 0", () => {
        const plantsInCart = {}
        render(<OrderTotal plantsInCart={plantsInCart}/>);
        expect(screen.getByRole('footer').textContent).toMatch(/^Total\(0 items\): 0\$/);
    });

    it("Correct total for 1 plant and 1 pot", () => {
        const plantsInCart = {'Appletini': { count: 1, price: 25 }}
        render(<OrderTotal plantsInCart={plantsInCart}/>);
        expect(screen.getByRole('footer').textContent).toMatch(/^Total\(1 items\): 25\$/);
    });

    it("Correct total for 2 different plants and 3 pots", () => {
        const plantsInCart = {'Appletini': { count: 1, price: 25 }, 'Blue Corynephorus': { count: 2, price: 20}}
        render(<OrderTotal plantsInCart={plantsInCart}/>);
        expect(screen.getByRole('footer').textContent).toMatch(/^Total\(3 items\): 65\$/);
    });
});