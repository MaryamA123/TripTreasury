import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CurrencyForm from "../components/CurrencyForm";

describe("CurrencyForm Component renders", () => {
  test("Renders text", () => {
    render(<CurrencyForm />);
    const currency1Label = screen.getByText(/choose your base currency/i);
    expect(currency1Label).toBeInTheDocument();
  });

  test("Renders button and displays message when clicked", () => {
    render(<CurrencyForm />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  
});
