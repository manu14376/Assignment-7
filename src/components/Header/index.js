import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'

import reactContext from '../../context/reactContext'

import {
  HeaderContainer,
  LogoutButton,
  Logo,
  IconContainer,
  ListItem,
  Profile,
  Button,
  LogoutPopupButton,
  LogoutPopupContainer,
  LogoutHeading,
} from './StyledComponents'

const Header = props => {
  const {history} = props
  const Logout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const ChangeRouteToHome = () => {
    history.replace('/')
  }
  const renderHeader = () => (
    <reactContext.Consumer>
      {value => {
        const {darkMode, toggleTheme} = value
        const ChangeMode = () => {
          toggleTheme()
        }
        return (
          <HeaderContainer darkMode={darkMode}>
            <Link to="/">
              <nav>
                <Logo
                  src={
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                  onClick={ChangeRouteToHome}
                />
              </nav>
            </Link>
            <IconContainer>
              <ListItem>
                <nav>
                  <Button type="button" onClick={ChangeMode}>
                    {darkMode ? (
                      <BiSun size="25" color="white" />
                    ) : (
                      <FaMoon size="25" color="black" />
                    )}
                  </Button>
                </nav>
              </ListItem>
              <ListItem>
                <nav>
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </nav>
              </ListItem>
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" darkMode={darkMode}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <LogoutPopupContainer darkMode={darkMode}>
                    <LogoutHeading darkMode={darkMode}>
                      Are you sure,you want to logout?
                    </LogoutHeading>
                    <LogoutPopupButton
                      type="button"
                      darkMode={darkMode}
                      onClick={() => close()}
                    >
                      Cancel
                    </LogoutPopupButton>
                    <LogoutPopupButton
                      type="button"
                      confirm
                      darkMode={darkMode}
                      onClick={Logout}
                    >
                      Confirm
                    </LogoutPopupButton>
                  </LogoutPopupContainer>
                )}
              </Popup>
            </IconContainer>
          </HeaderContainer>
        )
      }}
    </reactContext.Consumer>
  )
  return renderHeader()
}

export default withRouter(Header)
