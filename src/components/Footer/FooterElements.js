import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: #150f0f;
  height: auto;
  min-height: 40vh;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
  min-height: 40vh;
  width: 100%;
  padding: 3rem;
  > * {
    &:first-child {
      align-self: center;
    }
    &:nth-child(2) {
      max-width: 25rem;
    }
  }
`;

export const FooterSection = styled.div`
  max-width: 20vw;
  padding-right: 2rem;
  padding-top: 1rem;
  height: 100%;
`;

export const FooterLogo = styled(Link)`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const SectionHeader = styled.h4`
  padding-bottom: 1rem;
`;

export const SectionPara = styled.p`
  line-height: 1.7rem;
`;

export const FooterNavlist = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ListItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding-bottom: 0.5rem;
  width: fit-content;

  :after {
    content: "";
    display: block;
    margin: auto;
    height: 3px;
    width: 0px;
    background: transparent;
    transition: width 0.2s ease, background-color 0.3s ease;
  }

  :hover:after {
    width: 100%;
    background: #ffc500;
  }
`;

export const FooterCopyrights = styled.div`
  background: #e31837;
  width: 100%;
  text-align: center;
  padding: 1rem;
`;
