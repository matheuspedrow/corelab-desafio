import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.buttonBackgroundColor};
  padding: 10px 40px;
  margin: 10px 170px; 
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  color: ${props => props.theme.black};
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;
  margin-top: 20px;
  max-width: 250px;
  max-height: 50px;
  position: relative;
  
  :hover {
    background-color: ${props => props.theme.primaryHover};
  }
`

export default Button