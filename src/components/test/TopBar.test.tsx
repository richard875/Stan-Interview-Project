import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "../TopBar";

describe("TopBar component", () => {
  test("it renders TopBar with correct menu items", () => {
    render(
      <Router>
        <TopBar />
      </Router>
    );

    // Check if Stan logo is rendered
    const logo = screen.getByAltText("Stan Logo");
    expect(logo).toBeInTheDocument();

    // Check if all menu items are rendered
    const homeLink = screen.getByTestId("home");
    const seriesLink = screen.getByTestId("series");
    const movieLink = screen.getByTestId("movie");
    expect(homeLink).toBeInTheDocument();
    expect(seriesLink).toBeInTheDocument();
    expect(movieLink).toBeInTheDocument();
  });

  test("clicking on the links navigate to the correct URL", () => {
    render(
      <Router>
        <TopBar />
      </Router>
    );

    // Find the links by its test ID and click it
    const homeLink = screen.getByTestId("home");
    fireEvent.click(homeLink);
    expect(window.location.href).toContain("/");

    const seriesLink = screen.getByTestId("series");
    fireEvent.click(seriesLink);
    expect(window.location.href).toContain("/?type=series");

    const moviesLink = screen.getByTestId("movie");
    fireEvent.click(moviesLink);
    expect(window.location.href).toContain("/?type=movie");
  });
});
