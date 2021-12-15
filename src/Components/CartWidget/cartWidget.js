import React, {useContext} from 'react'
import { Icon } from 'semantic-ui-react'
import { CartContext } from '../../Context/cartContext/useContext'
import { NavLink } from 'react-router-dom'
//CartWidget
const CartIcon = () => {
    const {items} = useContext(CartContext)
    let itemsInCart =0;

    items.map((item) => {
        itemsInCart = itemsInCart + item.qty;
        return itemsInCart
    })

    return (
    <>
    <NavLink to='/Cart'>
    <div className='itemsInCart'>
        {itemsInCart} <br/>
    <Icon name='shopping cart' size='small' />
    </div>
    </NavLink>
    </>
)
}
export default CartIcon;