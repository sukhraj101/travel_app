
import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout';
import HomePage from './pages/home/HomePage';
import ActivityPage from './pages/activities/ActivityPage';
import AdminLayout from './pages/cpanel/layout';
import Dashboard from './pages/cpanel';
import Login from './pages/home/login';
import NotFound from './pages/notfound/notfound';
import CreateTour from './pages/cpanel/tours';


const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<HomePage/>
        },
        {
          path:'/activities',
          element:<ActivityPage/>
        },
        {
          path:'/login',
          element:<Login />
        }
      ]
    },
    {
      path: "/cpanel",
      element:<AdminLayout/>,
      children:[
        {
          path:'/cpanel', 
          element:<Dashboard />
        },
        {
          path:'/cpanel/tours/listing', 
          element:<CreateTour />
        },
        {
          path:'/cpanel/tours/create', 
          element:<CreateTour />
        }       
      ]
    }, 
    {
      path: "*",
      element: <NotFound/>,
    }
]);

export {router}