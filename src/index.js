import React from 'react'
import { render } from 'react-dom'
import { products } from './products'

function Hello(props) {
    const { product } =  props;
    
    return (<div>Hello {product.category}</div>);
}

console.log(products)

render(<Hello product={products[0]} />, document.getElementById('root'))
