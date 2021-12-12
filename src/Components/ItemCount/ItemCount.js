import React, {useState}from 'react'
import {Icon, Button} from 'semantic-ui-react'
import './ItemCount.css'

const ItemCount = ({stock, initial, item, addItem}) => {
    const  [qty, setQty] = useState(initial ? initial : 0);

const handleCounterUp = () => {
    if(qty<stock) {
        setQty(qty + 1);
    } else 
    {alert("No hay stock.")}
};
const handleCounterDown = () => {
    if(qty>1) {
        setQty(qty - 1);
    } else 
    {alert("No puede seleccionarse menos de un producto.")}
};

return (
    <>
        <p>{qty}</p>
        <Icon onClick={handleCounterUp} name='plus'/>
        <Icon onClick={handleCounterDown} name='minus'/>
        <Button onClick={() => addItem(item, qty)}>Añadir al carrito</Button>
    </>
    )
}

export default ItemCount;

//    const [shoppingCart, setShoppingCart] = useState(false);
//const addItem = () => {
//    if (counter !== 0) {
//        let item = counter > 1 ? 'items':'item';
//        console.log(`Has agredado ${counter} ${item} al carrito.`);
//        setShoppingCart(true);
//}
//};