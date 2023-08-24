import { createBrowserRouter } from 'react-router-dom';
import Error from '../pages/Error';
import Root from '../pages/Root.jsx';
import MovieDetail from '../pages/MovieDetail';
import MovieView from '../pages/MovieView';

export const movieRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <MovieView />,
      },
      {
        path: '/movies/:movieID',
        element: <MovieDetail />,
      },
    ],
  },
]);
