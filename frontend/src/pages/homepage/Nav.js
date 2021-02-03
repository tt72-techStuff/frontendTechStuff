import React from 'react';
import styled from 'styled-components';

export default function Nav({ }) {

    return (
        <StyledNav>
            <h1>Nav Bar</h1>
            <div className="user-controls">
                {/* user control components go here */}
                <h3>Log in</h3>
                <h3>Log out</h3>
                <h3>Create New User</h3>
            </div>
        </StyledNav>
    )
}


const StyledNav = styled.nav`
font-size: 1rem;
background-color: #222;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
padding: 10px 20px 10px 20px;

.user-controls {
  font-size: .8rem;
}
`