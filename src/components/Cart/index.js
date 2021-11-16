import React from "react";
import {
  CartContainer,
  Icon,
  CloseIcon,
  CartItems,
  ItemName,
  CartButton,
  CartBtnRoute,
  CartItem,
  CartHeading,
  Container,
} from "./CartElements";

export const Cart = ({ openCart, handleCart }) => {
  return (
    <CartContainer openCart={openCart} onClick={handleCart}>
      <Container>
        <Icon onClick={handleCart}>
          <CloseIcon />
        </Icon>
        <CartHeading>Items in Your cart</CartHeading>
        <CartItems>
          <CartItem>
            <ItemName>item1item1ite m1item1 item1ite m1item1</ItemName>
            <span>12</span>
          </CartItem>

          <CartItem>
            <ItemName>item2</ItemName>
            <span>12</span>
          </CartItem>
          <CartItem>
            <ItemName>item3</ItemName>
            <span>12</span>
          </CartItem>
          <CartItem>
            <ItemName>item4</ItemName>
            <span>12</span>
          </CartItem>
        </CartItems>
        <CartButton>
          <CartBtnRoute to="/">Buy Now</CartBtnRoute>
        </CartButton>
      </Container>
    </CartContainer>
  );
};
