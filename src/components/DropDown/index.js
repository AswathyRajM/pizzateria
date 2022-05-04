import React from "react";
import {
  DropDownContainer,
  DropDownMenu,
  DropDownLInk,
} from "./DropDownElements";

export const DropDown = ({ handleDropdown, handleDropdownLeave }) => {
  return (
    <DropDownContainer
      onMouseEnter={handleDropdown}
      onMouseLeave={handleDropdownLeave}
    >
      <DropDownMenu>
        <DropDownLInk to='/'>
          <p>Account</p>
        </DropDownLInk>
        <DropDownLInk to='/'>
          <p>Orders</p>
        </DropDownLInk>
        <DropDownLInk to='/'>
          <p>History</p>
        </DropDownLInk>
        <DropDownLInk to='/'>
          <p>Logout</p>
        </DropDownLInk>
      </DropDownMenu>
    </DropDownContainer>
  );
};
