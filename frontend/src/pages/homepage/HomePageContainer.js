import React from "react";
// import { Link } from "react-router-dom"
// import Login from '../Login'
// import CreateUser from "../CreateUser";
import styled from "styled-components";
import Description from "./Description";
import Footer from "./Footer";
import tech from './images/tech.jpg'

const HomePageContainer = props => {
    // const { values, submit, change, disabled, errors } = props;
    // const onSubmit = (evt) => {
    //     evt.preventDefault();
    //     submit();
    // };
    // const onChange = (evt) => {
    //     const { name, value, type, checked } = evt.target;
    //     change(name);
    // }


    return (
        <>
            <NavStyled>
                {/* <form>
                    <label>
                        Category
          <select name="category">
                            <option value="">- category -</option>
                            <option value="medium">camera</option>
                            <option value="large">video</option>
                            <option value="audio">audio</option>
                            <option value="gaming">gaming</option>
                        </select>
                    </label>
                    <label>
                        Description:
          <input type='text' name="description" />
                    </label>
                    <button id="subBtn">submit</button>
                </form> */}
                <center>
                <img alt="circuit board" src="https://wallpapermemory.com/uploads/456/circuit-wallpaper-1080p-89586.jpg" />
                </center>
            </NavStyled>
            <Homebody>
                <Description />
                <TechContainer>


                </TechContainer>
            <Footer/>
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

const NavStyled = styled.div`
img{
    width: 80%;
    height: 300px;
    margin: 0 auto;
	display: block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
`

export default HomePageContainer;
