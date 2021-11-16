import React from "react";
import { Bars, Nav, NavIcon, NavLink, Cart, Menu } from "./NavbarElements";

export const Navbar = ({ handleMenu, handleCart }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Bakery</NavLink>
        <NavIcon>
          <div onClick={handleMenu}>
            <p>Menu</p>
          </div>

          <div onClick={handleCart}>
            <Bars />
          </div>
        </NavIcon>
      </Nav>
    </>
  );
};
