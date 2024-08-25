import React from 'react';

const Filter = ({ handleFilter }) => {
  return (
    <form onChange={handleFilter} className="filter">
      <input type="text" placeholder="Filter items" />
    </form>
  );
};

export default Filter;
