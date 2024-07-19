 
import { useEffect, useState } from 'react';
import Box from './box';
import './index.css'; 
import { postRequest } from '../../../service';
const OnSetupLoad = () => {
const [client,setClient] = useState({}); 
const [loading,setLoading] = useState(true);

 
useEffect(() =>{
    const fetchWebData = async () => {
        try {
            const res = await postRequest('v1/check-domain', {});
            if(res?.success){
               setClient(res.data); 
               setTimeout(() => {
                fetchWebData();
              },10000);
            } 
            setLoading(false);
        } catch (error) {
            console.error('Error fetching web data:', error);
        }
    }; 
    fetchWebData();
},[]);

  
  return (
    <>
    <div className="main">
        <header>
            <span className="header-logo">
                <img src="https://fivvia.com/assets/images/logo_small.svg" alt="logo" />
                <span>Fivvia</span>
            </span>
            <p>If you find yourself stuck here for a while, <a href="#!">Click here</a> to contact support.</p>
        </header>
        <div className="main-assets">
            <div className="main-text">
                <h2>Setting up your Store</h2>
                <p>Please wait it may take a few minutes <span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span></p>
            </div>
            <div className="compliance-svg">
              <Box />
            </div>
        </div>
        <footer>
            <p>"Opportunities don't happen. You create them." - Chris Grosser</p>
        </footer>
    </div>
    </>
  )
}

export default OnSetupLoad