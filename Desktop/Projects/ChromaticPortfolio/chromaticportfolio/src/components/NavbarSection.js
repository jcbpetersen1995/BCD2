import React, {useState} from "react";
import "../css/navbar/index.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "../images/JP.logo.tiny.png";

  function NavbarSection() {

    return (
      <Navbar color="faded" dark>
        <NavbarBrand href="/" className="mr-auto">
          <img src={logo} alt="logo" className="logo" />
        </NavbarBrand>
          <Nav navbar>
            <NavItem className="contactMe">
              <NavLink href="tel:+9512276991" className="contactMe rainbowText">CONTACT ME</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    );
}

export default NavbarSection;
