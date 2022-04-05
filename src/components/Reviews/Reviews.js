import React from 'react';
import Review from '../Review/Review';
import useReviewData from '../useReviewData/useReviewData';
import './Reviews.css'

const Reviews = () => {
    const [reviews,setReview]=useReviewData()
    return (
       <div>
           <h1 className='count-Review'>Customer Reviews ({reviews.length})</h1>
            <div className='review-column'>
            {
                reviews.map(review=><Review 
                     review={review}
                    key={review.id}
                    ></Review>)
            }
            
        </div>
       </div>
    );
};

export default Reviews;