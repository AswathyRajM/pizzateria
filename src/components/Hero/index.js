import React, { useState } from "react";
import { Cart } from "../Cart";
import { Navbar } from "../Navbar";
import { DropDown } from "../DropDown";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

export const Hero = () => {
  const [openMenu, setMenuOpen] = useState(false);
  const [openCart, setCartOpen] = useState(false);

  const handleMenu = () => {
    if (openCart) setCartOpen(false);
    setMenuOpen(true);
  };

  const handleMenuLeave = () => {
    if (openCart) setCartOpen(false);
    setMenuOpen(false);
  };

  const handleCart = () => {
    if (openMenu) setMenuOpen(false);
    setCartOpen(!openCart);
  };

  const handleDropdown = () => {
    if (openCart) setCartOpen(false);
    setMenuOpen(true);
  };

  const handleDropdownLeave = () => {
    if (openCart) setCartOpen(false);
    setMenuOpen(false);
  };

  return (
    <HeroContainer>
      <Navbar
        handleMenuLeave={handleMenuLeave}
        handleMenu={handleMenu}
        handleCart={handleCart}
      />
      {openMenu ? (
        <DropDown
          handleDropdown={handleDropdown}
          handleDropdownLeave={handleDropdownLeave}
        />
      ) : (
        ""
      )}

      <Cart openCart={openCart} handleCart={handleCart} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Yummy Pizza</HeroH1>
          <HeroP>All You Need is Love & Pizza</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};
