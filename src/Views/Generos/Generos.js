import React, {useEffect, useState} from 'react'
import './Generos.css'
import { useParams } from 'react-router';

import ItemDetail from '../../Components/ItemDetail/ItemDetail';

//Firebase
import {db} from '../../firebase/firebaseConfig';
import {collection, query, getDocs, where} from 'firebase/firestore';

const Generos = () => {
    const [itemDetail, setItemDetail] = useState([]);
    
    let genre = useParams();

    useEffect ( () => {
    const getProducts = async () => {
    const q = query(collection(db, 'copper'), where('genre','==',genre.genre));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id: doc.id});
    });
    setItemDetail(docs);
    };
    getProducts();
    },[genre.genre])

    return (
        <>
        <div className='genres'>
            {itemDetail.map((itemData) => {
                return <ItemDetail data={itemData} key={itemData.id}/>
            })}
        </div>

        </>
    )
}
export default Generos;
