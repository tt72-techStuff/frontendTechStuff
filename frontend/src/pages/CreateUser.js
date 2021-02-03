import React, { useState} from 'react'
import { postNewUser } from '../store/actions'
// import axios from 'axios';
// import axiosWithAuth from '../../utils/axiosAuth';

const initialState = {
    email: '',
    username: '',
    password: '',
}
const CreateUser = (props) => {
    const [newUser, setNewUser] = useState(initialState);

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
      };

    const loginSubmit = e => {
        e.preventDefault();
        console.log('sign up form clicked')
        postNewUser(newUser);
        setNewUser(initialState);
    }


    
    return (
        <div>
          <form className='Form' onSubmit={loginSubmit}>
          <h1 className='Formh1'>Sign Up</h1>
          <input
              type="email"
              name="email"
              value={newUser.email}
              placeholder='email'
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              value={newUser.username}
              placeholder='username'
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={newUser.password}
              placeholder='password'
              onChange={handleChange}
            />
            <button>Sign Up</button>
          </form>
        </div>
    )
}

export default CreateUser;