import React from 'react';
import styled from 'styled-components';

export default function Item({ currentItem }) {

    if (!currentItem) {
        return (
        <h3>Loading Items..</h3>
        )
    }

    return (
        <StyledItem>
            {/* data from api goes here to create an item card */}
            <h1>Item Card</h1>
            <p>Name: {currentItem.name}</p>
        </StyledItem>
    )
}


//make a nice styled item card
const StyledItem = styled.div`

`