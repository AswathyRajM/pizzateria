import React from "react";
import {
  SidebarConatiner,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./CartElements";

export const Cart = ({ handleCart, openCart }) => {
  return (
    <SidebarConatiner openCart={openCart} onClick={handleCart}>
      <Icon onClick={handleCart}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Cakes</SidebarLink>
        <SidebarLink to="/">Pies</SidebarLink>
        <SidebarLink to="/">Cookies</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">View All</SidebarRoute>
      </SideBtnWrap>
    </SidebarConatiner>
  );
};
