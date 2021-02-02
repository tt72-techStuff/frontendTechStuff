import React from 'react';
import styled from 'styled-components';

export default function CreateItem({  }) {

    return (
        <StyledButton>
            <div>Add Item</div>
            {/* form here to add a new item */}
        </StyledButton>
    )
}

const StyledButton = styled.div `
background-color: #55F;
color: white;
font-size: 1.3rem;
padding: 10px 20px 10px 20px;

div {
    width: 100%;
}
`