import React from "react"
import styled from "styled-components"
import arrowDown from "../../images/arrow_down.svg"

// Components
import HeaderButton from "../UI/HeaderButton"
import Bold from "../UI/Bold"
import { Link } from "gatsby"

const HeaderContainer = styled.div`
  height: 100vh;
  position: relative;
`

const HeaderH1 = styled.h1`
  font-size: 3.3rem;
  font-weight: 300;
  padding-top: 320px;
`

const HeaderH3 = styled.h3`
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: 400;
`

const NameSpan = styled.span`
  font-weight: 600;
  color: var(--main);
`

const AdjectiveSpan = styled.span`
  font-weight: 600;
  color: var(--dark-grey);
`

const ArrowDown = styled.img`
  width: 22px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -11px;
  cursor: pointer;
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderH1>
        Hi! ✌️, <br />I am <NameSpan>Luigi</NameSpan>
      </HeaderH1>
      <HeaderH3>
        A <Bold>passionate</Bold> web developer
      </HeaderH3>
      <Link>
        <HeaderButton />
      </Link>
      <ArrowDown src={arrowDown} alt="Arrow down" />
    </HeaderContainer>
  )
}

export default Header
