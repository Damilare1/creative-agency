import React from 'react';
import NavHeader from '../NavHeader';
import PersonImg from '../images/person';
import Creative from '../images/creative';
import { container } from '../../styles';

const FirstContainer = () => (
    <div style={{ position: 'relative', width: '100%', justifyContent: 'space-around', height: '100vh', top: 0 }}>
        <NavHeader/>
        <PersonImg/>
        <Creative/>
        <div style={{width: '300px', position:'absolute', top:'40%', left: '10%'}}>
            <h5 style={{ fontSize: '4rem', margin: 0 }}>creative agency</h5>
            <div>
                <p style={{ display: 'flex', alignItems: 'center'}}><span style={{ borderRadius: '100%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#502EFF', color: 'white', marginRight: 10}}>&#9658;</span>watch a video intro</p>
            </div>
        </div>
    </div>
)

export default FirstContainer;