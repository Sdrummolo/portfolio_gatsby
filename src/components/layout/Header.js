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
`

const HeaderH1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  padding-top: 320px;

  @media (max-width: 768px) {
    /* padding-top: 270px; */
    font-size: 2.8rem;
  }
`

const HeaderH3 = styled.h3`
  margin-top: 20px;
  margin-bottom: 60px;
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
    bottom: 80px;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
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
      <Link>
        <Button main>About Me</Button>
      </Link>
      <ArrowDown src={arrowDown} alt="Arrow down" />
    </HeaderContainer>
  )
}

export default Header
