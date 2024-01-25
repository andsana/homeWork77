import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">
          <NavLink to="/" className="nav-link">Guestbook</NavLink>
        </span>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/new-message" className="nav-link">New message</NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;