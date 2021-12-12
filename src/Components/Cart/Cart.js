import React, {useContext} from 'react'
import { CartContext } from '../../Context/cartContext/useContext'

const Cart = () => {
    const {items, removeItem, clearItems} = useContext(CartContext);
    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.id}>
                        <h1 style={{marginBottom: 0}}>{item.qty} - {item.name}</h1>
                        <h5 style={{marginTop: 0, color: 'red'}} onClick={()=>removeItem(item.id)}>Borrar producto</h5>
                    </div> 
                ))
            }
            <h5 style={{cursor: 'pointer'}} onClick={()=>clearItems()}>Vaciar carrito</h5>
        </div>
    )
}

export default Cart
