import React, { useState } from 'react'
import { useCartContext } from '../../Context/cartContext/useContext';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = (data) => {
    
    const [shoppingCart, setShoppingCart] = useState(false);
    const {addItem} = useCartContext();
    let item = data.data;
    const formatPeso = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP"
      });
    const onAdd = (qty) => {
      addItem(item, qty);
      setShoppingCart(true);
      console.log(`You added: ${qty} ${item.product} to your cart`);
    };
    return (
        <>
        <Card>
        <Image src={item.img} wrapped ui={false} className='img' alt='Imagen del prod'/>
        <Card.Content>
        <Card.Header>{item.product}</Card.Header>
        <Card.Meta>
            <span className='date'>{formatPeso.format(item.price)}</span>
        </Card.Meta>
        <Card.Description>
            {item.description}
        </Card.Description>
        </Card.Content>
        <Card.Content extra >
        {!shoppingCart && (<ItemCount className='boton' stock={item.stock} initial={1} data={item} onAdd={onAdd}/>)}
        {shoppingCart &&(<Link to='/cart'>
        <div className="ui basic gray button">Terminar compra</div>
        </Link>)}
        </Card.Content>
        </Card>
        </>
    )
}

export default ItemDetail;

//const [add, setAdd] =useState(false)
//const changeButton = () => {
//    setAdd(!add)
//    console.log('Producto añadido')
//}
//{
//    add ? 
//    <div className="ui two buttons">
//    <Link to='/'>
//    <div className="ui basic green button">Seguir comprando</div>
//    </Link>
//    <Link to='/cart'>
//    <div className="ui basic red button">Terminar compra</div>
//    </Link>
//    </div> 
//    : 
//    <ItemCount className='boton' stock={10} initial={1} item={data} onClick={changeButton} addItem={addItem}/>
//}