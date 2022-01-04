import styled from "styled-components";

export const ProductsContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  padding: 5rem;
  background: #150f0f;
  color: #fff;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #f4f4f4;
`;

export const Productwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 2rem;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 200px;
  color: #f4f4f4;
`;

export const ProductImg = styled.img`
  max-width: 100%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductBtn = styled.button`
  font-size: 1rem;
  padding: 1rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: #000;
  }
`;
