import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a className="logo-text" href="/">
              Irfan
            </a>
          </div>
          <button className="toggler-menu" onClick={() => setToggle(!toggle)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <header
        className={`header-left ${toggle ? "menu-open menu-open-desk" : ""}`}
        id="navbar-collapse-toggle"
      >
        <div className="navbar-brand">
          <a className="logo-text" href="/">
            Irfan
          </a>
        </div>
        <ul className="nav nav-ul">
          <li>
            <a className="nav-link" href="/#home">
              <i className="fas fa-house-damage" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/#about">
              <i className="far fa-address-card" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/#skills">
              <i className="fas fa-concierge-bell" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/#projects">
              <i className="fas fa-briefcase" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/#testimonials">
              <i className="fas fa-layer-group" />
              <span>Collab</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/#contactus">
              <i className="fas fa-id-card-alt" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
