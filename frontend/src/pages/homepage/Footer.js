import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Footer = props => {	
	return (
		<BigContainer>
		<Links>
        © TRACK TEAM 72 | EL CAMPEONS DEL MUNDO 
		</Links>
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

const Links = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;


`
export default Footer;
