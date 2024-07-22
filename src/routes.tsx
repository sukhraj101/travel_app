
import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout';
import HomePage from './pages/home/HomePage';
import ActivityPage from './pages/activities/ActivityPage';
import TrackingPage from './pages/tracking/TrackingPage';


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
        }
      ]
    }
]);

export {router}