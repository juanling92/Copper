import React from 'react'
import './ItemList.css'

import Item from '../Item/Item'

const ItemList = ({products}) => {
    console.log('Item List', products)
    return (
        <div>
            <div className='Item'>
            {products.map((product)=> {
                return <Item data={product} key={product.id}/>;
            })}
            </div>
        </div>
    );
};

export default ItemList;
