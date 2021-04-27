import {useContext} from 'react';
import styled from 'styled-components';
import { faEnvelope, faChair, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColorCtx from './context';

const StyledHeader  = styled.header`
  width: 67vw;
  height: 10vh;
  display: flex;
  place-items: center;
  justify-content: space-between;

  * {
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    color: ${props=>props.colors.brown};
    font-family: Martel;
  }

  nav {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    width: auto;

    a {
      color: ${props=>props.colors.lightBrown};
    }
    * {
      margin: 0 .5em;
    }
  }
`;

const navIcons = [
  {icon: faStore, url: "store"},
  {icon: faChair, url: "gallery"},
  {icon: faEnvelope, url: "contact"}
]

const Header = () => {
  const colors = useContext(ColorCtx);
  return (
    <StyledHeader colors={colors}>
      <h1 className="wordmark">Dalton Furniture</h1>
      <nav>
        {navIcons.map(item=><a href={item.url} key={item.url}><FontAwesomeIcon icon={item.icon} /></a>)}
      </nav>
    </StyledHeader>
  )
}

export default Header;