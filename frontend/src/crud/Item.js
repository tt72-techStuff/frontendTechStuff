import React from 'react';

const Item = ({ item, editing, editItem, deleteItem }) => {
  const handleClick = e => {
    e.stopPropagation();
    deleteItem(item);
  };
  return (
    <li onClick={() => editItem(item)}>
      <span>
        {editing && <span onClick={handleClick}>x</span>}
        {`${item.item}`}
      </span>
    </li>
  );
};

export default Item;
