import React, { useState }from 'react'
import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

export const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent> 
                <HeroItems>
                    <HeroH1>Home Made Sweets</HeroH1>
                    <HeroP>Delicious Bakery food</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}
