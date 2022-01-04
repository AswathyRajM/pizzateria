import React from "react";
import {
  Bars,
  Nav,
  NavLogo,
  NavLink,
  NavLinks,
  Downarrow,
  Flex,
} from "./NavbarElements";

export const Navbar = ({ handleMenu, handleCart, handleMenuLeave }) => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Pizzateria</NavLogo>
        <NavLinks>
          <NavLink to="/">
            <div>
              <p>Orders</p>
            </div>
          </NavLink>

          <NavLink to="/">
            <div onMouseOver={handleMenu} onMouseLeave={handleMenuLeave}>
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
