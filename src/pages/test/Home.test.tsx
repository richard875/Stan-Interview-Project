import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../Home";
import { store } from "src/redux/Store";
import { useAppSelector } from "src/redux/Store";

const film1 = {
  id: 67298,
  title: "Dr. Death",
  description:
    "Dr. Death tells the terrifying true story of Dr. Christopher Duntsch (Joshua Jackson), a brilliant but sociopathic neurosurgeon whose patients leave his operating room either permanently maimed or dead, and the two doctors who set out to stop him.",
  type: "series",
  image:
    "https://streamcoimg-a.akamaihd.net/000/672/98/67298-PosterArt-2039396c9e27d6271c96776414d6a38c.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
  rating: "MA 15+",
  genre: "Drama",
  year: 2021,
  language: "English",
};

const film2 = {
  id: 65737,
  title: "This Way Up",
  description:
    "This achingly funny and deeply moving comedy series follows the quick-witted Aine as she tries to get her life back in order and regain some semblance of happiness after suffering a nervous breakdown.",
  type: "series",
  image:
    "https://streamcoimg-a.akamaihd.net/000/657/37/65737-PosterArt-15bee119eb92a5f33670e6bd3f1af967.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
  rating: "MA 15+",
  genre: "Comedy",
  year: 2019,
  language: "English",
};

// Mock the useAppSelector function
jest.mock("src/redux/Store", () => ({
  ...jest.requireActual("src/redux/Store"),
  useAppSelector: jest.fn(),
}));

describe("Home component", () => {
  test("it renders with program data", () => {
    (useAppSelector as any).mockImplementation(() => [film1, film2]);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    // Check if all program cards are rendered
    expect(screen.getAllByTestId("card")).toHaveLength(2);
  });

  test("it renders skeleton when there's no program data", () => {
    (useAppSelector as any).mockImplementation(() => []);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    // Check if skeleton component is rendered
    expect(screen.getAllByTestId("skeleton-card")).toHaveLength(20);
  });

  test("it navigates to program details on Enter key press", () => {
    (useAppSelector as any).mockImplementation(() => [film1, film2]);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    // Trigger Enter key press on the first card
    const container = screen.getByTestId("container");

    // Simulate key press event
    fireEvent.keyDown(container, { key: "ArrowLeft", code: "ArrowLeft" });
    fireEvent.keyDown(container, { key: "Enter", code: "Enter" });

    // Check if navigation occurred to the first program item
    expect(window.location.pathname).toEqual(`/program/${film1.id}`);
  });
});
