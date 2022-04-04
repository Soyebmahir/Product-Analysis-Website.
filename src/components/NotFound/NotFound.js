import React from 'react';
import images from '../images/notfound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
           <img src={images} alt="" />
        </div>
    );
};

export default NotFound;