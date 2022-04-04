import React from 'react';
import './Home.css'
import img1 from '../images/rolex.jpg'


const Home = () => {
    return (
        <div>
            <div className='intro'>
                <div className='pick-up-line'>
                    <h1>Your Next Watch</h1>
                    <h1>Your Best Watch</h1>
                </div>
                <div>
                    <img src={img1}alt="" />
                </div>
            </div>
            <div>

            </div>
           
        </div>
    );
};

export default Home;