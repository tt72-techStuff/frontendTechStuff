import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const HomePageTechCard = props => {
    return (
        <TechContain>
            <TechCard>
                <h2>Tech title</h2>
                <img alt="" src="" />
                <h4>card title</h4>
            </TechCard>
        </TechContain>

    )
};

// const TechContain = styled(Link)`
const TechContain = styled.div`


`;

const TechCard = styled.div`
img{
    width:50%;
    height:10%;
}
border: 1px solid black;

`;

export default HomePageTechCard;

