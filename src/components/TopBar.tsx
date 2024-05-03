import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../static/logo.svg";
import useQuery from "src/hooks/UseQuery";

const TopBar = () => {
  const query = useQuery();
  const type = query.get("type");

  return (
    <Container>
      <Link to={"/"}>
        <img width={150} src={Logo} alt="Stan Logo" />
      </Link>
      <Menu>
        <Link to={"/"}>
          <MenuItem $selected={!type}>Home</MenuItem>
        </Link>
        <Link to={"/?type=series"}>
          <MenuItem $selected={type === "series"}>TV Shows</MenuItem>
        </Link>
        <Link to={"/?type=movie"}>
          <MenuItem $selected={type === "movie"}>Movies</MenuItem>
        </Link>
      </Menu>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  gap: 75px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Menu = styled.div`
  display: flex;
  gap: 35px;
`;

const MenuItem = styled.div<{ $selected: boolean }>`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => (props.$selected ? "#ffffff" : "#898989")};
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #ffffff;
  }
`;
