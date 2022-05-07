import React from "react";
import {
  DropDownContainer,
  DropDownMenu,
  DropDownLInk,
  DropDownTransparentContainer,
  DropDownMain,
} from "./DropDownElements";

export const DropDown = ({ handleDropdown, handleDropdownLeave }) => {
  return (
    <>
      <DropDownMain
        onMouseEnter={handleDropdown}
        onMouseLeave={handleDropdownLeave}
      >
        <DropDownTransparentContainer />
        <DropDownContainer>
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
      </DropDownMain>
    </>
  );
};
