import React from 'react';
import person from './assets/person.png';

const PersonImg = () => (
    <div style={{ position: 'absolute', zIndex: 5, right: 0, top: 0, backgroundImage: `url(${person})`, height: '120vh', width: '960px', backgroundPosition: 'center', maxWidth: '50%'}} />
)

export default PersonImg;