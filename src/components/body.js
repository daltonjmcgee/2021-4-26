import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ColorCtx from './context';
import * as gsap from 'gsap';

const StyledBody = styled.main`
  width: fit-content;
  `;

const StyledSection = styled.section`
  position: relative;
  width: 800px;
  height: 450px;
  margin-bottom: 3rem;
  left: ${props=>{
    return (props.index % 2 === 0 ? "-10%;" : "10%;")}
  }

  img {
    opacity: 85%;
  }

  img.primary {
    position: relative;
    clip-path: ${props=>{
      return (props.index % 2 !== 0 ? 
      "polygon(0 0, 80% 0, 80% 100%, 0 100%)" :
      "polygon(20% 0, 100% 0, 100% 100%, 20% 100%)")}}
  }

  img.overlay {
    position: absolute;
    top:0;
    left:0;
  }

  img.tertiary {
    position: absolute;
    height: 100%;
    top: .5%;
    left: 24.5%;
  }

  p {
    width: 200px;
    font-size: 3rem;
    line-height: 3rem;
    position: absolute;
    top: 29%;
    left: 40%;
    font-family: "Martel";
    color: ${props=>props.colors.pink};
  }
  
`;
const data = [
  {
    image: "/static/images/side_table_bg.png",
    overlayImage: "/static/images/side_table_no_bg.png",
    description: "3D Rendered Side Table with Background",
    text: "New Designs"
  },
  {
    image: "/static/images/stash_box_table_bg.png",
    overlayImage: "/static/images/stash_box_no_bg.png",
    description: "3D Rendered Stash Box with Background",
    text: "Reliable Standards"
  },
  {
    image: "/static/images/coffee_table_bg.png",
    overlayImage: "/static/images/coffee_table_no_bg.png",
    tertiaryImage: "/static/images/coffee_table_wireframe.png",
    description: "3D Rendered Coffee Table",
    text: "Custom Work"
  }
]
const Body = () => {
  const colors = useContext(ColorCtx);

  useEffect(()=>{
    return null;
  })

  return (
    <StyledBody colors={colors}>
        {data.map((datum, i) => (
            <StyledSection key={i} index={i} colors={colors}>
              <img className="primary" src={datum.image} alt={datum.description + "with background"}/>
              <img className="overlay" src={datum.overlayImage} alt={datum.description + "without background"} />
              {datum.tertiaryImage ? 
                <img className="tertiary" src={datum.tertiaryImage} alt={datum.description + "wireframe"} /> :
                null
              }
              <p>{datum.text}</p>
            </StyledSection>
        ))}
    </StyledBody>
  )
}

export default Body;