import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleMouseOver = (value) => {
    setHover(value);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const starValue = index + 1;

        return (
          <span
            key={index}
            style={{ cursor: 'pointer' }}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            {starValue <= (hover || rating) ? '\u2605' : '\u2606'}
          </span>
        );
      })}
      <p>{rating} out of 5 stars</p>
    </div>
  );
};

export default StarRating;


