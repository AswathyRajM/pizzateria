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
  ProductFooter,
  ViewAllButton,
  ProductWrap,
} from "./ProductElements";

export const Products = ({ heading, data }) => {
  return (
    <ProductWrap>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ViewAllButton> View All </ViewAllButton>
        <Productwrapper>
          {data.map((product, index) => {
            return (
              <FadeIn delay={200 * index} key={index}>
                <ProductCard>
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
          })}
        </Productwrapper>
      </ProductsContainer>
    </ProductWrap>
  );
};
