import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CurrencyForm from "../components/CurrencyForm";

describe("CurrencyForm Component renders", () => {
  test("Renders text", () => {
    render(<CurrencyForm />);
    const linkElement = screen.getByText(/choose your base currency/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Renders button and displays message when clicked", async () => {
    render(<CurrencyForm />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    await waitFor(() => {
      const dailyBudgetMessage = screen.getByText((content, element) => {
        return (
          element.textContent.startsWith("Your daily budget is") &&
          element.textContent.endsWith(
            "Have a wonderful trip and safe travels!"
          )
        );
      });
      expect(dailyBudgetMessage).toBeInTheDocument();
    });
  });
});
