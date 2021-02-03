import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const TechViewpage = (props) => {
    // const techId = props?.match?.id || 24;
    const techId = 1
    const [tech, setTech] = useState('')
    const BASE_URL = 'https://tech-stuff-tt72.herokuapp.com'
    useEffect(() => {
        axios
            .get(`${BASE_URL}/api/posts/${techId}`)
            .then((res) => {
                setTech(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [techId]);

    return (
        <>
            <StyledTech>
                <h1>{tech.name}</h1>

                <img alt={tech.name} src={tech.image_url} />

                <h5>{tech.description}</h5>
            </StyledTech>
        </>
    )
}

const StyledTech = styled.div`
    display: flex;
	flex-direction: column;	
	align-items: center;
	font-size: 2rem;
	font-weight: 330;
	text-align: center;
    background-color: lightgray;
    /* margin-right: 10px solid black; */
    margin-right: 30%;
    margin-left: 30%;

    img{
		width: 20%;
		height:15%;
		margin: 1.5%;
        margin-top: -15px;	}
    
    h1 {
		margin: 5rem;
		font-size: 3.5rem;
		font-weight: 500;
		text-align: center;
		margin-top: 10px;
	}
    h5{
        font-size: 1.2rem;
    }
`

export default TechViewpage;