import React from "react";
import { Link } from "react-router-dom"
import Login from '../Login'
import CreateUser from "../CreateUser";
import styled from "styled-components";
import HomePageTechCard from './HomePageTechCard'
import Description from "./Description";
import tech from './images/tech.jpg'

const HomePageContainer = props => {


    return (
        
          <>
            <center><img src={tech} width="555px" height="260px"></img></center>

         

            <Homebody>
            <Description />
                <TechContainer>
                
                <HomePageTechCard />
                </TechContainer>
            </Homebody>

      </>
    )

}


const Homebody = styled.div`
    display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
`

const TechContainer = styled.div`
    display: flex;
	flex-flow: wrap;
	justify-content: space-evenly;
	width: 96%;
	padding-top: 3%;
    
`

export default HomePageContainer;
