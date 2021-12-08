import React, {useState}from 'react'
import {Icon, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {
    const  [counter, setCounter] = useState(initial ? initial : 0);
    const [shoppingCart, setShoppingCart] = useState(false);

const handleCounterUp = () => {
    if(counter<stock) {
    setCounter(counter + 1);
    } else 
    {alert("No hay stock.")}
};
const handleCounterDown = () => {
    if(counter>1) {
    setCounter(counter - 1);
    } else 
    {alert("No puede seleccionarse menos de un producto.")}
};
const addItem = () => {
    if (counter !== 0) {
        let item = counter > 1 ? 'items':'item';
        console.log(`Has agredado ${counter} ${item} al carrito.`);
        setShoppingCart(true);
}
};
return (
    <>
        <div style={{ display: !shoppingCart ? "boton" : "none" }} >
        <p>{counter}</p>
        <Icon onClick={handleCounterUp} name='plus'/>
        <Icon onClick={handleCounterDown} name='minus'/>
        <Button onClick={addItem}>Añadir al carrito</Button>
        </div>
        <div class="ui two buttons" style={{display: shoppingCart ? "flex" : "none"}}>
        <Link to='/'>
        <div class="ui basic green button">Seguir comprando</div>
        </Link>
        <Link to='/cart'>
        <div class="ui basic red button">Terminar compra</div>
        </Link>
        </div>
    </>
    )
}

export default ItemCount;
