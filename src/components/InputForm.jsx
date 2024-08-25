import React from 'react';

const InputForm = ({ handleAddItem }) => {
  return (
    <form onSubmit={handleAddItem} className="input-container">
      <input type="text" placeholder="Enter item name" />
      <button type="submit">ADD</button>
    </form>
  );
};

export default InputForm;
