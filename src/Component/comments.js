import React, { useState } from "react";

const CommentInput = () => {
  const [comment, setComment] = useState('');
  const [commentsArray, setCommentsArray] = useState([]);

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      setCommentsArray([...commentsArray, comment]);
      setComment('');
    }
  };

  return (
    <div>
      <textarea
        rows="3"
        cols="50"
        placeholder="Enter your review here..."
        value={comment}
        onChange={handleInputChange}
      />
      <button onClick={handleAddComment}>Submit</button>
      <div>
        <h3>Comments:</h3>
        <ul>
          {commentsArray.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentInput;
