import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

//Firebase
import {db} from '../../firebase/firebaseConfig';
import {collection, getDocs} from 'firebase/firestore';

const ItemlistContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    console.log('PRODUCTOS', products)
    useEffect ( () => {
        const getProducts = async () => {
        const q = collection(db, 'copper');
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(), id: doc.id});
        });
        setProducts(docs);
        };
        getProducts();
        },[])

return (
    <>
    <div className ='greet'>{greeting}</div>
    <ItemList products={products}/>
    </>
        )
}
export default ItemlistContainer;