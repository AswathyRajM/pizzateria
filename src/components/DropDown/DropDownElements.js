import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropDownContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 10rem;
  height: auto;
  background: #ffc500;
  display: grid;
  align-items: center;
  justify-content: center;
  top: 4rem;
  transition: 0.3s ease-in-out;
  border-radius: 2px;

  right: 9.5rem;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 2rem);
  text-align: center;
  padding-top: 1rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const DropDownLInk = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  padding-top: 2rem;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }

  p:after {
    content: "";
    display: block;
    margin: auto;
    height: 3px;
    width: 0px;
    background: transparent;
    transition: width 0.2s ease, background-color 0.3s ease;
  }

  p:hover:after {
    width: 100%;
    background: #e31837;
  }

  p:last-child {
    padding-bottom: 1rem;
  }
`;
