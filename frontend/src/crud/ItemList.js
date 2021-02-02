import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EditItem from '../pages/homepage/EditItem';
import { axiosAuth } from '../utils/axiosAuth';

const initialItem = {
  name: '',
  description: '',
};

const ItemList = ({ posts, updateItems }) => {
  const [editing, setEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(initialItem);

  const history = useHistory();

  const editItem = item => {
    setEditing(true);
    setItemToEdit(item);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosAuth()
      .put(`/api/posts/${itemToEdit.id}`, itemToEdit)
      .then(res => {
        updateItems([...posts, res.data]);
        history.push('Todo');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteItem = post => {
    axiosAuth()
      .delete(`/api/posts/${post.id}`)
      .then(res => {
        history.push('Todo');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return <div>{/* todo */}</div>;
};

export default ItemList;
