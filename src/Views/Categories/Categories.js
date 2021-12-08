import React from 'react'
import { useParams } from 'react-router'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';

const Categories = () => {
    const {categoryId} = useParams();
    return (
        <div>
            <h1>{categoryId}</h1>
            <ItemListContainer />
        </div>
    )
}

export default Categories
