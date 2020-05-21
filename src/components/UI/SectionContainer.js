import styled from "styled-components"

export default styled.div`
  margin-top: 150px;
  text-align: ${props => (props.centerText ? "center" : "none")};
`
