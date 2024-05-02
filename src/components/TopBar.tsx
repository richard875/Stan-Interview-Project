import styled from "styled-components";
import Logo from "../../static/logo.svg";
import { Link } from "react-router-dom";

const TopBar = () => (
  <Container>
    <Link to={"/"}>
      <img width={150} src={Logo} alt="Stan Logo" />
    </Link>
    <Menu>
      <Link to={"/"}>
        <div>Home</div>
      </Link>
      <div>TV Shows</div>
      <div>Movies</div>
    </Menu>
  </Container>
);

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

  div {
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    color: #898989;
    transition: all 0.1s ease-in-out;

    &:hover {
      color: #ffffff;
    }
  }
`;
