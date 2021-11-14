import React from "react";
import {
  ProductsContainer,
  ProductsHeading,
  Productwrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductBtn,
} from "./ProductElements";

export const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <Productwrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.name} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductBtn>Add to Cart</ProductBtn>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </Productwrapper>
    </ProductsContainer>
  );
};
