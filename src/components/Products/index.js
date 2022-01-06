import React from "react";
import FadeIn from "react-fade-in";

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
  ViewAllContainer,
  ViewAllTitle,
  ProductFooter,
} from "./ProductElements";

export const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <Productwrapper>
        {data.map((product, index) => {
          if (index < data.length - 1)
            return (
              <FadeIn delay={200 * index}>
                <ProductCard key={index}>
                  <ProductImg src={product.img} alt={product.name} />
                  <ProductInfo>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDesc>{product.desc}</ProductDesc>
                    <ProductFooter>
                      <ProductPrice>{product.price}</ProductPrice>
                      <ProductBtn>Add </ProductBtn>
                    </ProductFooter>
                  </ProductInfo>
                </ProductCard>
              </FadeIn>
            );
          else
            return (
              <FadeIn>
                <ProductCard key={index}>
                  <ViewAllContainer>
                    <ViewAllTitle>View All</ViewAllTitle>
                  </ViewAllContainer>
                </ProductCard>
              </FadeIn>
            );
        })}
      </Productwrapper>
    </ProductsContainer>
  );
};
