import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import * as color from "../../utils/variables";

export const CartContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: ${color.fontWhite};
  display: grid;
  align-items: flex-start;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ openCart }) => (openCart ? "0" : "-2000px")};

  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 100vh;
  }
`;

export const Container = styled.div`
  width: 350px;
  height: auto;
  background: ${color.fontWhite};
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: ${color.mainBlack};
`;

export const Icon = styled.div`
  position: absolute;
  top: 2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  width: 100%;
`;

export const CartHeading = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-left: 2rem;
  @media screen and (max-width: 768px) {
    margin-left: 12vw;
  }
`;

export const ItemName = styled.p`
  font-size: 1.1rem;
  color: ${color.mainBlack};
  white-space: nowrap;
  width: 12rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
`;

export const CartButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const CartBtnRoute = styled(Link)`
  background: ${color.mainColor};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${color.fontWhite};
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin: 3rem 0;

  &:hover {
    transition: 0.2s ease-in-out;
    background: ${color.yellow};
    color: ${color.mainBlack};
  }
`;
