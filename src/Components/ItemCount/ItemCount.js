import React, {useState}from 'react'
import {Icon, Button} from 'semantic-ui-react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const  [count, setCount] = useState(initial ? initial : 0);

const handleCounterUp = () => {
    if(count<stock) {
        setCount(count + 1);
    } else 
    {alert("No hay stock.")}
};
const handleCounterDown = () => {
    if(count>1) {
        setCount(count - 1);
    } else 
    {alert("No puede seleccionarse menos de un producto.")}
};
const handleOnAdd = () => {
    onAdd(count);
    setCount(initial);
  };
return (
    <>
        <p>{count}</p>
        <Icon onClick={handleCounterUp} name='plus'/>
        <Icon onClick={handleCounterDown} name='minus'/>
        <Button onClick={handleOnAdd}>Añadir al carrito</Button>
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