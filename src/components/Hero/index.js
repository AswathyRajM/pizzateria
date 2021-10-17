import React from 'react'
import { Navbar } from '../Navbar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

export const  Hero = () => {
    return (
        <HeroContainer>
            <Navbar/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Home Made Delicious Bakery</HeroH1>
                    <HeroP>Delicious Sweets</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}
