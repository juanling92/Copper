import React, {useContext} from 'react'
import { CartContext } from '../../Context/cartContext/useContext'
import './Cart.css'


const Cart = () => {
    const {items, removeItem, clearItems} = useContext(CartContext);
    let itemsInCart =0;

//    const sum = items.reduce((sum, i) => (
//        sum += i.count * i.price
//      ), 0)
    items.map((item) => {
        itemsInCart = itemsInCart + item.qty;
        return itemsInCart
    })

//    let precio = parseInt(items.price);
//    let cant = parseInt(items.qty)
//    let montoItem = console.log(precio*cant);
    return (
        <div>
            <div className='bodyContainer' >
            <div className='cartContainer'>
            <div className='cartHeader'>
            <h3 className='heading'>Carrito de compras</h3>
            <h5 className='action' onClick={()=>clearItems()}>Vaciar carrito</h5>    
            </div>
            { items.map((item) => (
            <div className='cartItems' key={item.id}>
            <div className='imageBox'>
            <img src={item.img} style={{height:'120px'}} alt='Imagen del producto'></img>
            </div>
            <div className='about' key={item.id}>
            <h1 className='title'>{item.name}</h1>
            <h3 className='subtitle'>{item.price}</h3>
            {//<img src={item.img} style={{ height:'30px' }} alt='cuadradinho'/>
            }
            </div>
            <div className='counter'>
            <div className='btn'>+</div>
            <div className='count'>{item.qty}</div>
            <div className='btn'>-</div>
            </div>
            <div className='prices'>
            <div className='amount'>{item.price}</div>
            {//<div class='save'><u>Save for later</u></div>
            }
            <div className='remove' onClick={()=>removeItem(item.id)}><u>Remove</u></div>
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
            <div className='total-amount'>xXx</div>
            </div>
            <button className='CartButton'>Checkout</button>
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