import React from 'react';

const Page1 = () => (
  <div className='div'>
    <h1>Page 1</h1>
    <div className='button-div'>
    <a href="/"> {/* Go back to the home page */}
      <button>Back to Home</button>
    </a>
    <a href="/page-2"> {/* Go to Page 2 */}
                <button>Go to Page 2</button>
            </a>
    </div>
  </div>
);

export default Page1;