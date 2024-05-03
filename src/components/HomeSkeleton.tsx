import styled from "styled-components";

const HomeSkeleton = () => (
  <Container>
    {[...Array(20)].map((e, i) => (
      <Card key={i} />
    ))}
  </Container>
);

export default HomeSkeleton;

const Container = styled.div`
  gap: 3px;
  display: flex;
  overflow: hidden;
`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  flex-shrink: 0;
  background-color: #606060;
  margin: 6px;
`;
