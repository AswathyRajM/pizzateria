import styled from 'styled-components';
import * as color from '../../utils/variables';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url('https://ik.imagekit.io/aswathy/images/featured_Q2wsv02eL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651588578882');
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${color.fontWhite};
  text-align: center;
  over-flow: hidden;
  h1 {
    font-size: clamp(3rem, 2vw, 5rem);
  }

  p {
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const FeatureBtn = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: ${color.yellow};
  color: ${color.mainBlack};
  transition: 0.2s ease-out;
  margin-top: 1.5rem;
  over-flow: hidden;
  &:hover {
    color: ${color.fontWhite};
    background: ${color.mainColor};
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
