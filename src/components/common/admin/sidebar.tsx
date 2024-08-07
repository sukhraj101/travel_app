import AdminMenu from "./components/AdminMenu"
import { sidebarHeadings } from "./sidebarHeading"

const AdminSidebar = ()=> {
  return (
    <>
      <aside className="left-sidebar" data-sidebarbg="skin5">
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