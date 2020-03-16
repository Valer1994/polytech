import React from 'react';

import Paper from '../Paper';

import './style.scss';

const Video = () => {
    return (
        <Paper className='videoContainer'>
            <iframe 
                src="https://www.youtube.com/embed/SlPhMPnQ58k" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </Paper>
    )
};

export default Video;