import React from 'react'
import { Card, Image } from 'semantic-ui-react'
//import { CartItemsProvider } from '../../Context/cartContext/cartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    
console.log('Detail: ', item);
    return (
        <>
        <Card>
        <Image src={item.imagen} wrapped ui={false} className='img' height="#" width="#"/>
        <Card.Content>
        <Card.Header>{item.producto}</Card.Header>
        <Card.Meta>
            <span className='date'>{item.precio}</span>
        </Card.Meta>
        <Card.Description>
            {item.descripcion}
        </Card.Description>
        </Card.Content>
        <Card.Content extra >
            <ItemCount className='boton' stock={10} initial={1}/>
        </Card.Content>
        </Card>
        </>
    )
}
export default ItemDetail
/*
<Link to='/cart'>
<Button>Añadir al carrito</Button>
</Link>
*/