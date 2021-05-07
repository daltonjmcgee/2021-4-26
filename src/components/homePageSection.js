import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 800px;
  height: 450px;
  margin-bottom: 3rem;
  left: ${props => {
    return (props.index % 2 === 0 ? "-10%;" : "10%;")
  }
  }

  &:hover {
    cursor: pointer;
  }

  img {
    opacity: 85%;
  }

  img.primary {
    position: relative;
    clip-path: ${props => {
    return (props.index % 2 !== 0 ?
      "polygon(0 0, 80% 0, 80% 100%, 0 100%)" :
      "polygon(20% 0, 100% 0, 100% 100%, 20% 100%)")
  }}
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
    user-select: none;
    width: 300px;
    font-size: 3rem;
    line-height: 3rem;
    position: absolute;
    top: 29%;
    ${props => props.index % 2 === 0 ? "left: 40%;" : "right: 40%;"}
    ${props => props.index % 2 === 0 ? "text-align: left;" : "text-align: right;"}
    font-family: "Martel";
    color: ${props => props.colors.pink};
  }
  
`;

const StyledButtonDiv = styled.div`
  position: absolute;
  bottom: calc(50% - 5em);
  ${props => props.index % 2 === 0 ? "right: 0" : "left: 0"};
  clip-path: ${props=> props.index % 2 === 0 ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" : 
  "polygon(0 0, 0 0, 0 100%, 0 100%)"};
`


const HomePageSection = (props) => {
  const datum = props.datum;

  return (
    <StyledSection index={props.index} colors={props.colors}>
      <img className="primary" src={datum.image} alt={datum.description + "with background"} />
      <img className="overlay" src={datum.overlayImage} alt={props.description + "without background"} />
      {datum.tertiaryImage ?
        <img className="tertiary" src={datum.tertiaryImage} alt={datum.description + "wireframe"} /> :
        null
      }
      <p>{datum.text}</p>
      <StyledButtonDiv index={props.index}>
        <HomePageButton color={props.colors.pink} bgColor={props.colors.brown} text={datum.primaryButton}/>
        <HomePageButton color={props.colors.brown} text="Learn More"/>
      </StyledButtonDiv>
    </StyledSection>
  )
}

const StyledButton = styled.button`
  font-family: "Roboto";
  character-spacing:0%;
  width: 6em;
  height: 3rem;
  margin-bottom: 1em;
  font-size: 1.5rem;
  display: block;
  box-sizing: border-box;
  color: ${props=>props.color};
  background: ${props=>props.bgColor ? props.bgColor : "transparent"};
  border: 4px solid ${props=>props.bgColor};
`;

const HomePageButton = (props) => {
  console.log(props.bgColor)
  return (
    <StyledButton color={props.color} bgColor={props.bgColor} index={props.index}>{props.text}</StyledButton>
  )
}
export default HomePageSection;

