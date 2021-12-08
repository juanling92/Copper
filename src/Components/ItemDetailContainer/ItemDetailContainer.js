import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import './ItemDetailContainer.css'

import ItemDetail from '../ItemDetail/ItemDetail';

const items = [
    { id: 1,  precio: "$ 5.000", categoryId: "ropa", producto: "Buzo Mario Bros", imagen: "https://i.blogs.es/fb0113/levis_mario_200228-001-1-/450_1000.jpg", descripcion: "Levi's hace alianza con Nintendo para lanzar ropa de Mario Bros."}, 
    { id: 2,  precio: "$ 10.000",categoryId: "ropa", producto:"Zapatillas", imagen: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw3d2ff431/40CMA0011_092_01.jpg?imwidth=915&impolicy=product", descripcion: "Zapatillas De Hombre Bayliss"},
    { id: 3,  precio: "$ 8.000", categoryId: "accesorios", producto: "Cartera", imagen: "https://catalog.21buttons.com/97e9f96021ad5b59cb7103f772f7245e2bde6c63.smedium.jpg", descripcion: "Bolso Shopper Rígido Asa Madera"}, 
    { id: 4,  precio: "$ 12.000",categoryId: "ropa", producto:"Vestido", imagen: "https://lamartina.vtexassets.com/arquivos/ids/195393-1600-auto?v=637668892122470000&width=1600&height=auto&aspect=true", descripcion:"Vestido Callie Est rojo-rosa"}
];


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [itemDetail, setItemDetail] = useState({});
    let getItem = new Promise((resolve, reject) => {
            items ? resolve(items) : reject('Error 404')
            console.log('Soy un item', resolve);});
    useEffect(() => {
        id ? getItem.then(res => {setItemDetail(res.find(a => a.id === parseInt(id)))})
            .catch(err => console.log(err))
        : getItem.then(res => {setItemDetail(res)})
            .catch(err => console.log(err))
    })
    return (
        <>
        <div className='ItemDetailContainer'>
            <ItemDetail item={itemDetail} key={itemDetail.id}/>
        </div>

        </>
    )
}

export default ItemDetailContainer
