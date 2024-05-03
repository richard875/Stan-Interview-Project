import styled from "styled-components";

const ProgramSkeleton = () => (
  <Container>
    <Card />
    <Right>
      <Line1 />
      <Line2 />
      <Line3 />
    </Right>
  </Container>
);

export default ProgramSkeleton;

const Container = styled.div`
  gap: 50px;
  height: 315px;
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #5b5555;
`;

const Right = styled.div`
  gap: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Line1 = styled(Card)`
  width: 150px;
  height: 30px;
`;

const Line2 = styled(Card)`
  width: 400px;
  height: 25px;
`;

const Line3 = styled(Card)`
  width: 630px;
  height: 130px;
`;
