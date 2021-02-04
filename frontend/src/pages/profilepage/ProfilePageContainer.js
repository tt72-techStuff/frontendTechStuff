import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../store/actions';
import { Link } from 'react-router-dom';

const ProfilePageContainer = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userData);

  console.log('Profile Id', user.id);
  console.log('Profile Name', user.username);
  console.log('Profile Email', user.email);

  useEffect(() => {
    dispatch(fetchCurrentUser());
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
    </>
  );
};

export default ProfilePageContainer;
