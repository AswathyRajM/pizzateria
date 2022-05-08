import React, { useEffect, useState } from "react";
import {
  Bars,
  Nav,
  NavLogo,
  NavLink,
  NavLinks,
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
          <NavLink scrollY={scrollY} to='/'>
            <div>
              <p>All</p>
            </div>
          </NavLink>
          <NavLink scrollY={scrollY} to='/'>
            <div>
              <p>Meals & Combos</p>
            </div>
          </NavLink>
          <NavLink scrollY={scrollY} to='/'>
            <div>
              <p>Non-Veg Pizaa</p>
            </div>
          </NavLink>
          <NavLink scrollY={scrollY} to='/'>
            <div>
              <p>Veg Pizza</p>
            </div>
          </NavLink>
          <NavLink scrollY={scrollY} to='/'>
            <div>
              <p>Beverages & Desserts</p>
            </div>
          </NavLink>
          <DropdownWrapper>
            <div onMouseOver={handleMenu} onMouseLeave={handleMenuLeave}>
              <NavLink scrollY={scrollY} to='/'>
                <p>
                  <span>
                    <UserProfile />
                  </span>
                </p>
              </NavLink>
            </div>
            <DropdownMenu>
              {openMenu && (
                <DropDown
                  handleDropdown={handleDropdown}
                  handleDropdownLeave={handleDropdownLeave}
                />
              )}
            </DropdownMenu>
          </DropdownWrapper>

          <NavLink scrollY={scrollY} to='/'>
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
