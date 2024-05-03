import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Error from "./Error";
import useQuery from "src/hooks/UseQuery";
import TopBar from "src/components/TopBar";
import breakpoint from "src/styles/breakpoint";
import FetchMedia from "src/services/FetchMedia";
import { assign, assignConst } from "src/redux/MediaSlice";
import { useAppDispatch, useAppSelector } from "src/redux/Store";

const Layout = () => {
  const query = useQuery();

  // Redux
  const dispatch = useAppDispatch();
  const mediaDataConst = useAppSelector((state) => state.media.valueConst);

  const [isError, setIsError] = React.useState(false);

  // Fetch media data
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchMedia();
        if (data) dispatch(assignConst(data));
      } catch (error) {
        setIsError(true);
        console.error("Error fetching media data:", error);
      }
    };

    // Only fetch data if it's not already in the store
    if (!mediaDataConst) fetchData();
  }, []);

  React.useEffect(() => {
    const type = query.get("type");
    if ((type === "series" || type === "movie") && mediaDataConst) {
      const data = mediaDataConst.filter((item) => item.type === type);
      dispatch(assign(data));
    } else {
      dispatch(assign(mediaDataConst));
    }
  }, [mediaDataConst, query]);

  return (
    <Container>
      <Wrapper>
        <TopBar />
        {isError ? <Error /> : <Outlet />}
      </Wrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100%;
  color: #ffffff;
  background-color: #101010;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;

  @media ${breakpoint.up.sm} {
    padding: 30px;
  }
`;
