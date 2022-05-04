import React, { useState } from "react";
import {
  Bars,
  Nav,
  NavLogo,
  NavLink,
  NavLinks,
  // Downarrow,
  // Flex,
  BarsWrapper,
  UserProfile,
  DropdownWrapper,
  DropdownMenu,
  Notification,
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
          <NavLink to='/'>
            <div>
              <p>Pizza</p>
            </div>
          </NavLink>
          <DropdownWrapper>
            <NavLink to='/'>
              <div onMouseOver={handleMenu} onMouseLeave={handleMenuLeave}>
                <p>
                  <span>
                    <UserProfile />
                  </span>
                </p>
              </div>
            </NavLink>
            <DropdownMenu>
              {openMenu && (
                <DropDown
                  handleDropdown={handleDropdown}
                  handleDropdownLeave={handleDropdownLeave}
                />
              )}
            </DropdownMenu>
          </DropdownWrapper>

          <NavLink to='/'>
            <BarsWrapper onClick={handleCart}>
              <Notification>
                <span>4</span>
              </Notification>
              <p>
                <Bars />
              </p>
            </BarsWrapper>
          </NavLink>
        </NavLinks>
      </Nav>
    </>
  );
};
