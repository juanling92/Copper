import React from 'react'
import './Header.css'
import logoCopper  from './logocopper.png'

const header = () => {
    return (
        <div className='Header'>
            <img src={logoCopper} alt='logo coder house' />
        </div>
    );
}

export default header;
