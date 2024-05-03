import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../static/logo.svg";
import useQuery from "src/hooks/UseQuery";
import breakpoint from "src/styles/breakpoint";

const TopBar = () => {
  const query = useQuery();
  const type = query.get("type");

  return (
    <Container>
      <Link to={"/"}>
        <img src={Logo} alt="Stan Logo" />
      </Link>
      <Menu>
        <Link data-testid="home" to={"/"}>
          <MenuItem $selected={location.pathname === "/" && !type}>
            Home
          </MenuItem>
        </Link>
        <Link data-testid="series" to={"/?type=series"}>
          <MenuItem $selected={type === "series"}>TV Shows</MenuItem>
        </Link>
        <Link data-testid="movie" to={"/?type=movie"}>
          <MenuItem $selected={type === "movie"}>Movies</MenuItem>
        </Link>
      </Menu>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media ${breakpoint.up.sm} {
    gap: 75px;
    justify-content: flex-start;
  }

  img {
    width: 100px;

    @media ${breakpoint.up.sm} {
      width: 150px;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 15px;

  @media ${breakpoint.up.sm} {
    gap: 35px;
  }
`;

const MenuItem = styled.div<{ $selected: boolean }>`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => (props.$selected ? "#ffffff" : "#898989")};
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #ffffff;
  }

  @media ${breakpoint.up.sm} {
    font-size: 18px;
  }
`;
