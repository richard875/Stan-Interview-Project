import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import useQuery from "src/hooks/UseQuery";
import { useAppSelector } from "src/redux/Store";
import HomeSkeleton from "src/components/HomeSkeleton";

const Home = () => {
  // Navigation
  const query = useQuery();
  const navigate = useNavigate();

  // Get from Redux
  const mediaData = useAppSelector((state) => state.media.value);

  // Refs and Hooks
  const ref = React.useRef<HTMLDivElement>(null);
  const [selected, setSelected] = React.useState<number>();

  const handleKeyDown = (event: KeyboardEvent) => {
    // Prevent default scrolling with arrow keys
    event.preventDefault();

    if (
      (event.key === "ArrowRight" || event.key === "ArrowLeft") &&
      selected === undefined
    ) {
      setSelected(0);
      return;
    }

    if (event.key === "ArrowRight" && mediaData) {
      if (selected === mediaData.length - 1) return; // Last item
      if (selected! % 5 === 0)
        ref.current?.scrollTo({
          left: 1073 * Math.floor((selected! + 1) / 5),
          behavior: "smooth",
        });

      setSelected(selected! + 1);
    }

    if (event.key === "ArrowLeft" && mediaData) {
      if (selected === 0) return; // First item
      if (selected! % 5 === 0)
        ref.current?.scrollTo({
          left: 1073 * Math.floor((selected! + 1) / 5 - 1),
          behavior: "smooth",
        });

      setSelected(selected! - 1);
    }

    if (event.key === "Enter" && mediaData && selected)
      navigate(`/program/${mediaData[selected].id}`);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  React.useEffect(() => {
    setSelected(undefined);
    ref.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [query]);

  return mediaData && mediaData.length ? (
    <Container ref={ref}>
      {mediaData.map((media, i) => (
        <Link key={i} to={`/program/${media.id}`}>
          <Card key={i} src={media.image} $selected={i === selected} />
        </Link>
      ))}
    </Container>
  ) : (
    <HomeSkeleton />
  );
};

export default Home;

const Container = styled.div`
  gap: 3px;
  display: flex;
  overflow-y: hidden;

  // Hide Scrollbar
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.img<{ $selected: boolean }>`
  width: 200px;
  height: 300px;
  flex-shrink: 0;
  object-fit: cover;
  margin: 6px;
  outline: ${(props) => (props.$selected ? "3px solid #009aff" : "none")};
  outline-offset: 3px;
  border-radius: 1px;
  cursor: pointer;
`;
