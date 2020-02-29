import React from 'react';
import web from './assets/web.png';
import webdev from './assets/webdev.png';
import branding from './assets/branding.png';
import testing from './assets/testing.png';
import motion from './assets/motion.png';
import design from './assets/design.png';
import Service from './service';


const serviceList = [
    {
        service: 'web Design', 
        image: web, 
        body: 'modern web design services withnew trends and direction'
    },
    {
        service: 'Branding', 
        image: branding, 
        body: 'highly professional branding and logo design work'
    },
    {
        service: 'Motion graphics', 
        image: motion, 
        body: 'modern motion graphics and animation for businesses.'
    },
    {
        service: 'ui/ux design', 
        image: design, 
        body: 'Standard screen generation and design for all devices.'
    },
    {
        service: 'Web Development', 
        image: webdev, 
        body: 'website development is something we are best in. '
    },
    {
        service: 'App testing', 
        image: testing, 
        body: 'we test app for better user experience and results.'
    },
]

const Services = () => (
    <div style={{ width: '1200px', display: 'flex', flexWrap: 'wrap' }}>
        {
            serviceList.map( service => (
                <Service {...service} />
            ))
        }
    </div>
)

export default Services;