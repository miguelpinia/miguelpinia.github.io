import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from 'layout';

import { Typography } from '@mui/material';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Typography color='text.primary'>Hola mundo</Typography> },
      ],
    },
  ]);
};

export default Router;
