import React from 'react';
import Button from './Button';


function Product(props) {
    const {product} = props;
    
    
    return (
        <div className="product">
            <h2 className="title">{product.category} : {product.name}</h2>
            <div>Product info</div>
            <div>Price: {product.price}</div>
            <Button stocked={product.stocked} />
        </div>
    )
}

export default Product;