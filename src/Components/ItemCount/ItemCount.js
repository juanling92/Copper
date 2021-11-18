import React, {useState}from 'react'
import { Card, Icon, Button, Image} from 'semantic-ui-react'
import './ItemCount.css'

const ItemCount = () => {
    const  [counter, setCounter] = useState(1);
const handleCounterUp = () => {
    if(counter<5) {
    setCounter(counter + 1);
    } else 
    {alert("No hay stock")}
};
const handleCounterDown = () => {
    if(counter>0) {
    setCounter(counter - 1);
    } 
};
return (
<div className='UserCard'>
  <Card>
    <Image src='https://i.blogs.es/fb0113/levis_mario_200228-001-1-/450_1000.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Buzo Mario</Card.Header>
      <Card.Meta>
        <span className='date'>Buzo</span>
      </Card.Meta>
      <Card.Description>
        Levi's hace alianza con Nintendo para lanzar ropa de Mario Bros.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <p>{counter}</p>
    <Icon onClick={handleCounterUp} name='plus'/>
    <Icon onClick={handleCounterDown} name='minus'/>
    </Card.Content>
    <Card.Content extra>
    <Button>Comprar</Button>
    </Card.Content>
  </Card>
</div>
)
}

export default ItemCount;