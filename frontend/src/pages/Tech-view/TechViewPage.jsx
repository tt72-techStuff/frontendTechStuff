import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const TechViewpage = (props) => {
    // const techId = props?.match?.id || 24;
    const techId = 2
    const [tech, setTech] = useState('')
    const BASE_URL = 'https://tech-stuff-tt72.herokuapp.com'
    useEffect(() => {
        axios
            .get(`${BASE_URL}/api/posts/${techId}`)
            .then((res) => {
                setTech(res.data);
                // console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);



    return (
        <>
            <StyledTech>
                <h1>{tech.name}</h1>

                <img alt={tech.name} src={tech.image_url} />

                <h5>{tech.description}</h5>
            </StyledTech>

            <StyledContact>
                <h4>For more Information, heres the email of the seller</h4>
                <p>{tech.email}</p>
            </StyledContact>
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
    margin-right: 20%;
    margin-left: 20%;
    margin-top: 50px;
    border-radius: 15px;

    img{
        border-radius: 50px;
		width: 20%;
		height:15%;
		margin: 1.5%;
        margin-top: -45px;	
        }
    
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
const StyledContact = styled.div`
    display: flex;
	flex-direction: column;	
	align-items: center;
	font-size: 2rem;
	font-weight: 30;
	text-align: center;
    background-color: #c3bea4;
    margin-right: 20%;
    margin-left: 20%;
    margin-top: 50px;
    border-radius: 15px;
`

export default TechViewpage;