import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MediaType from "src/types/MediaType";
import { useAppSelector } from "src/redux/Store";
import ProgramSkeleton from "src/components/ProgramSkeleton";

const Program = () => {
  // Get the id from the URL
  const { id } = useParams();

  // Get from Redux
  const mediaData = useAppSelector((state) => state.media.value);

  const [media, setMedia] = React.useState<MediaType>();

  React.useEffect(() => {
    if (mediaData) {
      const data = mediaData.find((media) => media.id === Number(id));
      setMedia(data);
    }
  }, [id, mediaData]);

  return media ? (
    <Container>
      <Card src={media.image} />
      <Right>
        <Line1>{media.title}</Line1>
        <Line2>
          {media.rating.replaceAll(" ", "")} | {media.year} | 1 Season |{" "}
          {media.genre} | {media.language}
        </Line2>
        <Line3>{media.description}</Line3>
      </Right>
    </Container>
  ) : (
    <ProgramSkeleton />
  );
};

export default Program;

const Container = styled.div`
  gap: 50px;
  height: 315px;
  display: flex;
  align-items: center;
  margin-top: 50px;
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
  width: 600px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 27px;
  color: #ffffff;
`;
