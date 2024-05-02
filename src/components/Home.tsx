import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Logo from "../../static/logo.svg";

const Home = () => (
  <Container>
    <Wrapper>
      <TopBar>
        <img width={150} src={Logo} alt="Stan Logo" />
        <Menu>
          <div>Home</div>
          <div>TV Shows</div>
          <div>Movies</div>
        </Menu>
      </TopBar>
      <Outlet />
    </Wrapper>
  </Container>
);

export default Home;

const Container = styled.div`
  height: 100%;
  color: #ffffff;
  background-color: #101010;
`;

const Wrapper = styled.div`
  padding: 30px 40px;
`;

const TopBar = styled.div`
  gap: 75px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
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
