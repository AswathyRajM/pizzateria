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
        <SidebarLink to="/">
          <p>Ice Creams</p>
        </SidebarLink>
        <SidebarLink to="/">
          <p>Burgers</p>
        </SidebarLink>
        <SidebarLink to="/">
          <p>Drinks</p>
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">View All</SidebarRoute>
      </SideBtnWrap>
    </SidebarConatiner>
  );
};
