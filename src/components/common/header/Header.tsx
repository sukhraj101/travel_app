const url = import.meta.env.VITE_PUBLIC_URL;
import './header.css'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img src={`${url}/images/common/logo.png`} style={{width:'100%', maxWidth:'190px'}} alt="" />
            </a>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Social Media</a>
              </li>
            </ul>
            <div className="nav-right-part">
              <i className="fa fa-info-circle fs-4"></i>
              <i className="fa fa-globe fs-4"></i>
              <a href='#' className="btn-header">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header