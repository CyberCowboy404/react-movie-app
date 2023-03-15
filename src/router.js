import { createBrowserRouter } from "react-router-dom";

import store from "stores";
import Container from "components/container/Container";
import Home from "./pages/home/Home";
import FilmInfo from "./pages/film-info/FilmInfo";
import Search from "./pages/search/SearchPage";

import NotFound from "./pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    loader: () => store.filmsStore.getAllFilms(),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/film/:id",
        element: <FilmInfo />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ]
  },
]);

export default router;
