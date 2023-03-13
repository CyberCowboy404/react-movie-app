import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import FilmInfo from "./pages/film-info/FilmInfo";

import NotFound from "./pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/film/:filmInfo",
    element: <FilmInfo />,
  },
]);

export default router;
