// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Valentines.css'; // Adjust the path as needed

export const Valentines = () => {
  
  const navigate = useNavigate();
  const handleYesClick = () => {
    navigate('/yes'); // Navigate to the YesPage
  };

  const handleNoMouseOver = () => {
    const noButton = document.getElementById('noButton');
     
    

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
  
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    
  };

  useEffect(() => {
    // Add a class to the body
    document.body.classList.add('valentines-page');

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('valentines-page');
    };
  }, []);

   return (
    <div className="container">
      <h1 className="header_text">Will you be my valentines?</h1>
      <div className="gif_container">
        <img src="https://media.giphy.com/media/LnKonfpQ44fNvuGLkA/giphy.gif" alt="Cute animated illustration" />
      </div>
      <div className="buttons">
        <button className="btn yes-btn" id="yesButton" onClick={handleYesClick}>Yes</button>
        <button className="btn no-btn" id="noButton" onMouseOver={handleNoMouseOver}>No</button>
      </div>
    </div>
  );
};

export default Valentines;

