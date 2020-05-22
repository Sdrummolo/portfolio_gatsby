import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import logo from "../../images/dp_lighblue_textright_sm.png"

const StyledLogo = styled(animated.img)`
  position: fixed;
  top: 10px;
  max-height: 40px;
  z-index: 200;
`

const NavLogo = () => {
  const NavLogoSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
  return (
    <Link to="#header">
      <StyledLogo
        src={logo}
        alt="Di Paolo Web Developer"
        style={NavLogoSpring}
      />
    </Link>
  )
}

export default NavLogo
