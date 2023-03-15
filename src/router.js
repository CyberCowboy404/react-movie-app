import { createBrowserRouter } from "react-router-dom";

import store from "stores";
import Home from "./pages/home/Home";
import FilmInfo from "./pages/film-info/FilmInfo";

import NotFound from "./pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    loader: () => store.filmsStore.getAllFilms(),
    children: [
      {
        path: "/film/:filmInfo",
        element: <FilmInfo />
      }
    ]
  }
]);

export default router;
