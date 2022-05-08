import styled from "styled-components";
import * as color from "../../utils/variables";

export const ProductWrap = styled.div`
  background: ${color.bgBlack};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ProductsContainer = styled.div`
  max-width: 1600px;
  min-height: 100%;
  color: ${color.fontWhite};
  position: relative;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: ${color.fontHeading};

  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Productwrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  margin: 0 2rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 1rem;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  line-height: 1.5;
  height: 200px;
  color: ${color.fontHeading};
  background-color: ${color.mainBlack};
  -webkit-box-shadow: 0px 1px 3px 0px rgba(90, 90, 90, 0.75);
  -moz-box-shadow: 0px 1px 3px 0px rgba(90, 90, 90, 0.75);
  box-shadow: 0px 1px 3px 0px rgba(90, 90, 90, 0.75);
  position: relative;
  width: 100%;

  @media only screen and (max-width: 768px) {
    height: 180px;
  }
`;

export const ProductImg = styled.img`
  max-width: 50%;
  margin: 1rem;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    max-width: 45%;
    margin: 0.5rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  text-align: left;
  position: relative;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
`;

export const ProductBtn = styled.button`
  padding: 0.3rem 1rem;
  border: none;
  background: ${color.mainColor};
  color: ${color.fontWhite};
  transition: 0.2 ease-out;
  font-size: 1.1rem;
  text-transform: capitalize;
  font-weight: 400;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: ${color.yellow};
    transition: all 0.2s ease-out;
    color: ${color.mainBlack};
  }
`;

export const ProductFooter = styled.div`
  padding: 0.3rem 1rem;
  border: none;
  background: transparent;
  color: ${color.fontWhite};
  position: absolute;
  bottom: 1rem;
  right: 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.1rem;

  @media only screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const ViewAllButton = styled.span`
  cursor: pointer;
  color: #e31837;
  font-size: 20px;
  position: absolute;
  right: 7rem;
  top: 10rem;
  padding: 5px 10px;
  border: ${color.mainColor} solid 1px;
  transition: all 0.15s ease-in;

  :hover {
    background: ${color.mainColor};
    color: ${color.fontHeading};
  }
`;
