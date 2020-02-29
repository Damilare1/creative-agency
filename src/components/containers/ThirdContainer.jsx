import React from 'react';
import TeamMember from '../TeamMember';
import jonasImg from './assets/jonas.png';
import pensImg from './assets/pens.png';
import potrickImg from './assets/potrick.png';
import team from './assets/team.png';
import dots from './assets/dots.png';

const Members = [
    {   
        color: '#FFC5B8',
        image: potrickImg,
        name: 'jam potrick',
        desc: 'Standard screen generation and design for all devices. Standard screen generation and design for all devices.',
        style: { 
            position: 'absolute', 
            zIndex: 5, 
            right: 0, 
            top: 0,
            height: 450, 
            width: '800px', 
            backgroundPosition: 'center', 
            maxWidth: '100%', 
            backgroundSize: 900, 
            backgroundRepeat: 'no-repeat', 
            marginTop: 55},
        socials: {
            fblink: 'fb.com',
            tweetlink: 'twitter.com',
            dribblelink: 'dribble.com',
            linkedInlink: 'linkedIn.com'
        }
    },
    {   
        color: '#FF5630',
        image: jonasImg,
        name: 'ema jonas',
        desc: 'Standard screen generation and design for all devices. Standard screen generation and design for all devices.',
        style: { 
            position: 'absolute', 
            zIndex: 5, 
            right: 0, 
            top: 0,
            height: 467, 
            width: '800px', 
            backgroundPosition: 'center', 
            maxWidth: '100%', 
            backgroundSize: 800, 
            backgroundRepeat: 'no-repeat', 
            marginTop: 33,
            marginRight: -20,
        },
        socials: {
            fblink: 'fb.com',
            tweetlink: 'twitter.com',
            dribblelink: 'dribble.com',
            linkedInlink: 'linkedIn.com'
        }
    },
    {
        color: '#3E4863',
        image: pensImg,
        name: 'mike pens',
        desc: 'Standard screen generation and design for all devices. Standard screen generation and design for all devices.',
        style: { 
            position: 'absolute', 
            zIndex: 5, 
            right: 0, 
            top: 0,
            height: 430, 
            width: '800px', 
            backgroundPosition: 'center', 
            maxWidth: '100%', 
            backgroundSize: 400, 
            backgroundRepeat: 'no-repeat', 
            marginTop: 70,
            marginRight: 24,
            },
        socials: {
            fblink: 'fb.com',
            tweetlink: 'twitter.com',
            dribblelink: 'dribble.com',
            linkedInlink: 'linkedIn.com'
        }
    }
]
const ThirdContainer = () => (
    <div style={{ width: '100%'}}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '100px 10%' }}>
        <p style={{ width: '30%', textAlign: 'center', color: '#BEBEBE' }}>Meet the Team</p>
        <p style={{ width: '30%', textAlign: 'center', color: '#502EFF', fontSize: '1.5rem' }}>great outcome always relay on the great foundation</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 10%', position: 'relative' }}>
            {
                Members.map(member => (
                    <TeamMember {...member} />
                ))
            }
            <div style={{ position: 'absolute', backgroundImage: `url(${team})`, top: -20, left: 0, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width:900, height: 200, zIndex: -2 }} />
            <div style={{ position: 'absolute', backgroundImage: `url(${dots})`, top: 0, right: -10, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width:400, height: 900, zIndex: -2 }} />

        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: 80 }}>
            <button style={{ padding: 10, borderRadius: 20 , textTransform: 'uppercase', border: 'none', width: '10rem', backgroundColor: '#502EFF', color: 'white' }}>Let's catch all</button>
        </div>
    </div>

)

export default ThirdContainer;