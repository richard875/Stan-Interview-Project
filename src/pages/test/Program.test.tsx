import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, useParams } from "react-router-dom";
import Program from "../Program";
import { store } from "src/redux/Store";

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

// Mock the useParams function
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

// Mock the useAppSelector function
jest.mock("src/redux/Store", () => ({
  ...jest.requireActual("src/redux/Store"),
  useAppSelector: jest.fn().mockReturnValue([film1, film2]),
}));

describe("Program component", () => {
  test("renders program information correctly", () => {
    (useParams as jest.Mock).mockImplementation(() => ({ id: "67298" }));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Program />
        </BrowserRouter>
      </Provider>
    );

    // Expect the program information to be rendered correctly
    expect(screen.getByText(film1.title)).toBeInTheDocument();
    expect(screen.getByText(film1.description)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(film1.genre, "i"))).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(film1.year.toString(), "i"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(film1.language, "i"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(film1.rating.replaceAll(" ", ""), "i"))
    ).toBeInTheDocument();
    if (film1.type === "series") {
      expect(screen.getByText(/1 Season/i)).toBeInTheDocument();
    }
  });

  test("renders error component if program is not found", () => {
    (useParams as jest.Mock).mockImplementation(() => ({ id: "10000" }));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Program />
        </BrowserRouter>
      </Provider>
    );

    // Ensure error component is rendered when program is not found
    const message = screen.getByTestId("message");
    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent(
      "An unknown error occurred. please try again later"
    );
  });
});
