import React from 'react';
import SocialBar from '../../components/social';

const Member = ({color, image, socialObj, name, desc, style}) => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative', display: 'flex', width: '100%', justifyContent: 'center', height: 500 }}>
            <div style={{ width: '340px', backgroundColor: color}} />
            <div style={{...style, backgroundImage: `url(${image})`}} ></div>
        </div>
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ width: '100%', textAlign: 'center', color: '#502EFF', fontWeight: 'bold'}}>{name}</p>
                <p style={{ width: '100%', textAlign: 'center', color: '#BEBEBE', width: '80%'}}>{desc}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SocialBar {...socialObj} />
            </div>
        </div>
    </div>
)

export default Member;
