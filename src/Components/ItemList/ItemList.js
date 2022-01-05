import React, {useState} from 'react'
import './ItemList.css'

import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner';

const ItemList = ({products}) => {
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 1000);
    return (
        <>
		{isLoading ? (
			<div className='spinner'>
				<Spinner/>
			</div>
		) : (
        <div className='Item'>
        {products.map((product)=> {
            return <Item data={product} key={product.id}/>;
        })}
        </div>
        )}
        </>
    );
};

export default ItemList;
