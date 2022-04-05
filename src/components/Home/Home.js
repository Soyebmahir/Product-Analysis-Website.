import React from 'react';
import './Home.css'
import img1 from '../images/rolex.jpg'
import useReviewData from '../useReviewData/useReviewData';
import DemoReview from '../DemoReview/DemoReview';

import CustomLink from '../CustomLink/CustomLink';


const Home = () => {

    const [reviews,setReview]=useReviewData()
    // console.log(reviews);
    // console.log(setReview);
    const demoReviews = reviews.slice(0,3);
    // console.log(demoReviews);
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
            <h1 className='demo'>Customer Reviews ({demoReviews.length})</h1>
            <div className='card'>
                {
                    demoReviews.map(demoReview=><DemoReview
                    data ={demoReview}
                    key={demoReview.id} 
                    ></DemoReview>)
                }

            </div>
           <button className='show-button'><CustomLink to="/reviews" className="route-showMore"> Show All Reviews</CustomLink></button>
        </div>
    );
};

export default Home;