import React, { useEffect } from 'react';

 

function Api() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        console.log(data); // Log the fetched data to the console
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

 

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

 

  return <div>Fetching data...</div>;
}

 

export default Api;