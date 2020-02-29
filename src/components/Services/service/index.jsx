import React from 'react';

const Service = ({service, image, body}) => (
    <div style={{ width: '312px', color: 'white' }}>
        <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{ width: 30, height: 'auto' }} src={image} />
            </div>
            <div style={{ width: '80%'}}>
                <p>{service}</p>
            </div>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: '80%'}}>
                <p>{body}</p>
            </div>
        </div>
    </div>
)

export default Service;