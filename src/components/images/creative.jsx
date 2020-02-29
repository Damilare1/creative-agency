import React from 'react';
import creativeImg from './assets/creative.png'

const creative = () => (
    <div style={{ position: 'absolute', zIndex: 5, left: 0, top: '20%'}}>
        <img style={{ height: '60vh', width: 'auto'}} src={creativeImg} />
    </div>
)

export default creative;
