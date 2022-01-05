import React from 'react'
import './Header.css'
import logoCopper  from './logocopper.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header'>
            <Link to='/'>
            <img src={logoCopper} alt='logo copper' />
            </Link>
        </div>
    );
}

export default Header;
