import { createBrowserRouter } from 'react-router-dom';
import Error from '../pages/Error';
import Root from '../pages/Root.jsx';
// import Movies from '../pages/Movies.jsx';
import MovieDetail from '../pages/MovieDetail';

export const movieRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Movies />,
      // },
      {
        path: '/movies/:movieID',
        element: <MovieDetail />,
      },
    ],
  },
]);
