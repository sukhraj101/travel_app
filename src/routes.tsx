
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
import VendorLayout from './pages/cpanel/vendors/vendorLayout';
import TourList from './pages/cpanel/vendors/tours';
import AdminSettings from './pages/cpanel/settings/AdminSettings';
import TourListing from './pages/cpanel/tours/listing';
import Subscription from './pages/cpanel/subscriptions';
import VendorEdit from './pages/cpanel/vendors/edit';


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
          path:'/tour/:id/detail',
          element:<ActivityPage/>
        },
        {
          path:'/tracking',
          element:<TrackingPage/>
        }
      ]
    },
    {
      path:'/cpanel/login',
      element:<Login />
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
          path:'admin-setting',
          element:<AdminSettings />
        },
        {
          path:'subscription',
          element:<Subscription />
        },
         
        {
          path:'/cpanel/tours/listing', 
          element:<TourListing />
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
          path:'/cpanel/vendor-detail/:slug/tour/:id/edit', 
          element:<CreateTour />
        },
      
        {
          path: "/cpanel/vendor-detail",
          element:<VendorLayout/>,
          children:[
            {
              path:'/cpanel/vendor-detail/:slug/info', 
              element:<VendorDetail />
            },
            {
              path:'/cpanel/vendor-detail/:slug/edit', 
              element:<VendorEdit />
            },
            {
              path:'/cpanel/vendor-detail/:slug/tours', 
              element:<TourList />
            },
          
          ]
        }  
      ]
    }, 
    {
      path: "*",
      element: <NotFound/>,
    }
]); 
export {router} 