import renderer from "react-test-renderer";
import HomeSkeleton from "../HomeSkeleton";

it("renders correctly", () => {
  const component = renderer.create(<HomeSkeleton />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
