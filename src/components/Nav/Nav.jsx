import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const data = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Portfolio',
    path: '/portfolio'
  },
  {
    label: "About",
    path: "/about"
  },
  {
    label: "Contact",
    path: "/contact"
  }]



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark" id="navi">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          @kky
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined" >
            <MenuIcon />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-item ">
            {
              data.map((item, key) => (
                <li key={key} className="nav-item">
                   <NavLink
                  className="nav-link"
                  to={item.path}
                  activeClassName="active" // Apply this class when the link is active
                >
                  {item.label}
                </NavLink>

                </li>))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
