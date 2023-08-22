import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Error from '../components/Error';

export const movieRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
]);
