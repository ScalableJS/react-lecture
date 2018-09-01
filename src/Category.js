import React from 'react';
import Product from './Product';

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

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