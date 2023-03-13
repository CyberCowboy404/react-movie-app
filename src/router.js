import React from 'react';
import { createBrowserRouter, } from 'react-router-dom';

import Home from 'pages/home/Home';
import BookInfo from 'pages/book-info/BookInfo';

import NotFound from 'pages/not-found';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/book/:bookId",
    element: <BookInfo />,
  },
]);

export default router;
