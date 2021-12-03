import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import './Navbar.css'
import CartIcon from '../CartWidget/cartWidget'
import {NavLink} from 'react-router-dom'

export default class menu extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='bar'>
      <Menu secondary>
        <Menu.Item header as={NavLink} to='/'
          name='Inicio'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item header as={NavLink} to='/category/ropa'
          name='Ropa'
          active={activeItem === 'Ropa'}
          onClick={this.handleItemClick}
        />
        <Menu.Item header as={NavLink} to='/category/accesorios'
          name='Accesorios'
          active={activeItem === 'Accesorios'}
          onClick={this.handleItemClick}
        />
        <Menu.Item header as={NavLink} to='/category/descuentos'
          name='Descuentos'
          active={activeItem === 'Descuentos'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Buscar...' />
          </Menu.Item>
          <Menu.Item>
                <CartIcon/>
            </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}

