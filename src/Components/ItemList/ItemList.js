import React, { useEffect, useState } from 'react'
import './data.json'
import './ItemList.css'

import Item from '../Item/Item'

const ItemList = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(() => {
        const timer = setTimeout (()=> {
        //        fetch(process.env.REACT_APP_API_URL + './data.json')
        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((json) => setProducts(json));
        },2000)
        return () => clearTimeout(timer);
    },[]);

    return (
        <div>
            <h1>Productos</h1>
            <div className='Item'>
            {products.map((product)=> {
                return <Item data={product} key={product.id}/>;
            })}
            </div>
        </div>
    );
};

export default ItemList;
