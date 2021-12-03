import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Image, Button } from 'semantic-ui-react'


import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => 
(
<>
<Card>
<Image src={item.imagen} wrapped ui={false} className='img' height="#" width="#"/>
<Card.Content>
<Card.Header>{item.producto}</Card.Header>
<Card.Meta>
    <span className='date'>{item.precio}</span>
</Card.Meta>
<Card.Description>
    {item.descripcion}
</Card.Description>
</Card.Content>
<Card.Content extra>
    <ItemCount stock={10} initial={1}/>
</Card.Content>
<Card.Content extra>
<Link to='/cart'>
<Button>Añadir al carrito</Button>
</Link>
</Card.Content>
</Card>
</>
)

export default ItemDetail
