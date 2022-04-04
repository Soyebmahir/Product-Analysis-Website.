import React from 'react';
import './Home.css'
import img1 from '../images/rolex.jpg'


const Home = () => {
    return (
        <div>
            <div className='intro'>
                <div className='pick-up-line'>
                    <h1>Grab the Opportunity</h1>
                    <h1>Be our lucky customer</h1>
                    <p>Make staying at home more enjoyable with these products and tips.These products and tips won’t just help you make the most of your no-travel holiday, but will also make your house feel more like a home, so that you’re ready to entertain once you can have your loved ones back around at your place.</p>
                    <button className='live-demo'>Get Now</button>
                </div>
                <div className='home-image'>
                    <img src={img1}alt="" />
                </div>
            </div>
            <div>

            </div>
           
        </div>
    );
};

export default Home;