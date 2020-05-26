import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import { Link } from "gatsby"
import arrowDown from "../../images/arrow_down_black.svg"

// Components
import Button from "../UI/Button"
import WordsFading from "../UI/WordsFading"

const AnimatedButton = animated(Button)

const HeaderContainer = styled.div`
  height: 100vh;
  min-height: -webkit-fill-available;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media only screen and (min-device-width: 411px) and (max-device-width: 840px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    height: 180vh;
  }
`

const HeaderH1 = styled(animated.h1)`
  font-size: 4rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeaderH3 = styled(animated.h3)`
  margin-top: 1rem;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
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
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    padding-bottom: 10px;
  }

  /* @media (max-width: 576px) {
    display: none;
  } */
  /* Remove arrow on landscape mobile */
  @media only screen and (min-device-width: 411px) and (max-device-width: 840px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    display: none;
  }
`

const Header = () => {
  const H1Spring = useSpring({
    config: config.default,
    delay: 200,
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(-50px)" },
  })

  const H3Spring = useSpring({
    config: config.default,
    delay: 300,
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(-50px)" },
  })

  const ButtonSpring = useSpring({
    config: config.default,
    transform: "translateX(0px)",
    opacity: 1,
    from: { opacity: 0, transform: "translateX(-50px)" },
  })

  return (
    <HeaderContainer id="header">
      <HeaderH1 style={H1Spring}>
        Hi
        <span role="img" aria-label="Cool emoji">
          ✌️
        </span>
        , <br />I am <NameSpan>Luigi</NameSpan>
      </HeaderH1>
      <HeaderH3 style={H3Spring}>
        A <WordsFading /> web developer
      </HeaderH3>
      <Link to="#about">
        <AnimatedButton main style={ButtonSpring}>
          About Me
        </AnimatedButton>
      </Link>
      <Link to="#about">
        <ArrowDown src={arrowDown} alt="Scroll down" />
      </Link>
    </HeaderContainer>
  )
}

export default Header
