import React, { useEffect, useState } from "react";
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
  const [scrollY, setScrollY] = useState(0);

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

  function handleScroll() {
    // Change Header background color.
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Nav scrollY={scrollY}>
        <NavLogo to='/'>Pizzateria</NavLogo>
        <NavLinks>
          <NavLink to='/'>
            <div>
              <p>Meals & Combos</p>
            </div>
          </NavLink>
          <NavLink to='/'>
            <div>
              <p>Non-Veg Pizaa</p>
            </div>
          </NavLink>
          <NavLink to='/'>
            <div>
              <p>Veg Pizza</p>
            </div>
          </NavLink>
          <NavLink to='/'>
            <div>
              <p>Beverages & Desserts</p>
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
              <Notification scrollY={scrollY}>
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
