import React from 'react';
import Product from './Product';



function Category(props) {
    return props.products.map((product, index) =>
        <Product key={index} product={product} index={index} />
    );

}

export default Category;