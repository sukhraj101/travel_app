import { Outlet } from 'react-router-dom';
import AdminHeader from '../../components/common/admin/header';
import AdminSidebar from '../../components/common/admin/sidebar';

const AdminLayout = () => {
  return (
    <>
      {/* <div className="preloader">
        <div className="lds-ripple">
          <div className="lds-pos"></div>
          <div className="lds-pos"></div>
        </div>
      </div> */}

      <div 
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >

        <AdminHeader />
        <AdminSidebar />
        
        <div className="page-wrapper">
          <div className="page-breadcrumb">
            <div className="row">
              <div className="col-12 d-flex no-block align-items-center">
                <h4 className="page-title">Dashboard</h4>
                <div className="ms-auto text-end">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Library
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          
          <Outlet />
          
          <footer className="footer text-center">
            All Rights Reserved by Matrix-admin. Designed and Developed by
            <a href="https://www.wrappixel.com">WrapPixel</a>.
          </footer>
        </div>
      </div>
    </>
  )
}
export default AdminLayout;