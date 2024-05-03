import renderer from "react-test-renderer";
import ProgramSkeleton from "../ProgramSkeleton";

it("renders correctly", () => {
  const component = renderer.create(<ProgramSkeleton />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
