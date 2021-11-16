import React from "react";
import {
  SidebarConatiner,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

export const Sidebar = ({ handleMenu, openMenu }) => {
  return (
    <SidebarConatiner openMenu={openMenu} onClick={handleMenu}>
      <Icon onClick={handleMenu}>
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