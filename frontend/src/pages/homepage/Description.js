import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Description = props => {	
	return (
		<BigContainer>
		<Hcontainer>
	<h4>SAVE MONEY AND TIME by renting amazing gadgets from trusted tech enthusiasts!</h4>
Why purchase expensive equipment you dont need to own when you can rent cameras, audio, video and video game equipment for a fraction of the price? Rent your equipment today with Use My Tech!

<Link to='/shop' style={{ textDecoration: 'none'}} > SHOP NOW!</Link>

<h4>Want to rent out your tech?</h4>

Become a verified member of Use My Tech Today!

<Link to='/signup' style={{ textDecoration: 'none'}} > SIGN UP</Link>
		</Hcontainer>
		</BigContainer>
		
	)
};
const BigContainer = styled.div`
	border: 1px solid black;
	width: 555px;

`;

const Hcontainer = styled.div`
	background-color: lightgray;
	margin-top: 3%;
	margin-bottom: 3%;
	padding: 3%;
	h4 {
		font-weight: bold;
		color: #4267B2;
		}
	}

	}
`
export default Description;
