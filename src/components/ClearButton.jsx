import React from 'react';

const ClearAllButton = ({ handleDeleteAll }) => {
  return (
    <button className="clear-btn" onClick={handleDeleteAll}>
      Clear All
    </button>
  );
};

export default ClearAllButton;
