import React, { useState } from 'react';
import './Heart.css';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Heart = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <i 
      className={`heart ${isClicked ? 'clicked' : ''}`} 
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faHeart} />
    </i>
  );
}

export default Heart;
