import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import Program from "./pages/Program";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/program/:id",
        element: <Program />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
