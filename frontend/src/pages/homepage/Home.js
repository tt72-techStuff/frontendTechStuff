import React, { useState, useEffect } from 'react'
import Item from './Item'
import CreateItem from './CreateItem'
import styled from 'styled-components';

export default function Home() {


    return (
        <StyledHome>
            <h2>Home</h2>
            <div className="home-image">
                <CreateItem />
            </div>
            <div className="items-container">
                <Item /> {/* placeholder, code is below */}
                {/* {
        items.map(item => {
          return (
            <Item key={item.id} currentItem={item} />
          )
        })
      } */}
            </div>
        </StyledHome>
    )
}

//basic home page styling
const StyledHome = styled.div`
color: black;
display: flex;
flex-flow: column nowrap;
align-items: center;
background-color: lightgrey;

.items-container {
    display: flex;
    flex-flow: row wrap;
    align-items: space-evenly;
    padding: 20px 0 20px 0;
}
.home-image {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`