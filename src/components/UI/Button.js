import styled from "styled-components"

export default styled.button`
  display: inline-block;
  background-color: ${props => (props.main ? "var(--main)" : "var(--white)")};
  color: ${props => (props.main ? "var(--white)" : "var(--light-grey)")};
  padding: 0.8em 3em;
  font-size: 0.9em;
  font-weight: 700;
  border: ${props =>
    props.main ? "solid 1px var(--main)" : "solid 1px var(--light-grey)"};
  border-radius: 30px;
  box-shadow: 0px 8px 15px rgba(98, 98, 98, 0.3);
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  margin-right: ${props => (props.marginRight ? "20px" : "0")};
  transition: all 0.2s ease-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 15px 20px rgba(98, 98, 98, 0.3);
  }
`
