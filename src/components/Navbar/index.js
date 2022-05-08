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
  const [scrolly, setScrolly] = useState(0);
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
    hamburgerOpened ? setScrolly(0) : setScrolly(window.pageYOffset);
  }

  const handleHamburger = () => {
    hamburgerOpened ? setScrolly(0) : setScrolly(10);
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
      <NavLink scrolly={scrolly} to='/'>
        <div>
          <p>All</p>
        </div>
      </NavLink>
      <NavLink scrolly={scrolly} to='/'>
        <div>
          <p>Meals & Combos</p>
        </div>
      </NavLink>
      <NavLink scrolly={scrolly} to='/'>
        <div>
          <p>Non-Veg Pizaa</p>
        </div>
      </NavLink>
      <NavLink scrolly={scrolly} to='/'>
        <div>
          <p>Veg Pizza</p>
        </div>
      </NavLink>
      <NavLink scrolly={scrolly} to='/'>
        <div>
          <p>Beverages & Desserts</p>
        </div>
      </NavLink>
    </>
  );

  return (
    <>
      <Nav scrolly={scrolly}>
        <NavLogo to='/'>Pizzateria</NavLogo>
        <NavList>
          <DropdownWrapper>
            <div onMouseOver={handleMenu} onMouseLeave={handleMenuLeave}>
              <NavLink scrolly={scrolly} to='/'>
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

          <NavLink scrolly={scrolly} to='/'>
            <BarsWrapper onClick={handleCart}>
              <Notification scrolly={scrolly}>
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
              <NavLink scrolly={scrolly} to='/'>
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

          <NavLink scrolly={scrolly} to='/'>
            <BarsWrapper onClick={handleCart}>
              <Notification scrolly={scrolly}>
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
