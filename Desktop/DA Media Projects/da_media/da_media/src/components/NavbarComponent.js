import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "../logos/blacknobackground.png";
import "../css/navbar/index.css";

const NavbarComponent = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="navbarSection" color="faded" light expand="lg">
        <NavbarBrand href="/" className="mr-auto">
          <img className="navbarLogo" src={logo} alt="DA Media Logo" />
        </NavbarBrand>
        <h4 className="brandStatement">MODERN MULTIMEDIA PRODUCTION</h4>
        
        <Collapse isOpen={collapsed} navbar>
          <Nav className="mr-auto navbarLinks" navbar>
            <NavItem>
              <NavLink href="/">Website Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Audiobook Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Audio Editing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
