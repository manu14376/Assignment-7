import styled from 'styled-components'

export const NavbarContainer = styled.div`
  height: 90vh;
  width: 200px;
  background-color: ${props =>
    props.darkMode === true ? '#424242' : '#f4f4f4'};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`
export const IconName = styled.p`
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#424242')};
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
  margin-top: 3px;
  margin-left: 5px;
  padding: 0px;
  font-family: 'roboto';
`

export const ContactHeading = styled.h1`
  font-family: 'roboto';
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#424242')};
  font-size: 16px;
`
export const ContactIcon = styled.div`
  background-color: white;
  color: ${props => props.color};
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border: 0px;
  margin: 5px;
`
export const ContactUsContainer = styled.div`
  display: flex;
  text-decoration: none;
`
export const EndLine = styled.p`
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#424242')};
  font-family: 'roboto';
  font-size: 14px;
`
