import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import './Navbar.css'
import CartIcon from '../CartWidget/cartWidget'

export default class menu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div className='bar'>
      <Menu secondary>
        <Menu.Item
          name='Verano 22'
          active={activeItem === 'Verano 22'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Ropa'
          active={activeItem === 'Ropa'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Accesorios'
          active={activeItem === 'Accesorios'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
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

