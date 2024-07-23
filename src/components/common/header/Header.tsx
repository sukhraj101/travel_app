const url = import.meta.env.VITE_PUBLIC_URL;
import { NavLink, useLocation } from 'react-router-dom';
import './header.css'
import HeaderSearch from './HeaderSearch';

const Header = () => {

  const location = useLocation().pathname;
  const isHome = location === '/' ? 'pt-4' : 'py-4';
  

  return (
    <>
      <nav className="navbar navbar-expand-lg">
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
          <div className={`collapse navbar-collapse ${isHome}`} id="navbarTogglerDemo01">
            <NavLink className="navbar-brand" to="/">
              <img src={`${url}/images/common/logo.png`} alt="logo" />
            </NavLink>
            {
              location === '/' ? (
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
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
              ) : <HeaderSearch/>

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
    </>
  )
}

export default Header