import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

export const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Bakery</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    )
}
