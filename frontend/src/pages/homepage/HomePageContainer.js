import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom"

import HomePageTechCard from './HomePageTechCard'

const HomePageContainer = props => {
    return (
        <>
            <h2> Home page</h2>
            <img alt="" src="https://png.pngtree.com/thumb_back/fh260/background/20200425/pngtree-technology-sense-creative-hand-painted-integrated-circuit-background-image_334505.jpg" />

            <HomePageTechCard />
        </>
    )

}

export default HomePageContainer;
