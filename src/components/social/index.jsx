import React from 'react';
import linkedIn from './assets/LinkedIn.png';
import twitter from './assets/Twitter.png';
import facebook from './assets/Facebook.png';
import dribble from './assets/Dribble.png';

const SocialBar = ({fblink, tweetlink, dribblelink, linkedInlink}) => (
    <div style={{ display: 'flex', justifyContent:'space-between', width: '244px' }}>
        <a href={fblink}><img style={{ width: '5px', height: 'auto' }} src={facebook} alt="facebook"/></a>
        <a href={tweetlink}><img style={{ width: '10px', height: 'auto' }} src={twitter} alt="twitter"/></a>
        <a href={dribblelink}><img style={{ width: '10px', height: 'auto' }} src={dribble} alt="dribble"/></a>
        <a href={linkedInlink}><img style={{ width: '10px', height: 'auto' }} src={linkedIn} alt="LinkedIn"/></a>
    </div>
)

export default SocialBar;