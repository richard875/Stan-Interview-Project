type MediaType = {
  id: number;
  title: string;
  description: string;
  type: "series" | "movie";
  image: string;
  rating: string;
  genre: string;
  year: number;
  language: string;
};

export default MediaType;
