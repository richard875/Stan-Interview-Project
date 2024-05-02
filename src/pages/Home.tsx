import styled from "styled-components";
import { Outlet } from "react-router-dom";
import TopBar from "src/components/TopBar";

const Home = () => (
  <Container>
    <Wrapper>
      <TopBar />
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
