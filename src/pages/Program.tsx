import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Error from "./Error";
import MediaType from "src/types/MediaType";
import { useAppSelector } from "src/redux/Store";
import ProgramSkeleton from "src/components/ProgramSkeleton";

const Render = ({ media }: { media: MediaType | undefined }) =>
  media ? (
    <Container>
      <Card src={media.image} alt={media.title} />
      <Right>
        <Line1>{media.title}</Line1>
        <Line2>
          {media.rating.replaceAll(" ", "")} | {media.year}
          {media.type === "series" ? " | 1 Season" : ""} | {media.genre} |{" "}
          {media.language}
        </Line2>
        <Line3>{media.description}</Line3>
      </Right>
    </Container>
  ) : (
    <ProgramSkeleton />
  );

const Program = () => {
  // Navigation and URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Get from Redux
  const mediaData = useAppSelector((state) => state.media.value);

  // Local state
  const [error, setError] = React.useState(false);
  const [media, setMedia] = React.useState<MediaType>();

  const handleKeyDown = (event: KeyboardEvent) => {
    // Prevent default scrolling with arrow keys
    event.preventDefault();
    if (event.key === "Backspace") navigate("/");
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  React.useEffect(() => {
    if (mediaData) {
      const data = mediaData.find((media) => media.id === Number(id));
      if (!data) setError(true);
      setMedia(data);
    }
  }, [id, mediaData]);

  return error ? <Error /> : <Render media={media} />;
};

export default Program;

const Container = styled.div`
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media (min-width: 576px) {
    height: 315px;
    flex-direction: row;
  }
`;

const Card = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  background-color: #5b5555;
`;

const Right = styled.div`
  gap: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Line1 = styled.h2`
  font-size: 35px;
  font-weight: 400;
  color: #ffffff;
`;

const Line2 = styled.h5`
  font-size: 17px;
  font-weight: 500;
  color: #ffffff;
`;

const Line3 = styled.p`
  max-width: 600px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 27px;
  color: #ffffff;
`;
