import React from "react"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"
import styled from "styled-components"

const MobileULContainer = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: var(--white);
  display: flex;
  align-items: center;

  ul {
    margin: auto;

    li {
      padding: 20px 0;
      text-align: center;

      a {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.9rem;
        transition: all 0.2s;

        &:hover {
          color: var(--main);
        }
      }
    }
  }
`

const MobileUL = ({ toggleOpen, isOpen }) => {
  const ULSpring = useSpring({
    config: config.default,
    from: {
      height: isOpen ? "0" : "100vh",
    },
    to: {
      height: isOpen ? "100vh" : "0",
      opacity: isOpen ? 1 : 0,
    },
  })

  return (
    <MobileULContainer style={ULSpring}>
      <ul>
        <li>
          <Link to="#about" onClick={toggleOpen}>
            About
          </Link>
        </li>
        <li>
          <Link to="#portfolio" onClick={toggleOpen}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="#contact" onClick={toggleOpen}>
            Contact
          </Link>
        </li>
      </ul>
    </MobileULContainer>
  )
}

export default MobileUL
