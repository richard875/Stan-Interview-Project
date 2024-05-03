import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Layout from "../Layout";
import { store } from "../../redux/Store";

// Mock FetchMedia function
jest.mock("src/services/FetchMedia", () => jest.fn());

describe("Layout component", () => {
  test("it renders the screen", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    );

    // Check if TopBar is rendered
    const topBar = screen.getByTestId("topBar");
    expect(topBar).toBeInTheDocument();
  });
});
