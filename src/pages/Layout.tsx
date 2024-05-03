import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import TopBar from "src/components/TopBar";
import { assign } from "src/redux/MediaSlice";
import FetchMedia from "src/services/FetchMedia";
import { useAppDispatch, useAppSelector } from "src/redux/Store";

const Layout = () => {
  // Redux
  const dispatch = useAppDispatch();
  const mediaData = useAppSelector((state) => state.media.value);

  // Fetch media data
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchMedia();
        if (data) dispatch(assign(data));
      } catch (error) {
        console.error("Error fetching media data:", error);
        window.location.href = "/error";
      }
    };

    // Only fetch data if it's not already in the store
    if (!mediaData) fetchData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <TopBar />
        <Outlet />
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
  padding-top: 30px;
`;
