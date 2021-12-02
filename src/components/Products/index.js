import React from 'react'
import { Product } from './Product'


export const Products = ({heading, data}) => {
    return (<>
    <h1>{heading}</h1>
            
                {data.map((product,index) => {
                    return (
                        <Product product={product}/>
                    )
                })}
       </>
    )
}
