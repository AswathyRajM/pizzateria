import React, { useState } from "react";
import {
  Bars,
  Nav,
  NavLogo,
  NavLink,
  NavLinks,
  Downarrow,
  Flex,
} from "./NavbarElements";
import { DropDown } from "../DropDown";

export const Navbar = ({ handleCart }) => {
  const [openMenu, setMenuOpen] = useState(false);

  const handleDropdown = () => {
    setMenuOpen(true);
  };

  const handleDropdownLeave = () => {
    setMenuOpen(false);
  };

  const handleMenu = () => {
    setMenuOpen(true);
  };

  const handleMenuLeave = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Nav>
        <NavLogo to='/'>Pizzateria</NavLogo>
        <NavLinks>
          <div style={{ position: "relative" }}>
            <NavLink to='/'>
              <div onMouseOver={handleMenu} onMouseLeave={handleMenuLeave}>
                <p>Menu</p>
              </div>
            </NavLink>
            <div style={{ position: "absolute", right: 10 }}>
              {openMenu && (
                <DropDown
                  handleDropdown={handleDropdown}
                  handleDropdownLeave={handleDropdownLeave}
                />
              )}
            </div>
          </div>

          <NavLink to='/'>
            <div>
              <p>Orders</p>
            </div>
          </NavLink>

          <NavLink to='/'>
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
