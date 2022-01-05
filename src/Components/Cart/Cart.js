import React, {useContext} from 'react'
import { CartContext } from '../../Context/cartContext/useContext'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {items, removeItem, clearItems, totalPrice} = useContext(CartContext);
    let itemsInCart =0;

    items.map((item) => {
        itemsInCart = itemsInCart + item.qty;
        return itemsInCart
    })
    const formatPeso = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP"
      });

    return (
        <div>
            <div className='bodyContainer' >
            <div className='cartContainer'>
            <div className='cartHeader'>
            <h3 className='heading'>Carrito de compras</h3>
            {items.length === 0 && <p>El carrito está vacío</p>}
            <h5 className='action' onClick={()=>clearItems()}>Vaciar carrito</h5>    
            </div>
            { items.map((item) => (
            <div className='cartItems' key={item.id}>
            <div className='imageBox'>
            <img src={item.img} style={{height:'120px'}} alt='Imagen del producto'></img>
            </div>
            <div className='about' key={item.id}>
            <h1 className='title'>{item.name}</h1>
            <h3 className='subtitle'>{formatPeso.format(item.price)}</h3>
            </div>
            <div className='counter'>
            <div className='count'>Cant.: {item.qty}</div>
            </div>
            <div className='prices'>
            <div className='amount'>{formatPeso.format(item.price*item.qty)}</div>
            <div className='remove' onClick={()=>removeItem(item.id)}><u>Quitar</u></div>
            </div>
            </div>
            ))}
            <hr/> 
            <div className='checkout'>
            <div className='total'>
            <div>
            <div className='Subtotal'>Sub-Total</div>
            <div className='items'>{itemsInCart} productos</div>
            </div>
            <div className='total-amount'>{formatPeso.format(totalPrice())}</div>
            </div>
            <Link to='/form'>
            <button className='CartButton'>Comprar</button>
            </Link>
            </div> 
            </div>
            </div>
            </div>
    )
}

export default Cart

//return (
//    <div>
//        {
//            items.map((item) => (
//                <div key={item.id}>
//                    <h1 style={{marginBottom: 0}}>{item.qty} - {item.name}</h1>
//                    <h5 style={{marginTop: 0, color: 'red'}} onClick={()=>removeItem(item.id)}>Borrar producto</h5>
//                </div> 
//            ))
//        }
//        <h5 style={{cursor: 'pointer'}} onClick={()=>clearItems()}>Vaciar carrito</h5>
//    </div>
//)