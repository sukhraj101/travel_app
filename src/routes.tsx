
import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout';
import HomePage from './pages/home/HomePage';
import ActivityPage from './pages/activities/ActivityPage';
import TrackingPage from './pages/tracking/TrackingPage';
import AdminLayout from './pages/cpanel/layout';
import Dashboard from './pages/cpanel';
import Login from './pages/home/login';
import NotFound from './pages/notfound/notfound';
import CreateTour from './pages/cpanel/tours';
import VendorListing from './pages/cpanel/vendors';
import CreateVendor from './pages/cpanel/vendors/create';
import VendorDetail from './pages/cpanel/vendors/details';


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
          path:'/tracking',
          element:<TrackingPage/>
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
        },
        {
          path:'/cpanel/vendor/listing', 
          element:<VendorListing />
        },
        {
          path:'/cpanel/vendor/create', 
          element:<CreateVendor />
        },
        {
          path:'/cpanel/vendor/:slug/detail', 
          element:<VendorDetail />
        }   
      ]
    }, 
    {
      path: "*",
      element: <NotFound/>,
    }
]);

export {router}