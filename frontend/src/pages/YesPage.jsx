
import '../css/YesPage.css'; 
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import catGif from '../css/images/cute-cat.gif'

const YesPage = () => {
  useEffect(() => {
    // Add a class to the body
    document.body.classList.add('yes-page');

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('yes-page');
    };
  }, []);
  return (
    <div className="container">
      <h1 className="header_text">YIPPIE!!!!</h1>
      <div className="gif_container2">
        {/* Update the path relative to the public folder or src */}
        <img src={catGif} />
      </div>
      <p className="text">See you soon for a surprise!</p>
    </div>
  );
};

export default YesPage;

