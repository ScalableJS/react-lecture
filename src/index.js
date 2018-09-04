import React from 'react'
import { render } from 'react-dom'
import { products } from './products'
import Category from './Category';

function Hello() {
    return <Category products={products}/>
    
}

render(<Hello />, document.getElementById('root'));

