import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import Shop from "../Shop";
import { MemoryRouter } from "react-router-dom";

describe("Shop component", () => {
  it("Creates 10 cards", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>,
    );
    expect(screen.getAllByRole("article").length).toEqual(10);
  });

  it("Creates NavBar", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>,
    );
    expect(screen.getByRole("banner")).toBeDefined();
  });

  it("Creates OrderTotal", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>,
    );
    expect(screen.getByRole("footer")).toBeDefined();
  });
});
