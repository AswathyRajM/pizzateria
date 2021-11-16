import React from "react";
import { Bars, Nav, NavLogo, NavLink, NavLinks } from "./NavbarElements";

export const Navbar = ({ handleMenu, handleCart }) => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Bakery</NavLogo>
        <NavLinks>
          <NavLink to="/">
            <div>
              <p>Orders</p>
            </div>
          </NavLink>

          <NavLink to="/">
            <div onClick={handleMenu}>
              <p>Menu</p>
            </div>
          </NavLink>

          <NavLink to="/">
            <div onClick={handleCart}>
              <p>
                <Bars />
              </p>
            </div>
          </NavLink>
        </NavLinks>
      </Nav>
    </>
  );
};
