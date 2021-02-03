import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const TechViewpage = (props) => {
    const techId = props?.match?.id || 24;
    const [tech, setTech] = useState('')
    const BASE_URL = 'https://tech-stuff-tt72.herokuapp.com'
    useEffect(() => {
        axios
            .get(`${BASE_URL}/api/posts${techId}`)
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
                <h1>Name</h1>
                <img alt="" src="https://cdn.thewirecutter.com/wp-content/uploads/2020/07/windowsultrabooks-lowres-8396.jpg" />
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
    background-color: firebrick;
    img{
		width: 25%;
		height:15%;
		margin: 1.5%;
	}
    h1 {
		margin: 5rem;
		font-size: 4rem;
		font-weight: 500;
		text-align: center;
		margin-top: -20px;
	}
`

export default TechViewpage;