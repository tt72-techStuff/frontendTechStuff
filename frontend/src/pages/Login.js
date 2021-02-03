import React, { useState} from 'react';
import { postUserLogin } from '../store/actions';
import axios from 'axios';

const initialState = {
    username: '',
    password: '',
}
const Login = (props) => {
    const [credentials, setCredentials] = useState(initialState);

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
      };

    const loginSubmit = e => {
        e.preventDefault();
        // console.log('form clicked');
        console.log('credentials', credentials);
        // postUserLogin(credentials);

        axios
            .post("https://tech-stuff-tt72.herokuapp.com/api/auth/login", credentials)
            .then( res => {
				console.log(res.data)
                localStorage.setItem('token', res.data.token);
            })
            .catch( err => {
				console.log('error: ', err)
			})
        
        
        // setCredentials(initialState);
    }



    
    return (
        <div>
            {/* form here to log in */}
            {/* display username, whatever info, and log out button after logging in */}
            <div>
          <form className='Form' onSubmit={loginSubmit}>
              <h1 className='Formh1'>Log In</h1>
            <input
              type="text"
              name="username"
              value={credentials.username}
              placeholder='username'
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={credentials.password}
              placeholder='password'
              onChange={handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
        </div>
    )
}

export default Login;