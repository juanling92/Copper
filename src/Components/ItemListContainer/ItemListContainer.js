import React from 'react'
import { List } from 'semantic-ui-react'
import './ItemListContainer.css'

const listContainer = () => (
    <div className='ItemListContainer'>
  <List bulleted horizontal>
    <List.Item as='a'>Nosotros</List.Item>
    <List.Item as='a'>Preguntas frecuentes</List.Item>
    <List.Item as='a'>Contacto</List.Item>
  </List>
  </div>
)

export default listContainer;