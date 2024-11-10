import { createBrowserRouter } from 'react-router-dom';
import { default as Homepage } from '../pages/HomePage';
import Layout from '../pages/Layout';

import { default as GameDetails } from '../components/GameDetails';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',

    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: `games/:id`,
        element: <GameDetails />,
      },
    ],
  },
]);

export default router;
