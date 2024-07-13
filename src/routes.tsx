
import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout';
import HomePage from './pages/home/HomePage';


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
          path:'/data',
          element:<div>data</div>
        }
      ]
    }
]);

export {router}