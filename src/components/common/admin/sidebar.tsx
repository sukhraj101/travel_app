import AdminMenu from "./components/AdminMenu"
import { sidebarHeadings } from "./sidebarHeading";
import { useState} from "react";

const AdminSidebar = ()=> {

  // const [isActive1, setIsActive1] = useState(false)
  // const [isActive2, setIsActive2] = useState(false)
  // const [isActive3, setIsActive3] = useState(false)
  // const [isActive4, setIsActive4] = useState(false)
  // const [isActive5, setIsActive5] = useState(false)

  // const activateSideMenu1 = (e) => { e.preventDefault(); setIsActive1(!isActive1); }
  // const activateSideMenu2 = (e) => { e.preventDefault(); setIsActive2(!isActive2); }
  // const activateSideMenu3 = (e) => { e.preventDefault(); setIsActive3(!isActive3); }
  // const activateSideMenu4 = (e) => { e.preventDefault(); setIsActive4(!isActive4); }
  // const activateSideMenu5 = (e) => { e.preventDefault(); setIsActive5(!isActive5); }



  return (
    <>
      <aside className="left-sidebar" data-sidebarbg="skin5">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="pt-4">

              {
                sidebarHeadings.map((menu)=>{
                  return <AdminMenu key={menu.id} menuList={menu}/>
                })
              } 

              {/*
              <li className="sidebar-item">
                <a
                  className={`sidebar-link has-arrow waves-effect waves-dark ${isActive1 ? 'active' : ''}`}
                  onClick={activateSideMenu1}
                  href="#"
                  aria-expanded="false"
                  ><i className="mdi mdi-receipt"></i><span className="hide-menu">Forms </span></a>

                  <ul aria-expanded="false" className={`collapse first-level ${isActive1 ? 'in' : ''}`}>
                    <li className="sidebar-item">
                      <a href="form-basic.html" className="sidebar-link">
                        <i className="mdi mdi-note-outline"></i><span className="hide-menu"> Form Basic </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="form-wizard.html" className="sidebar-link">
                        <i className="mdi mdi-note-plus"></i><span className="hide-menu"> Form Wizard </span>
                      </a>
                    </li>
                  </ul>

              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="pages-buttons.html"
                  aria-expanded="false"
                  ><i className="mdi mdi-relative-scale"></i><span className="hide-menu">Buttons</span></a>
              </li>
              <li className="sidebar-item">
                <a
                  className={`sidebar-link has-arrow waves-effect waves-dark ${isActive2 ? 'active' : ''}`}
                  onClick={activateSideMenu2}
                  href="#"
                  aria-expanded="false"
                  ><i className="mdi mdi-face"></i><span className="hide-menu">Icons </span></a>
                  <ul aria-expanded="false" className={`collapse first-level ${isActive2 ? 'in' : ''}`}>
                    <li className="sidebar-item">
                      <a href="icon-material.html" className="sidebar-link">
                        <i className="mdi mdi-emoticon"></i><span className="hide-menu"> Material Icons </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="icon-fontawesome.html" className="sidebar-link">
                        <i className="mdi mdi-emoticon-cool"></i><span className="hide-menu"> Font Awesome Icons </span>
                      </a>
                    </li>
                  </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="pages-elements.html"
                  aria-expanded="false"
                  ><i className="mdi mdi-pencil"></i><span className="hide-menu">Elements</span></a>
              </li>
              <li className="sidebar-item">
                <a
                  className={`sidebar-link has-arrow waves-effect waves-dark ${isActive3 ? 'active' : ''}`}
                  onClick={activateSideMenu3}
                  href="#"
                  aria-expanded="false"
                  ><i className="mdi mdi-move-resize-variant"></i><span className="hide-menu">Addons </span></a>
                <ul aria-expanded="false" className={`collapse first-level ${isActive3 ? 'in' : ''}`}>
                  <li className="sidebar-item">
                    <a href="index2.html" className="sidebar-link">
                      <i className="mdi mdi-view-dashboard"></i><span className="hide-menu"> Dashboard-2 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-gallery.html" className="sidebar-link">
                      <i className="mdi mdi-multiplication-box"></i><span className="hide-menu"> Gallery </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-calendar.html" className="sidebar-link">
                      <i className="mdi mdi-calendar-check"></i><span className="hide-menu"> Calendar </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-invoice.html" className="sidebar-link">
                      <i className="mdi mdi-bulletin-board"></i><span className="hide-menu"> Invoice </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-chat.html" className="sidebar-link">
                      <i className="mdi mdi-message-outline"></i><span className="hide-menu"> Chat Option </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className={`sidebar-link has-arrow waves-effect waves-dark ${isActive4 ? 'active' : ''}`}
                  onClick={activateSideMenu4}
                  href="#"
                  aria-expanded="false"
                  ><i className="mdi mdi-account-key"></i><span className="hide-menu">Authentication </span></a>
                <ul aria-expanded="false" className={`collapse first-level ${isActive4 ? 'in' : ''}`}>
                  <li className="sidebar-item">
                    <a href="authentication-login.html" className="sidebar-link">
                      <i className="mdi mdi-all-inclusive"></i><span className="hide-menu"> Login </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="authentication-register.html" className="sidebar-link">
                      <i className="mdi mdi-all-inclusive"></i><span className="hide-menu"> Register </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className={`sidebar-link has-arrow waves-effect waves-dark ${isActive5 ? 'active' : ''}`}
                  onClick={activateSideMenu5}
                  href="#"
                  aria-expanded="false"
                  ><i className="mdi mdi-alert"></i><span className="hide-menu">Errors </span></a>
                <ul aria-expanded="false" className={`collapse first-level ${isActive5 ? 'in' : ''}`}>
                  <li className="sidebar-item">
                    <a href="error-403.html" className="sidebar-link">
                      <i className="mdi mdi-alert-octagon"></i><span className="hide-menu"> Error 403 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="error-404.html" className="sidebar-link">
                      <i className="mdi mdi-alert-octagon"></i><span className="hide-menu"> Error 404 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="error-405.html" className="sidebar-link">
                      <i className="mdi mdi-alert-octagon"></i><span className="hide-menu"> Error 405 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="error-500.html" className="sidebar-link">
                      <i className="mdi mdi-alert-octagon"></i><span className="hide-menu"> Error 500 </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item p-3">
                <a
                  href="https://github.com/wrappixel/matrix-admin-bt5"
                  target="_blank"
                  className="
                    w-100
                    btn btn-cyan
                    d-flex
                    align-items-center
                    text-white
                  "><i className="mdi mdi-cloud-download font-20 me-2"></i>Free</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}


export default AdminSidebar