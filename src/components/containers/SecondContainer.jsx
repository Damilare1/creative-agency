import React from 'react';
import Services from '../Services';
import dots from './assets/dots.png'

const SecondPage = () =>  (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: '#502EFF', position: 'relative' }}>
        <div style={{ position: 'absolute', zIndex: 4, right: 0, top: 0, backgroundImage: `url(${dots})`, height: '40vh', width: '600px', backgroundPosition: 'center', maxWidth: '50%'}} />
        <div style={{width: '60%', margin: '10% 0'}}>
        <h3 style={{width: '40%', fontSize: '4rem', fontWeight: 'bold', color: 'white'}}>services & portfolio</h3>
        <div style={{ width: '100%'}}>
            <Services />
        </div>
        </div>
    </div>
)

export default SecondPage;