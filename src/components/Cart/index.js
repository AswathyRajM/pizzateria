import React from "react";
import {
  CartContainer,
  Icon,
  CloseIcon,
  CartItems,
  CartItem,
  CartButton,
  CartBtnRoute,
} from "./CartElements";

export const Cart = ({ openCart, handleCart }) => {
  return (
    <CartContainer openCart={openCart} onClick={handleCart}>
      <Icon onClick={handleCart}>
        <CloseIcon />
      </Icon>
      <CartItems>
        <CartItem>item1</CartItem>
        <CartItem>item2</CartItem>
        <CartItem>item3</CartItem>
      </CartItems>
      <CartButton>
        <CartBtnRoute to="/">View All</CartBtnRoute>
      </CartButton>
    </CartContainer>
  );
};
