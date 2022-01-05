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
          return (
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
          );
        })}
        <ProductCard key={"view-all"}>
          <ViewAllContainer>
            <ViewAllTitle>View All</ViewAllTitle>
          </ViewAllContainer>
        </ProductCard>
      </Productwrapper>
    </ProductsContainer>
  );
};
