import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom"
import styled from "styled-components";

import HomePageTechCard from './HomePageTechCard'

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
            <form>
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
            </form>
            <h2> Home page</h2>
            <img alt="" src="https://png.pngtree.com/thumb_back/fh260/background/20200425/pngtree-technology-sense-creative-hand-painted-integrated-circuit-background-image_334505.jpg" />
            <Homebody>
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
