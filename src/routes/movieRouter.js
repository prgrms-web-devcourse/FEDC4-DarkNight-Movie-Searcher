import { createBrowserRouter } from 'react-router-dom';
import Error from '../pages/Error';
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
        index: true,
        element: <Movies />,
      },
      {
        path: '/movies/:movieID',
        element: <MovieDetail />,
      },
    ],
  },
]);
