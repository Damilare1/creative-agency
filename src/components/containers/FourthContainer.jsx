import React from 'react';
import ServicesMenu from '../ServicesMenu';
import SupportMenu from '../SupportMenu';
import SocialMenu from '../SocialMenu';
import graph from './assets/third.png';

const FourthContainer = () => (
    <div style={{ width:'100%', paddingTop: '20%'}}>
        <div style={{ height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h5 style={{ color: '#BEBEBE' }}>contact us</h5>
            <p style={{ color: '#502EFF', fontWeight: 'bold', fontSize: 18 , width: '30%', textAlign: 'center'}}>Have an awesome idea in your mind? we would love to hear</p>
            <div><input placeholder= 'enter your email' style={{ color: '#502EFF', borderRadius: 25, border: '#502EFF solid', padding: '0 10px', width: '16rem', height: 24, }} /> <button style={{ padding: 2, borderRadius: 25, border: 'none', width: '6rem', height: 24, backgroundColor: '#502EFF', color: 'white'}}>start</button></div>
        </div>
        <div style={{ height: 'fit-content', padding: '30px 0', backgroundColor: '#FAF7FF' }}>
            <div style={{ padding: '0 10%', backgroundImage: `url(${graph})`, backgroundSize: 'cover'  }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '#BEBEBE solid 1px',  padding: '10%', backgroundImage: `url(${graph})`  }}>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{ width: '25%'}}>
                        <h5>Services</h5>
                        <p style={{ fontSize: 14, color: '#502EFF' }}>A design agency shaping ideas into products. We help startups and enterprises invent, build and launch their next project.</p>
                    </div>
                    <ServicesMenu />
                    <SupportMenu />
                    <SocialMenu />
                </div>
            </div>
            <div style={{ borderTop: '#BEBEBE solid 1px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 80}}>
            <p>frontendtest | All rights reserved 2020</p>
            </div>
            </div>
        </div>
    </div>
)

export default FourthContainer;