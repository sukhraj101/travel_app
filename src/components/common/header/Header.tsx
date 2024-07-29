const url = import.meta.env.VITE_PUBLIC_URL;
import { NavLink, useLocation } from 'react-router-dom';
import './header.css'
import HeaderSearch from './HeaderSearch';

const Header = () => {

  const location = useLocation().pathname;


  return (
    <>
      <nav className="navbar navbar-expand-lg desktop-nav">
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
          <div className="collapse navbar-collapse align-items-start pt-4" id="navbarTogglerDemo01">
            <NavLink className="navbar-brand" to="/">
              <img src={`${url}/images/common/logo.png`} alt="logo" />
            </NavLink>
            {
              location === '/' ? (
                <ul className="navbar-nav mx-auto mb-4 mb-lg-0 gap-5">
                  <li className="nav-item">
                    <NavLink to={'/'} className="nav-link" aria-current="page" >Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Menu</a>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/activities'}>Activities</NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Cities</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Social Media</a>
                  </li>
                </ul>
              ) : <HeaderSearch />

            }
            <div className="nav-right-part">
              <div className='header_icon'>
                <img src={`${url}/images/home/header_info_icon.png`} className='w-100' alt="header icon" />
              </div>
              <div className='header_icon'>
                <img src={`${url}/images/home/header_lang_icon.png`} className='w-100' alt="header icon" />
              </div>
              <a href='#' className="btn-header">Login</a>
            </div>
          </div>
        </div>
      </nav>


      <nav className="navbar navbar-expand-lg mob-nav">
        <div className="container" >
          <a aria-current="page" className="navbar-brand active" href="/">
            <img src="/images/common/logo.png" alt="logo" /></a>
          <div className="nav-right-part" ><div className="header_icon" >
            <img src="/images/home/header_info_icon.png" className="w-100" alt="header icon" /></div>
            <div className="header_icon" ><img src="/images/home/header_lang_icon.png" className="w-100" alt="header icon" /></div>
            <a href="#" className="btn-header">Login</a></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>
          <div className="navbar-collapse align-items-start pt-4 collapse" id="navbarTogglerDemo01" >
            <ul className="navbar-nav mx-auto mb-4 mb-lg-0 gap-5">
              <li className="nav-item"><NavLink aria-current="page" className="nav-link mobile_nav_link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link mobile_nav_link" to="">Menu</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link mobile_nav_link" to="/activities" >Activities</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link mobile_nav_link" to="">Cities</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link mobile_nav_link" to="">Social Media</NavLink></li></ul></div>
        </div>
      </nav>




    </>
  )
}

export default Header