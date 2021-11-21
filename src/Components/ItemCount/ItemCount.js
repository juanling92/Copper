import React, {useState}from 'react'
import { Card, Icon, Button, Image} from 'semantic-ui-react'

const ItemCount = ({data}) => {
    const  [counter, setCounter] = useState(1);
const handleCounterUp = () => {
    if(counter<5) {
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
  <Card>
    <Image src={data.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.login}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.id}</span>
      </Card.Meta>
      <Card.Description>
        {data.url}
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
)
}

export default ItemCount;