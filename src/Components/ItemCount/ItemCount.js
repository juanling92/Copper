import React, {useState}from 'react'
import {Icon} from 'semantic-ui-react'

const ItemCount = ({stock, initial}) => {
    const  [counter, setCounter] = useState(initial);
const handleCounterUp = () => {
    if(counter<stock) {
    setCounter(counter + 1);
    } else 
    {alert("No hay stock")}
};
const handleCounterDown = () => {
    if(counter>1) {
    setCounter(counter - 1);
    } 
}
;
return (
<>
    <p>{counter}</p>
    <Icon onClick={handleCounterUp} name='plus'/>
    <Icon onClick={handleCounterDown} name='minus'/>
</>
)
}

export default ItemCount;