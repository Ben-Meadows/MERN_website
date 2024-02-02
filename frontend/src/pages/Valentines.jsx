

import '../css/Valentines.css'; // Adjust the path as needed

export const Valentines = () => {
  /*const handleYesClick = () => {
    console.log("Yes clicked");
    // You can add more logic here, like redirecting to another page
    alert("Yes clicked! More actions to be added.");
  };*/

  const handleNoMouseOver = () => {
    const noButton = document.getElementById('noButton');
    noButton.style.position = 'fixed'; // Change to fixed when hovered
  
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
  
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  };

   return (
    <div className="container">
      <h1 className="header_text">Will you be my valentines?</h1>
      <div className="gif_container">
        <img src="https://media.giphy.com/media/LnKonfpQ44fNvuGLkA/giphy.gif" alt="Cute animated illustration" />
      </div>
      <div className="buttons">
        <button className="btn" id="yesButton" onClick={() => console.log('Yes Clicked')}>Yes</button>
        <button className="btn" id="noButton" onMouseOver={handleNoMouseOver}>No</button>
      </div>
    </div>
  );
};

export default Valentines;

