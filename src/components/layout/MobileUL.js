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
      padding: 20px;
      text-align: center;

      a {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.9rem;
        transition: all 0.2s;
        border: 3px solid transparent;

        &:hover {
          color: var(--main);
          border-bottom: 3px solid var(--main);
        }
      }
    }
  }
`

const MobileUL = ({ toggleOpen }) => {
  const ULSpring = useSpring({
    config: config.default,
    height: "100vh",
    from: {
      height: "0vh",
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
