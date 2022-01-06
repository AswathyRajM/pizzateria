import styled from "styled-components";

export const ProductsContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  padding: 5rem;
  background: #000;
  color: #fff;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #f4f4f4;
`;

export const Productwrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  margin: 0 2rem;
`;

export const ProductCard = styled.div`
  display: flex;
  line-height: 1.5;
  height: 200px;
  color: #f4f4f4;
  background-color: #000;
  box-shadow: 0px 0px 12px 1px rgba(90, 90, 90, 0.75);
  -webkit-box-shadow: 0px 0px 12px 1px rgba(90, 90, 90, 0.75);
  -moz-box-shadow: 0px 0px 12px 1px rgba(90, 90, 90, 0.75);
  position: relative;
  width: 100%;
`;

export const ProductImg = styled.img`
  max-width: 50%;
  margin: 1rem;
  cursor: pointer;
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
  background: #000;
  color: #fff;
  transition: 0.2 ease-out;
  font-size: 1.1rem;
  text-transform: capitalize;
  font-weight: 400;
  box-shadow: 0px 0px 12px 1px rgba(90, 90, 90, 0.75);
  -webkit-box-shadow: 0px 0px 12px 1px rgba(90, 90, 90, 0.75);
  -moz-box-shadow: 0px 0px 12px 1px rgba(90, 90, 90, 0.75);
  border-radius: 2px;

  &:hover {
    background: #e31837;
    transition: 0.2 ease-out;
    cursor: pointer;
  }
`;

export const ProductFooter = styled.button`
  padding: 0.3rem 1rem;
  border: none;
  background: transparent;
  color: #fff;
  position: absolute;
  bottom: 1rem;
  right: 0rem;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.1rem;
  justify-content: space-between;
`;

export const ViewAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(30, 30, 30, 0.9);
  }
`;

export const ViewAllTitle = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  color: #e31837;
`;
