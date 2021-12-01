import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const ItemlistContainer = ({greeting}) => {
const [products, setProducts] = useState([]);
console.log(products)
  useEffect(() => {
      const timer = setTimeout (()=> {
      fetch('./data.json')
      .then(response => response.json())
      .then((json) => setProducts(json));
      },2000)
      return () => clearTimeout(timer);
  },[]);
return (
    <>
    <div className ='greet'>{greeting}</div>
    <ItemList products={products}/>
    </>
)
}
export default ItemlistContainer;