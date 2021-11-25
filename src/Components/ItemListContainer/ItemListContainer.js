import React from 'react'
import { List, Button } from 'semantic-ui-react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const listContainer = ({greeting}) => 
  (
    <>
    <div className ='greet'>{greeting}</div>
    <ItemList/>
    <div className='container'>
      <List bulleted horizontal>
      <List.Item as='a'>Nosotros</List.Item>
      <List.Item as='a'>Preguntas frecuentes</List.Item>
      <List.Item as='a'>Contacto</List.Item>
      </List>
    </div>
    <div>
    <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
  </div>
    </>
)

export default listContainer;