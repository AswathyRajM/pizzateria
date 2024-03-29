import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import { Cart } from '../Cart';
import { Navbar } from '../Navbar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from './HeroElements';

export const Hero = () => {
  const [openCart, setCartOpen] = useState(false);

  const handleCart = () => {
    setCartOpen(!openCart);
  };

  return (
    <FadeIn>
      <HeroContainer>
        <Navbar handleCart={handleCart} />
        <Cart openCart={openCart} handleCart={handleCart} />
        <HeroContent>
          <FadeIn>
            <HeroItems>
              <HeroH1>Yummy Pizza</HeroH1>
              <HeroP>All You Need is Love & Pizza</HeroP>
              <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
          </FadeIn>
        </HeroContent>
      </HeroContainer>
    </FadeIn>
  );
};
