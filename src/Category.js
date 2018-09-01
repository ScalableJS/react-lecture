import React from 'react';
import Product from './Product';



function Category() {


    // let products = PRODUCTS.map(product => {
    //     return <Product product={product} index="1" />
    // });

    let products = PRODUCTS.map((product, index) =>
        <Product key={index} product={product} index={index} />
    );


    return products;
}

export default Category;