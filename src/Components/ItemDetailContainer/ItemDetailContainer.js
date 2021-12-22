import React, {useEffect, useState} from 'react'
import './ItemDetailContainer.css'
import { useParams } from 'react-router';

import ItemDetail from '../ItemDetail/ItemDetail';

//Firebase
import {db} from '../../firebase/firebaseConfig';
import {collection, query, getDocs, where, documentId} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([]);
    
    let paramsID = useParams();

    useEffect ( () => {
    const getProducts = async () => {
    const q = query(collection(db, 'copper'), where(documentId(),'==',paramsID.id));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id: doc.id});
    });
    setItemDetail(docs);
    };
    getProducts();
    },[paramsID])

    return (
        <>
        <div className='ItemDetailContainer'>
            {itemDetail.map((itemData) => {
                return <ItemDetail data={itemData} key={itemData.id}/>
            })}
        </div>

        </>
    )
}
export default ItemDetailContainer

//import { useParams } from 'react-router';
//const items = [
//    { id: 1,  precio: "$ 5.000", categoryId: "ropa", producto: "Buzo Mario Bros", imagen: "https://i.blogs.es/fb0113/levis_mario_200228-001-1-/450_1000.jpg", descripcion: "Levi's hace alianza con Nintendo para lanzar ropa de Mario Bros."}, 
//    { id: 2,  precio: "$ 10.000",categoryId: "ropa", producto:"Zapatillas Lacoste", imagen: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw3d2ff431/40CMA0011_092_01.jpg?imwidth=915&impolicy=product", descripcion: "Zapatillas De Hombre Bayliss"},
//    { id: 3,  precio: "$ 8.000", categoryId: "accesorios", producto: "Cartera Zara", imagen: "https://catalog.21buttons.com/97e9f96021ad5b59cb7103f772f7245e2bde6c63.smedium.jpg", descripcion: "Bolso Shopper Rígido Asa Madera"}, 
//    { id: 4,  precio: "$ 12.000",categoryId: "ropa", producto:"Vestido La Martina", imagen: "https://lamartina.vtexassets.com/arquivos/ids/195393-1600-auto?v=637668892122470000&width=1600&height=auto&aspect=true", descripcion:"Vestido Callie Est rojo-rosa"}
//];

//const ItemDetailContainer = () => {
//    const {id} = useParams()
//    const [itemDetail, setItemDetail] = useState({});
//    let getItem = new Promise((resolve, reject) => {
//            items ? resolve(items) : reject('Error 404')
//            console.log('Soy un item', resolve);});
//    useEffect(() => {
//        id ? getItem.then(res => {setItemDetail(res.find(a => a.id === parseInt(id)))})
//            .catch(err => console.log(err))
//        : getItem.then(res => {setItemDetail(res)})
//            .catch(err => console.log(err))
//    })
//    return (
//        <>
//        <div className='ItemDetailContainer'>
//            <ItemDetail item={itemDetail} key={itemDetail.id}/>
//        </div>
//
//        </>
//    )
//}

