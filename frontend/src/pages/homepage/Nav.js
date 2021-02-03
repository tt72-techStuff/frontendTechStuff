//NEEDS STYLING REDONE
//NEEDS COMPONENTS LINKED

import React from 'react';
import styled from 'styled-components';
import CreateUser from './CreateUser';
import Login from '../profilepage/Login';

export default function Nav({ }) {

    return (
        <StyledNav>
            <div className="inner">
                <h1>Use My Tech Stuff</h1>
                <div className="user-controls">
                    <div>
                        <h1>Log In</h1>
                        <h1>Sign Up</h1>
                    </div>
                </div>
            </div>
        </StyledNav>
    )
}


const StyledNav = styled.nav`
font-size: 1.5rem;
background-color: #222;
color: white;
padding: 10px 20px 10px 20px;
display: flex;
justify-content: center;

.user-controls {
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-end;
  width: 45%;
}

.inner {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
`