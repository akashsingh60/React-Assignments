import React from 'react';


const Home = () => (
    <div className='div'>
        <h1>Home Page</h1>
        <div className='button-div'>
            <a href="/page-1">
                <button>Go to Page 1</button>
            </a>
            <a href="/page-2"> {/* Go to Page 2 */}
                <button>Go to Page 2</button>
            </a>
        </div>
    </div>
);

export default Home;