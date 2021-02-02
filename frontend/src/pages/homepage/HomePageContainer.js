import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom"
import Login from '../profilepage/Login'
import CreateUser from "./CreateUser";

const HomePageContainer = props => {
    return (
        <>
        <h2> Home page </h2>
        <Login />
        <div>

        <CreateUser />
        </div>
        </>
        
    )
}

export default HomePageContainer;
