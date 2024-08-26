import { RouterProvider  } from 'react-router-dom'
import './App.css'
import { router } from './routes'
import { useEffect, useState } from 'react';
import { postRequest } from './service';
import NotFound from './pages/notfound/notfound';
import OnSetupLoad from './components/common/onSetupLoad'; 
import Loader from './components/common/admin/components/loader';

interface Client {
  status:number; 
}
const App = () => {
  const [client,setClient] = useState<Client>();
  const [isDomain,setIsDomain] = useState(false);
  const [loading,setLoading] = useState(true);
    useEffect(() => {
        const fetchWebData = async () => {
          try {
            const res = await postRequest('v1/check-domain', {});
            if(res?.success){
              setClient(res.data); 
            }
            setIsDomain(res.success);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching web data:', error);
          }
        }; 
        fetchWebData();
    },[]);  
  return (
     <>
         {
         loading ? <Loader /> : (
            isDomain ?  (
              client&& client?.status === 1 ? (
                  <RouterProvider router={router} />
                ) : (
                <OnSetupLoad/> 
                ) 
            ) : (
              <NotFound />
            ) 
         )
         } 
     </>
  )
}

export default App