import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import * as color from '../../utils/variables';

export const FooterWrap = styled.div`
  background: ${color.mainBlack};
  width: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${color.fontWhite};
  height: auto;
  height: max-content;
  width: 1600px;

  @media only screen and (max-width: 768px) {
    height: max-content;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: max-content;
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

  @media only screen and (max-width: 728px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 1.5rem;
    height: max-content;
    padding: 1.5rem;

    > * {
      &:nth-child(2) {
        grid-column: 2 / span 3;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr 1fr !important;
    grid-row-gap: 1.5rem;
    grid-column-gap: 1.5rem;
    height: max-content;

    > * {
      &:nth-child(1),
      :nth-child(2) {
        grid-column: 1 / span 3;
      }
      &:nth-child(2) {
        max-width: 100%;
      }
    }
  }
`;

export const FooterSection = styled.div`
  max-width: 20vw;
  padding-right: 2rem;
  padding-top: 1rem;
  height: 100%;
  @media only screen and (max-width: 728px) {
    padding-right: 0;
    padding-top: 0;
    height: auto;
  }
`;

export const FooterLogo = styled(Link)`
  color: ${color.fontWhite};
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 1rem;
`;

export const SectionHeader = styled.h4`
  padding-bottom: 1rem;
`;

export const SectionPara = styled.p`
  line-height: 1.7rem;
  color: ${color.grey};
`;

export const FooterNavlist = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ListItem = styled(Link)`
  text-decoration: none;
  color: ${color.grey};
  cursor: pointer;
  padding-bottom: 0.5rem;
  width: fit-content;

  :after {
    content: '';
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
  background: ${color.mainColor};
  width: 100vw;
  text-align: center;
  padding: 1rem;
`;
