import React from 'react';

const Page2 = () => (
  <div className='div'>
    <h1>Page 2</h1>
    <div className='button-div'>
    <a href="/"> {/* Go back to the home page */}
      <button>Back to Home</button>
    </a>
    <a href="/page-1">
                <button>Go to Page 1</button>
            </a>
    </div>
  </div>
);

export default Page2;