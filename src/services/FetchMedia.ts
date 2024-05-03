import MediaType from "src/types/MediaType";

const API_URL =
  "https://raw.githubusercontent.com/StreamCo/stan-tv-coding-challenge/master/reactjs/data.json";

const FetchMedia = async (): Promise<MediaType[] | null> => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error(error);
    window.location.href = "/error";
  }

  return null;
};

export default FetchMedia;
