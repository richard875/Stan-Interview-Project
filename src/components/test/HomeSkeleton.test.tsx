import renderer from "react-test-renderer";
import HomeSkeleton from "../HomeSkeleton";

describe("HomeSkeleton component", () => {
  test("it renders correctly", () => {
    const component = renderer.create(<HomeSkeleton />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
