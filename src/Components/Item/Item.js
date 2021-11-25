import React from 'react'
import { Card,Button, Image} from 'semantic-ui-react'

import ItemCount from '../ItemCount/ItemCount';

const Item = ({data}) => 
    (
    <>
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
        <ItemCount stock={10} initial={1}/>
    </Card.Content>
    <Card.Content extra>
    <Button>Comprar</Button>
    </Card.Content>
    </Card>
    </>
    )


export default Item;
