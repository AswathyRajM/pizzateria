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
  background: ${({ scrollY }) =>
    scrollY > 1
      ? `${color.mainColor}`
      : "linear-gradient(to bottom, #000, #0003 70%, #0000)"};
  transition: background 0.5s;
`;

export const NavLogo = styled(Link)`
  color: ${color.fontWhite};
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  letter-spacing: 1px;

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

  @media screen and (max-width: 400px) {
    width: auto;
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
    background: ${({ scrollY }) =>
      scrollY > 1 ? `${color.fontWhite}` : `${color.mainColor}`};
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
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
