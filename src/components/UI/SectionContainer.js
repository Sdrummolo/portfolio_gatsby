import styled from "styled-components"

export default styled.div`
  margin-top: 120px;
  text-align: ${props => (props.centerText ? "center" : "none")};
`
