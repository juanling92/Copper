import React from 'react'
import { Card,Button, Image} from 'semantic-ui-react'
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({data}) => 
    (
    <>
    <Card>
    <Image src={data.imagen} wrapped ui={false} className='img' height="#" width="#"/>
    <Card.Content>
    <Card.Header>{data.producto}</Card.Header>
    </Card.Content>
    <Card.Content extra>
        <Link to={`/item/${data.id}`}>
    <Button>Ver más</Button>
    </Link>
    </Card.Content>
    </Card>
    </>
    )

export default Item;
