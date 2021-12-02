import React from 'react'
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
    ProductBtn
} from './ProductElements'

export const Product = ({ product }) => {
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
        
    )
}
