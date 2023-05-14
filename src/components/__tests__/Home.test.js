import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import Home from '../Home';
import { MemoryRouter } from "react-router-dom";

describe("Home component", () => {
    it("Correct title", () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Plants/i);
    });

    it("Correct subtitle", () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/for sale!/i);
    });

    it("Correct description", () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        expect(screen.getByRole('article').textContent).toMatch(/Here you can find a variety of plants in pots for all your needs/i);
    });


    it("Creates Link to Shop", () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        expect(screen.getByRole('link', { name: 'Start shopping' })).toBeDefined();
    });

});