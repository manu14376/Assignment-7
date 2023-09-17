import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.darkMode === true ? 'black' : ' #f9f9f9'};
`
export const LoginCard = styled.div`
  height: 400px;
  width: 350px;
  background-color: ${props =>
    props.darkMode === true ? '#181818' : ' #f9f9f9'};
  padding: 20px;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 0px 8px 0.5px #475569;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px;
`

export const Logo = styled.img`
  height: 40px;
  margin: 10px;
  margin-bottom: 20px;
  align-self: center;
`

export const Label = styled.label`
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#424242')};
  font-family: roboto;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #64748b;
  padding: 8px;
  margin-bottom: 10px;
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#424242')};
`
export const CheckboxContainer = styled.div`
  display: flex;
  margin: 0px;
`

export const ParaEl = styled.p`
  margin: 0px;
  margin-left: 5px;
  font-size: 14px;
  font-family: 'roboto';
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#424242')};
`
export const Button = styled.button`
  background-color: #4f46e5;
  padding: 6px;
  border: 0px;
  color: white;
  font-family: 'roboto';
  border-radius: 5px;
`

export const ErrMsg = styled.p`
  color: red;
  font-family: 'roboto';
  margin: 0px;
  font-size: 12px;
`
