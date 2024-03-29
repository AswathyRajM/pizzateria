import styled from 'styled-components';
import * as color from '../../utils/variables';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url('https://ik.imagekit.io/aswathy/images/pizza1_DKJ0ln2eg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651588579174');
  height: 100vh;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  @media only screen and (max-width: 728px) {
    height: fit-content;
  }
`;

export const HeroContent = styled.div`
  height: calc(100vh-80px);
  max-height: 100%;
  padding: 0 calc((100vw - 1200px) / 2);
  letter-spacing: 1px;
  overflow-x: hidden;

  @media only screen and (max-width: 728px) {
    height: 50vh;
    max-height: 50vh;
  }
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: ${color.fontWhite};
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 728px) {
    width: 100vw;
    margin-top: 2rem;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottm: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(1.8rem, 2.5vw, 2.2rem);
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: ${color.mainColor};
  color: ${color.fontWhite};
  transition: 0.2s ease-out;

  &:hover {
    background: ${color.mainColor};
    transition: 0.2 ease-out;
    cursor: pointer;
    color: ${color.mainBlack};
  }

  @media only screen and (max-width: 728px) {
    padding: 0.8rem 2rem;
  }
`;
