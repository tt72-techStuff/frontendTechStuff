import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom"

const HomePageTechCard = props => {
    // const { tech } = props;
    // const id = tech.techid
    const techId = props?.match?.id || 24;
    const [tech, setTech] = useState('')
    const BASE_URL = 'https://tech-stuff-tt72.herokuapp.com'

    useEffect(() => {
        axios
            .get(`${BASE_URL}/api/posts`)
            .then((res) => {
                setTech(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [techId]);


    return (
        <TechContain>
            <TechCard>
                <img alt='' src="https://png.pngtree.com/thumb_back/fh260/background/20200425/pngtree-technology-sense-creative-hand-painted-integrated-circuit-background-image_334505.jpg" />
                <div className="tech-container">
                    <div>
                        <h4><span>Name:  </span>Tech</h4>
                    </div>
                </div>
                <hr></hr>
                <h4 className="description"> this is what its for... </h4>
            </TechCard>
        </TechContain>

    )
};

// const TechContain = styled(Link)`
const TechContain = styled.div`


`;

const TechCard = styled.div`
background-color: lightgray;
	border: 2px solid white;
	border-radius: 0 0 25px 25px;
	border-top: 3px solid #F3F6FA;
	padding: 3%;
	flex: 1;
	h4 {
		color: black;
		span {
			font-weight: bold;
		}
	}
	img {
		width: auto;
		max-width: 30%;
		min-height: 60%;
		max-height: 50%;
		font-weight: bold;
		margin: 0 auto;
		display: block;
	}
	div.category-container {
		display: flex;
		justify-content: space-between;
		padding: 1% 10% 4% 10%;
		font-size: 1.3rem;
	}
	p.description {
		font-size: 1.8rem;
		color: black;
		padding-bottom: 1%;
		font-family: 'Alegreya', serif;
	}
`

export default HomePageTechCard;

