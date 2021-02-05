import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, fetchCurrentUserItems, deleteItemById } from '../../store/actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfilePageContainer = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userData);
  const items = useSelector(state => state.itemData);

  console.log('Profile Id', user.id);
  console.log('Profile Name', user.username);
  console.log('Profile Email', user.email);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrentUserItems());
  }, [dispatch]);

  if (!user) {
    return <h1>No user found</h1>;
  }

  const logOut = () => {
    localStorage.clear();
  };

  const handleDelete = (id) => {
    dispatch(deleteItemById(id))
  }

  return (
    <>
    <ProfileDiv>
      <div>
        <h1>Name: {user.username}</h1>
        <h2>Email: {user.email}</h2>
      </div>
      <div>
        <button onClick={logOut}>
          <Link to='/'>Logout</Link>
        </button>
        <button>
          <Link to='/addItem'> Add Item </Link>
        </button>
      </div>
    </ProfileDiv>
      <ItemsDiv>
        {items.map(item => (
          <ItemDiv key={item.id}>
            <h1>{item.name}</h1>
            <div>
              <img src={item.image_url} alt='' />
            </div>
            <h3>{item.category}</h3>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button><Link to={`/editItem/${item.id}`}> Edit </Link></button>
            <button onClick={handleDelete(item.id)}> Delete </button>
          </ItemDiv>
        ))}
      </ItemsDiv>
    </>
  );
};

const ProfileDiv = styled.div`
text-align: center;
font-size: 2rem;
margin-bottom: 2%;
`;

const ItemsDiv = styled.div`
margin: 0 auto;
background-color: #4267B2;
padding: 1%;
`;

const ItemDiv = styled.div`
margin: 3% auto;
width: 40%;
padding: 1%;
background-color: white;
display: flex;
flex-flow: column nowrap;
justify-content:center;
align-items: center;
`;

export default ProfilePageContainer;
