import React, { useContext } from 'react';
import styled from 'styled-components';
import ColorCtx from './context';

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
    position: relative;
    clip-path: ${props=>{
      return (props.index % 2 !== 0 ? 
      "polygon(0 0, 80% 0, 80% 100%, 0 100%)" :
      "polygon(20% 0, 100% 0, 100% 100%, 20% 100%)")}}
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
    description: "3D Rendered Side Table with Background",
    text: "New Designs"
  },
  {
    image: "/static/images/stash_box_bg.png",
    description: "3D Rendered Stash Box with Background",
    text: "Reliable Standards"
  },
  {
    image: "/static/images/coffee_table_bg.png",
    description: "3D Rendered Coffee Table with Background",
    text: "Custom Work"
  }
]
const Body = () => {
  const colors = useContext(ColorCtx);
  return (
    <StyledBody colors={colors}>
        {data.map((datum, i) => (
            <StyledSection index={i} colors={colors}>
              <img src={datum.image} alt={datum.description}/>
              <p>{datum.text}</p>
            </StyledSection>
        ))}
    </StyledBody>
  )
}

export default Body;