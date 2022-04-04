import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog'>
        <div >
            <h2>What is context API?</h2>
                <p>
                Answer:- Context API is a way for a React app to effectively produce global variables that can be passed around.
                We can say it is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                Context is also touted as an easier, lighter approach to state management using Redux.</p>
        </div>
        <div>
            <h2>What is symentic tag ?</h2>
            <p>Answer:- Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.
            Elements such as header , footer and article are all considered semantic because they
            accurately describe the purpose of the element and the type of content that is inside them.
            </p>
        </div>
        </div>
    );
};

export default Blogs;