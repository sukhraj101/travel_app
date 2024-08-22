import AdminMenu from "./components/AdminMenu"
import { sidebarHeadings } from "./sidebarHeading"

const AdminSidebar = ()=> {
  return (
    <>
      <aside className="left-sidebar" data-sidebarbg="skin5">


      <div className="navbar-header" data-logobg="skin5">
              <a className="navbar-brand" href="/cpanel">
              <span className="logo-text ms-2">
              <img
                  src="/admin/assets/images/logo-text.png"
                  alt="homepage"
                  className="light-logo"
                  />
              </span>
              </a>
              <a
                  className="nav-toggler waves-effect waves-light d-block d-md-none"
                  href="#"
                  ><i className="ti-menu ti-close"></i></a>
            </div>




        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="pt-4">
              {sidebarHeadings.map((menu)=>{
                return <AdminMenu key={menu.id} menuList={menu}/>
              })} 
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default AdminSidebar