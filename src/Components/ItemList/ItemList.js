import React from 'react'
import './ItemList.css'

import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div className='Item'>
        {products.map((product)=> {
            return <Item data={product} key={product.id}/>;
        })}
        </div>
    );
};

export default ItemList;
