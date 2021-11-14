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
        <DropDownLInk to="/">
          <p>Ice Creams</p>
        </DropDownLInk>
        <DropDownLInk to="/">
          <p>Burgers</p>
        </DropDownLInk>
        <DropDownLInk to="/">
          <p>Drinks</p>
        </DropDownLInk>
        <DropDownLInk to="/">
          <p>View All</p>
        </DropDownLInk>
      </DropDownMenu>
    </DropDownContainer>
  );
};
