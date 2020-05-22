import React from "react"
import styled from "styled-components"
import arrowDown from "../../images/arrow_down.svg"

// Components
import Button from "../UI/Button"
import Bold from "../UI/Bold"
import { Link } from "gatsby"

const HeaderContainer = styled.div`
  height: 100vh;
  position: relative;
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    height: 90vh;
  }

  @media only screen and (min-device-width: 411px) and (max-device-width: 840px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    height: 180vh;
  }
`

const HeaderH1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  padding-top: 20rem;

  @media (max-width: 768px) {
    padding-top: 16rem;
    font-size: 2.8rem;
  }
`

const HeaderH3 = styled.h3`
  margin-top: 1rem;
  margin-bottom: 4rem;
  font-size: 1.3rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
`

const NameSpan = styled.span`
  font-weight: 600;
  color: var(--main);
`

const ArrowDown = styled.img`
  width: 22px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -11px;
  cursor: pointer;

  @media (max-width: 576px) {
    bottom: 50px;
    width: 18px;
    margin-left: -9px;
  }

  /* Remove arrow on landscape mobile */
  @media only screen and (min-device-width: 411px) and (max-device-width: 840px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    display: none;
  }
`

const Header = () => {
  return (
    <HeaderContainer id="header">
      <HeaderH1>
        Hi
        <span role="img" aria-label="Cool emoji">
          ✌️
        </span>
        , <br />I am <NameSpan>Luigi</NameSpan>
      </HeaderH1>
      <HeaderH3>
        A <Bold>passionate</Bold> web developer
      </HeaderH3>
      <Link to="#about">
        <Button main>About Me</Button>
      </Link>
      <Link to="#about">
        <ArrowDown src={arrowDown} alt="Arrow down" />
      </Link>
    </HeaderContainer>
  )
}

export default Header
