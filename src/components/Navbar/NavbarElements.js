import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { RiCake3Fill } from "react-icons/ri";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  left: 0;
  transform: translate(50%, 15%);

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-250%, 100%);
    fort-weight: bold;
    &:hover {
      color: #e31837;
      transition: 0.2s ease-out;
    }
  }

  span {
    transform: translate(-150%, 100%);
    &:hover {
      color: #e31837;
      transition: 0.2s ease-out;
    }
  }
`;

export const Bars = styled(RiCake3Fill)`
  font-size: 2rem;
  transform: translate(-100%, -15%);
`;
