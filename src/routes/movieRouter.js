import { createBrowserRouter } from 'react-router-dom';
import Error from '../components/Error';
import Root from '../components/Root';

export const movieRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
  },
]);
