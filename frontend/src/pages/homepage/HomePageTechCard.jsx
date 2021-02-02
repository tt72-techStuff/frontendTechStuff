import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const HomePageTechCard = props => {
    return (
        <TechContain>
            <TechCard>
                <h2>Tech title</h2>
            </TechCard>
        </TechContain>

    )
};

const TechContain = styled(Link)`
border: 1px solid black;

`;

const TechCard = styled.div`


`;

export default HomePageTechCard;

