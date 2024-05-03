import styled from "styled-components";

const Error = () => (
  <Message data-testid="message">
    An unknown error occurred. please try again later
  </Message>
);

export default Error;

const Message = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #636363;
`;
