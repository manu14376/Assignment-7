import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  background-color: ${props =>
    props.darkMode === true ? '#424242' : '#f4f4f4'};
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding: 20px;
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
`
export const Logo = styled.img`
  height: 40px;
  margin: 20px;
  margin-bottom: 20px;
  align-self: center;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  padding: 3px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  height: 30px;
  border: 1px solid
    ${props => (props.darkMode === true ? '#f9f9f9' : '#3b82f6')};
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#3b82f6')};
  font-family: 'roboto';
  border-radius: 5px;
`
export const ListItem = styled.li`
  list-style: none;
  margin: 5px;
`
export const Profile = styled.img`
  height: 30px;
  width: 30px;
`
export const Button = styled.button`
  background-color: transparent;
  border: 0px;
`
export const LogoutPopupButton = styled.button`
  background-color: ${props =>
    props.confirm !== undefined ? '#3b82f6' : 'transparent'};
  border-radius: 3px;
  padding: 8px;
  color: ${props => (props.confirm === true ? '#f9f9f9' : '#424242')};
  border: ${props =>
    props.confirm !== undefined ? '0px' : '1px solid #424242'};
  margin: 10px;
`
export const LogoutPopupContainer = styled.div`
  height: 120px;
  width: 300px;
  background-color: ${props => (props.darkMode === true ? 'black' : '#f9f9f9')};
  padding: 30px;
  text-align: center;
  border-radius: 5px;
`

export const LogoutHeading = styled.h1`
  font-family: 'roboto';
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#424242')};
  font-size: 16px;
  font-weight: 300;
  margin: 0px;
  margin-bottom: 10px;
`
