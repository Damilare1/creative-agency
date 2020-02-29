import React from 'react';
import {container} from '../../styles';
import NavItems from './NavItems';
import Logo from '../Logo';

const NavHeader = () => (
    <div style={{ position: 'absolute', width: '100%', zIndex: 10, display: 'flex', justifyContent: 'center', top: '0px', padding: '30px 0'}}>
        <div style={{...container, display: 'flex', justifyContent: 'space-between', padding: '0 10%'}}>
            <Logo />
            <NavItems />
            <button style={{ backgroundColor: '#502EFF', padding: '1px 4px', borderRadius: '20px', width: 150, color: 'white', border: 'none'}}>
                My Project
            </button>
        </div>
    </div>
)

export default NavHeader;