import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, fetchCurrentUserItems } from '../../store/actions';
import { Link } from 'react-router-dom';

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

  return (
    <>
      <div>
        <h1>Name: {user.username}</h1>
        <h2>Email: {user.email}</h2>
      </div>
      <div>
        <button onClick={logOut}>
          <Link to='/'>LogOut</Link>
        </button>
      </div>
      <div>
        {items.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <div>
              <img src={item.image_url} alt='' />
            </div>
            <h3>{item.category}</h3>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfilePageContainer;
