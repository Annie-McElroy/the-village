import React from 'react';

const DeleteButton = ({ onDeleteClick }) => {
  return (
    <button onClick={onDeleteClick}>Delete Account</button>
  );
};

export default DeleteButton;