import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import * as color from "../../utils/variables";

export const Nav = styled.nav`
  max-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  padding: 2rem 3rem;
  position: fixed;
  z-index: 999;
  background: ${({ scrolly }) =>
    scrolly > 1
      ? `${color.mainColor}`
      : "linear-gradient(to bottom, #000, #0003 70%, #0000)"};
  transition: background 1s top;
`;

export const NavLogo = styled(Link)`
  color: ${color.fontWhite};
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  letter-spacing: 1px;
  z-index: 100;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 500;
  height: 100%;
  z-index: 999;

  @media only screen and (max-width: 728px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${color.fontWhite};
  text-decoration: none;
  cursor: pointer;
  display: block;
  padding: 0 1.5rem;
  margin-top: 1rem;
  letter-spacing: 1px;

  p {
    text-transform: capitalize;
  }

  p:after {
    content: "";
    display: block;
    margin: auto;
    height: 2px;
    width: 0px;
    background: transparent;
    transition: width 0.2s ease, background-color 0.3s ease;
  }

  p:hover:after {
    width: 100%;
    background: ${color.fontWhite};
    background: ${({ scrolly }) =>
      scrolly > 1 ? `${color.fontWhite}` : `${color.mainColor}`};
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  z-index: 999;
`;

export const UserProfile = styled(FaUserCircle)`
  font-size: 2rem;
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 0.75rem;
  left: -2.7rem;
`;

export const BarsWrapper = styled.div`
  position: relative;
`;

export const Notification = styled.div`
  position: absolute;
  top: 0;
  right: -10px;
  background: ${color.yellow};
  color: ${color.mainBlack};
  font-size: 14px;
  font-weight: normal;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HamburgerMenu = styled.div`
  font-size: 2rem;
  color: ${color.fontWhite};
  font-weight: 500;
  height: 100%;
  margin: 0 1.5rem;
  margin-right: 0;
  display: none;
  z-index: 10;
  margin-top: 1rem;
  @media only screen and (max-width: 728px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
  }
`;

export const NavListContainer = styled.div`
  display: ${({ hamburgerOpened }) => (hamburgerOpened ? "flex" : "none")};
  position: absolute;
  width: 100%;
  left: 0;
  top: -1rem;
  z-index: -1;
  margin-top: 1rem;
  padding-top: 1rem;
  background: ${color.mainColor};
  color: ${color.fontWhite};
  overflow-y: hidden;
  height: fit-content;
  transition-property: height;
  transition-duration: 10s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  padding: 2rem;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  transition: height 3s top;
`;

export const NavList = styled.div`
  display: none;
  align-items: cneter;
  justify-content: space-around;
  @media only screen and (max-width: 728px) {
    display: flex;
  }
`;
