import { createBrowserRouter } from 'react-router-dom';
import Error from '../components/Error';
import Root from '../components/Root';
import Movies from '../components/Movies';
import MovieDetail from '../components/MovieDetail';

export const movieRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Movies />,
      },
      {
        path: '/movies/:movieID',
        element: <MovieDetail />,
      },
    ],
  },
]);
