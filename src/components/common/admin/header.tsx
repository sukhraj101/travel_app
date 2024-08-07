import userIcon from "./../../../assets/images/user.png"

export default function AdminHeader() {
  return (
    <>
      <header className="topbar" data-navbarbg="skin5">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
            <div className="navbar-header" data-logobg="skin5">
              <a className="navbar-brand" href="/cpanel">
              <span className="logo-text ms-2">
              <img
                  src="./../../../../public/admin/assets/images/logo-text.png"
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
            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
              data-navbarbg="skin5"
              >
              <ul className="navbar-nav float-start me-auto">
                  <li className="nav-item d-none d-lg-block">
                    <a
                        className="nav-link sidebartoggler waves-effect waves-light"
                        href="#"
                        data-sidebartype="mini-sidebar"
                        ><i className="mdi mdi-menu font-24"></i></a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                    <span className="d-none d-md-block"
                        >Create New <i className="fa fa-angle-down"></i></span>
                    <span className="d-block d-md-none"
                        ><i className="fa fa-plus"></i></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item search-box">
                    <a
                        className="nav-link waves-effect waves-dark"
                        href="#"
                        ><i className="mdi mdi-magnify fs-4"></i></a>
                    <form className="app-search position-absolute">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search &amp; enter"
                          />
                        <a className="srh-btn"><i className="mdi mdi-window-close"></i></a>
                    </form>
                  </li> */}
              </ul>
              <ul className="navbar-nav float-end">
                  <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                    <i className="mdi mdi-bell font-24"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle waves-effect waves-dark"
                        href="#"
                        id="2"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                    <i className="font-24 mdi mdi-comment-processing"></i>
                    </a>
                    <ul
                        className="
                        dropdown-menu dropdown-menu-end
                        mailbox
                        animated
                        bounceInDown
                        "
                        aria-labelledby="2"
                        >
                        <ul className="list-style-none">
                          <li>
                              <div className="">
                                <a href="#" className="link border-top">
                                    <div className="d-flex no-block align-items-center p-10">
                                      <span
                                          className="
                                          btn btn-success btn-circle
                                          d-flex
                                          align-items-center
                                          justify-content-center
                                          "
                                          ><i className="mdi mdi-calendar text-white fs-4"></i></span>
                                      <div className="ms-2">
                                          <h5 className="mb-0">Event today</h5>
                                          <span className="mail-desc">Just a reminder that event</span>
                                      </div>
                                    </div>
                                </a>
                                <a href="#" className="link border-top">
                                    <div className="d-flex no-block align-items-center p-10">
                                      <span
                                          className="
                                          btn btn-info btn-circle
                                          d-flex
                                          align-items-center
                                          justify-content-center
                                          "
                                          ><i className="mdi mdi-settings fs-4"></i></span>
                                      <div className="ms-2">
                                          <h5 className="mb-0">Settings</h5>
                                          <span className="mail-desc"
                                            >You can customize this template</span>
                                      </div>
                                    </div>
                                </a>
                                <a href="#" className="link border-top">
                                    <div className="d-flex no-block align-items-center p-10">
                                      <span
                                          className="
                                          btn btn-primary btn-circle
                                          d-flex
                                          align-items-center
                                          justify-content-center
                                          "
                                          ><i className="mdi mdi-account fs-4"></i></span>
                                      <div className="ms-2">
                                          <h5 className="mb-0">Pavan kumar</h5>
                                          <span className="mail-desc"
                                            >Just see the my admin!</span>
                                      </div>
                                    </div>
                                </a>
                                <a href="#" className="link border-top">
                                    <div className="d-flex no-block align-items-center p-10">
                                      <span
                                          className="
                                          btn btn-danger btn-circle
                                          d-flex
                                          align-items-center
                                          justify-content-center
                                          "
                                          ><i className="mdi mdi-link fs-4"></i></span>
                                      <div className="ms-2">
                                          <h5 className="mb-0">Luanch Admin</h5>
                                          <span className="mail-desc"
                                            >Just see the my new admin!</span>
                                      </div>
                                    </div>
                                </a>
                              </div>
                          </li>
                        </ul>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                        className="
                        nav-link
                        dropdown-toggle
                        text-muted
                        waves-effect waves-dark
                        pro-pic
                        "
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                    <img
                        src={userIcon}
                        alt="user"
                        className="rounded-circle"
                        width="31"
                        />
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-end user-dd animated"
                        aria-labelledby="navbarDropdown"
                        >
                        <a className="dropdown-item" href="#"
                          ><i className="mdi mdi-account me-1 ms-1"></i> My Profile</a>
                        <a className="dropdown-item" href="#"
                          ><i className="mdi mdi-wallet me-1 ms-1"></i> My Balance</a>
                        <a className="dropdown-item" href="#"
                          ><i className="mdi mdi-email me-1 ms-1"></i> Inbox</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#"
                          ><i className="mdi mdi-settings me-1 ms-1"></i> Account Setting</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#"
                          ><i className="fa fa-power-off me-1 ms-1"></i> Logout</a>
                        <div className="dropdown-divider"></div>
                        <div className="ps-4 p-10">
                          <a
                              href="#"
                              className="btn btn-sm btn-success btn-rounded text-white"
                              >View Profile</a>
                        </div>
                    </ul>
                  </li>
              </ul>
            </div>
        </nav>
      </header>
    </>
  )
}
