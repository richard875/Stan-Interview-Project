import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Error from "../Error";

describe("Error component", () => {
  test("it should render the error message", () => {
    render(<Error />);

    const message = screen.getByTestId("message");
    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent(
      "An unknown error occurred. please try again later"
    );
  });

  test("it renders the message with the correct styles", () => {
    render(<Error />);

    const message = screen.getByTestId("message");
    expect(message).toHaveStyle({
      fontSize: "16px",
      fontWeight: "700",
      color: "#636363",
    });
  });
});
