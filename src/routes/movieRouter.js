import { createBrowserRouter } from 'react-router-dom';
import Error from '../components/Error';
import Root from '../components/Root';
import Movies from '../components/Movies';

export const movieRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/movies/:movieID',
        element: <h3></h3>,
      },
    ],
  },
]);
