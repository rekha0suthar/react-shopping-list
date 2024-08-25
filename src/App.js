import { useState } from 'react';
import InputForm from './components/InputForm';
import Filter from './components/Filter';
import ShoppingList from './components/ShoppingList';
import ClearAllButton from './components/ClearButton';

const App = () => {
  const [shoppingList, setShoppingList] = useState([
    'Bread',
    'Milk',
    'Chocolate',
  ]);

  const [filteredShoppingList, setFilteredShoppingList] =
    useState(shoppingList);

  // add item method
  const handleAddItem = (e) => {
    e.preventDefault();
    const inputItem = e.target[0].value;
    const updatedList = [...shoppingList, inputItem];
    setShoppingList(updatedList);
    setFilteredShoppingList(updatedList); // Update filtered list as well
    e.target.reset();
  };

  // delete method for each item
  const handleDeleteItem = (item) => {
    const newList = shoppingList.filter((listItem) => listItem !== item);
    setShoppingList(newList);
    setFilteredShoppingList(newList); // Update filtered list as well
  };

  // filter method to filter items
  const handleFilter = (e) => {
    const query = e.target.value.toLowerCase();
    if (query) {
      const filteredList = shoppingList.filter((listItem) =>
        listItem.toLowerCase().includes(query)
      );
      setFilteredShoppingList(filteredList);
    } else {
      setFilteredShoppingList(shoppingList); // Show full list when filter is cleared
    }
  };

  // Clear all item button
  const handleDeleteAll = () => {
    setShoppingList([]);
    setFilteredShoppingList([]);
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <InputForm handleAddItem={handleAddItem} />
      <Filter handleFilter={handleFilter} />
      <ShoppingList
        filteredShoppingList={filteredShoppingList}
        handleDeleteItem={handleDeleteItem}
      />
      <ClearAllButton handleDeleteAll={handleDeleteAll} />
    </div>
  );
};

export default App;
