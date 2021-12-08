import { Input, Menu } from 'semantic-ui-react'
import './Navbar.css'
import CartIcon from '../CartWidget/cartWidget'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
return (
    <div className='bar'>
      <Menu secondary>
        <Menu.Item header as={NavLink} to='/'
          name='Inicio'
        />
        <Menu.Item header as={NavLink} to={`/category/ropa`}
          name='Ropa'
        />
        <Menu.Item header as={NavLink} to={`/category/accesorios`}
          name='Accesorios'
        />
        <Menu.Item header as={NavLink} to='/category/descuentos'
          name='Descuentos'
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
  )}

export default NavBar;

