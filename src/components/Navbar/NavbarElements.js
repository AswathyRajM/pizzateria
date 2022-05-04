import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  padding: 3rem;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;

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
  font-size: 1.2rem;

  @media screen and (max-width: 400px) {
    width: auto;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  display: block;
  padding: 0 2.5rem;
  margin-top: 2rem;

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
    background: #fff;
  }
  p:hover {
    color: #e31837;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
`;
