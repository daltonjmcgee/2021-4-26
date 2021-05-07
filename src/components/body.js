import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ColorCtx from './context';
import {landingAnimation} from './animation';
import HomePageSection from './homePageSection';

const StyledBody = styled.main`
  width: fit-content;
  `;

const data = [
  {
    image: "/static/images/side_table_bg.png",
    overlayImage: "/static/images/side_table_no_bg.png",
    description: "3D Rendered Side Table with Background",
    text: "New Designs",
    link: 'gallery',
    primaryButton: "Shop",
  },
  {
    image: "/static/images/stash_box_table_bg.png",
    overlayImage: "/static/images/stash_box_no_bg.png",
    description: "3D Rendered Stash Box with Background",
    text: "Reliable Standards",
    link: "store",
    primaryButton: "Shop",
  },
  {
    image: "/static/images/coffee_table_bg.png",
    overlayImage: "/static/images/coffee_table_no_bg.png",
    tertiaryImage: "/static/images/coffee_table_wireframe.png",
    description: "3D Rendered Coffee Table",
    text: "Custom Work",
    link: "commission",
    primaryButton: "Reach Out",
  }
]
const Body = () => {
  const colors = useContext(ColorCtx);

  useEffect(()=>{
    landingAnimation();
  })

  return (
    <StyledBody colors={colors}>
        {data.map((datum, i) => (
        <HomePageSection key={i} index={i} datum={datum} colors={colors} />
        ))}
    </StyledBody>
  )
}

export default Body;