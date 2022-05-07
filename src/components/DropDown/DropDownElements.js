import styled from "styled-components";
import { Link } from "react-router-dom";
import * as color from "../../utils/variables";

export const DropDownMain = styled.div`
  position: absolute;
  z-index: 999;
  width: 11rem;
  height: auto;
  top: 2.4rem;
  left: -2 px;
`;

export const DropDownTransparentContainer = styled.div`
  width: 100%;
  height: 10px;
  background: transparent;
`;

export const DropDownContainer = styled.aside`
  background: ${color.fontWhite};
  color: ${color.mainBlack};
  display: grid;
  align-items: center;
  justify-content: center;

  transition: 0.3s ease-in-out;
  border-radius: 2px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 2rem);
  text-align: center;
  padding-top: 0.3rem;
  position: relative;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const DropDownLInk = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${color.mainBlack};
  cursor: pointer;
  padding-top: 2rem;

  p:after {
    content: "";
    display: block;
    margin: auto;
    height: 3px;
    width: 0px;
    background: transparent;
    transition: width 0.2s ease, background-color 0.3s ease;
    position: absolute;
    left: -0.5rem;
  }

  p:hover:after {
    width: calc(100% + 1rem);
    background: ${color.mainColor};
  }

  p:last-child {
    padding-bottom: 1rem;
  }
`;
