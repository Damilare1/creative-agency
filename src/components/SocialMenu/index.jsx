import React from 'react';
import Social from '../social';

const socials = {
    fblink: 'fb.com',
    tweetlink: 'twitter.com',
    dribblelink: 'dribble.com',
    linkedInlink: 'linkedIn.com'
}

const SupportMenu = () => (
    <div style={{ width: '25%'}}>
        <h5>Social</h5>
        <Social {...socials}/>
    </div>
)

export default SupportMenu;