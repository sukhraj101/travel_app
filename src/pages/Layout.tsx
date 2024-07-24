import React from 'react';
import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import { Outlet } from 'react-router-dom'; 

const Layout: React.FC = () => { 
  return (
    <>
      <div className="lt_container">
        <Header/>
          <Outlet/>
        <Footer/>
      </div> 
    </>
  );
}

export default Layout;
