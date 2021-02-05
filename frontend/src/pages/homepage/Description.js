import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Description = props => {	
	return (
		<BigContainer>
		<Hcontainer>
			<div className="home">
			<h4>SAVE TIME AND MONEY!</h4>
				Rent amazing gadgets from trusted tech enthusiasts!
				Why purchase expensive equipment you dont need? 
				Rent equipment for a fraction of the price!
				Rent your equipment today with Use My Tech!
			</div>
			<br></br>
			<div className="button">
				<Link to='/shop' style={{ textDecoration: 'none'}} > BROWSE</Link>
	 		</div>
			<br></br>
			<div className="home">
				<h4>WANT TO RENT OUT YOUR TECH?</h4>
				Become a verified member of Use My Tech Today!
			</div>

			<br></br>
			<div className="button">
				<Link to='/signup' style={{ textDecoration: 'none'}} > SIGN UP</Link>	
			</div>


		</Hcontainer>
		</BigContainer>
		
	)
};
const BigContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	width: 80%;
`;

const Hcontainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	color: black;
	align-items: center;
	padding: 3%;
	font-size: 1.5rem;
	line-height:1.5;
	width: 90%;
h4 {
	font-weight: bold;
	color: #4267b2;
	font-size: 1.7rem;
	text-align:center;
	}
a{
	color:white;
	font-weight: bold;
	background-color: #4267b2;			
	border: 10px solid #4267b2;
}

	
`
export default Description;
