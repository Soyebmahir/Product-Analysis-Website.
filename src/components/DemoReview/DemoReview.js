

import { faFaceAngry } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DemoReview.css'

const DemoReview = ({data}) => {
    return (
        <div className='card-box'>
        <div className='card-text'>
        <FontAwesomeIcon icon={faFaceAngry} className='angryFace' />
            <h1>{data.name}</h1>
        </div>
           <p>{data.review}</p>
           <h2>Rating : {data.Rating}</h2>
        </div>
    );
};

export default DemoReview;