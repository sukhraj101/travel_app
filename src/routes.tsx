
import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout';
import HomePage from './pages/home/HomePage';
import ActivityPage from './pages/activities/ActivityPage';


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
        }
      ]
    }
]);

export {router}