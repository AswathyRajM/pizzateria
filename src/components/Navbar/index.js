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
  HamburgerMenu,
  NavList,
  NavListContainer,
} from "./NavbarElements";
import { DropDown } from "../DropDown";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = ({ handleCart, className }) => {
  const [openMenu, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hamburgerOpened, setHamburgerOpened] = useState(false);

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
    hamburgerOpened ? setScrollY(0) : setScrollY(window.pageYOffset);
  }

  const handleHamburger = () => {
    hamburgerOpened ? setScrollY(0) : setScrollY(10);
    setHamburgerOpened(!hamburgerOpened);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Navlinks = (
    <>
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
    </>
  );

  return (
    <>
      <Nav scrollY={scrollY}>
        <NavLogo to='/'>Pizzateria</NavLogo>
        <NavList>
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
          <HamburgerMenu className={className}>
            <GiHamburgerMenu onClick={handleHamburger} />
            <NavListContainer hamburgerOpened={hamburgerOpened}>
              {Navlinks}
            </NavListContainer>
          </HamburgerMenu>
        </NavList>

        <NavLinks>
          {Navlinks}
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
