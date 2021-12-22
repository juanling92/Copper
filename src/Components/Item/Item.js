import React from 'react'
import { Card,Button, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Item = ({data}) => 
    (
    <>
    <Card>
    <Image src={data.img} wrapped ui={false} alt='Imagen de producto'/>
    <Card.Content>
    <Card.Header>{data.product}</Card.Header>
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
