import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  Container,
  LoginCard,
  Form,
  Logo,
  Label,
  Input,
  CheckboxContainer,
  ParaEl,
  Button,
  ImageContainer,
  ErrMsg,
} from './StyledComponents'

import reactContext from '../../context/reactContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
    showpswd: false,
  }

  OnChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  OnChangePassword = event => {
    this.setState({password: event.target.value})
  }

  OnClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      const errorMsg = data.error_msg
      this.setState({showError: true, errorMsg})
    }
  }

  ChangeInShowPswd = () => {
    this.setState(prevState => ({showpswd: !prevState.showpswd}))
  }

  render() {
    const {username, password, showError, errorMsg, showpswd} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <reactContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <Container darkMode={darkMode}>
              <LoginCard darkMode={darkMode}>
                <ImageContainer className="img-container">
                  <Logo
                    src={
                      darkMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </ImageContainer>
                <Form onSubmit={this.OnClickLogin}>
                  <Label htmlFor="username" darkMode={darkMode}>
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    placeholder="Username"
                    onChange={this.OnChangeUsername}
                    value={username}
                    id="username"
                    darkMode={darkMode}
                  />
                  <Label htmlFor="password" darkMode={darkMode}>
                    PASSWORD
                  </Label>
                  <Input
                    type={showpswd ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={this.OnChangePassword}
                    value={password}
                    id="password"
                    darkMode={darkMode}
                  />
                  <CheckboxContainer>
                    <Input type="checkbox" onChange={this.ChangeInShowPswd} />
                    <ParaEl darkMode={darkMode}>Show Password</ParaEl>
                  </CheckboxContainer>
                  <Button type="submit">Login</Button>
                  {showError && <ErrMsg>*{errorMsg}</ErrMsg>}
                </Form>
              </LoginCard>
            </Container>
          )
        }}
      </reactContext.Consumer>
    )
  }
}

export default Login
