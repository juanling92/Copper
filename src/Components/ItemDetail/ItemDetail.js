import React from 'react'
import { useState, useContext } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'
import { CartContext } from '../../Context/cartContext/useContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const [add, setAdd] =useState(false)

    const {addItem} = useContext(CartContext)

    const changeButton = () => {
        setAdd(!add)
        console.log('Producto añadido')
    }

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
            {
                add ? 
                <div className="ui two buttons">
                <Link to='/'>
                <div className="ui basic green button">Seguir comprando</div>
                </Link>
                <Link to='/cart'>
                <div className="ui basic red button">Terminar compra</div>
                </Link>
                </div> 
                : 
                <ItemCount className='boton' stock={10} initial={1} item ={item} onClick={changeButton} addItem={addItem}/>
            }
        </Card.Content>
        </Card>
        </>
    )
}
export default ItemDetail;
