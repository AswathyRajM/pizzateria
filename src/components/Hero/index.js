import React, { useState } from "react";
import { Cart } from "../Cart";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
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
    setMenuOpen(!openMenu);
  };

  const handleCart = () => {
    if (openMenu) setMenuOpen(false);
    setCartOpen(!openCart);
  };

  return (
    <HeroContainer>
      <Navbar handleMenu={handleMenu} handleCart={handleCart} />
      <Sidebar openMenu={openMenu} handleMenu={handleMenu} />
      <Cart openCart={openCart} handleCart={handleCart} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Home Made Sweets</HeroH1>
          <HeroP>Delicious Bakery food</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};
