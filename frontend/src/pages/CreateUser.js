import React, { useState, useEffect } from 'react';
import { postNewUser } from '../store/actions'
import axios from 'axios';
// import axiosWithAuth from '../../utils/axiosAuth';
import * as yup from "yup";

const initialState = {
    email: '',
    username: '',
    password: '',
}

const CreateUser = (props) => {
    const [newUser, setNewUser] = useState(initialState);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errorState, setErrorState] = useState({
      email: '',
      username: "",
      password: "",
  });

  // Form schema
    const formSchema = yup.object().shape({
      email: yup.string().required("Name is required"),
      username: yup.string().required("Name is required"),
      password: yup.string().required("Password is required"),
  })

  // Schema button enable
    useEffect(() => {
      formSchema.isValid(newUser).then(valid => {
          setButtonDisabled(!valid);
      });
  }, [newUser]);

  // Schema Validation
  const validate = e => {
    yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrorState({ ...errorState, [e.target.name]: "" })
        })
        .catch(err => {
            setErrorState({
                ...errorState,
                [e.target.name]: err.errors[0]
            })
        })
}
  // Input Change Handler
    const handleChange = e => {
      e.persist();
      validate(e);
      setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
      };

  //Submit Handler (currently using redux)
    const loginSubmit = e => {
        e.preventDefault();
        console.log('sign up form clicked')
        // postNewUser(newUser);
        axios
            .post("https://tech-stuff-tt72.herokuapp.com/api/auth/register", newUser)
            .then( res => {
				        console.log('res data', res)
                props.history.push('/login')
            })
            .catch( err => {
				        console.log('error: ', err)
			})
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
            <button disabled={buttonDisabled}>Sign Up</button>
          </form>
        </div>
    )
}

export default CreateUser;