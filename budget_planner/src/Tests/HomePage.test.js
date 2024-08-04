import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";
import { MemoryRouter } from "react-router-dom";

describe('Homepage renders', ()=>{
    test("Renders text", () => {
        render(
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        );
        const text = screen.getByText(/your adventure starts here/i);
        expect(text).toBeInTheDocument();
      });
      test("Renders heading", () => {
        render(
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        );
        const headingText = screen.getByText("Currency Converter & Daily Bugdet");
        expect(headingText).toBeInTheDocument();
      });
      
      test("Renders images", () => {
        render(
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        );
        const boraImage = screen.getAllByAltText("bora-bora");
        const canadaImage = screen.getAllByAltText("canada");
        const japanImage = screen.getAllByAltText("japan");
        expect(boraImage.length).toBeGreaterThan(0);
        expect(canadaImage.length).toBeGreaterThan(0);
        expect(japanImage.length).toBeGreaterThan(0);
      });
      
      test("Renders button", () => {
        render(
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        );
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
      });

})

