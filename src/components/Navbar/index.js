import {Link} from 'react-router-dom'
import {
  AiFillHome,
  AiFillFire,
  AiFillFileAdd,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {FaFacebook} from 'react-icons/fa'
import reactContext from '../../context/reactContext'
import {
  NavbarContainer,
  IconName,
  TabContainer,
  ContactHeading,
  ContactIcon,
  ContactUsContainer,
  EndLine,
} from './StyledComponents'
import './index.css'

const Navbar = () => (
  <reactContext.Consumer>
    {value => {
      const {darkMode} = value
      const OnChangeActiveTab = () => {}

      return (
        <NavbarContainer darkMode={darkMode}>
          <div>
            <Link to="/" className="link-route">
              <TabContainer as="button" onClick={OnChangeActiveTab}>
                <AiFillHome color="#cbd5e1" size="16" margin="5" />
                <IconName darkMode={darkMode}>Home</IconName>
              </TabContainer>
            </Link>
            <Link to="/trending" className="link-route">
              <TabContainer as="button" onClick={OnChangeActiveTab}>
                <AiFillFire color="#cbd5e1" size="16" margin="5" />
                <IconName darkMode={darkMode}>Trending</IconName>
              </TabContainer>
            </Link>
            <Link to="/gaming" className="link-route">
              <TabContainer as="button" onClick={OnChangeActiveTab}>
                <SiYoutubegaming color="#cbd5e1" size="16" margin="5" />
                <IconName darkMode={darkMode}>Gaming</IconName>
              </TabContainer>
            </Link>
            <Link to="/saved-videos" className="link-route">
              <TabContainer as="button" onClick={OnChangeActiveTab}>
                <AiFillFileAdd color="#cbd5e1" size="16" margin="5" />
                <IconName darkMode={darkMode}>Saved videos</IconName>
              </TabContainer>
            </Link>
          </div>
          <div>
            <ContactHeading darkMode={darkMode}>CONTACT US</ContactHeading>
            <ContactUsContainer>
              <ContactIcon color="#00306e">
                <FaFacebook size="25" />
              </ContactIcon>
              <ContactIcon color="#3b82f6">
                <AiFillTwitterCircle size="26" />
              </ContactIcon>
              <ContactIcon color="#4f46e5">
                <AiFillLinkedin size="26" />
              </ContactIcon>
            </ContactUsContainer>
            <EndLine darkMode={darkMode}>
              Enjoy! Now to see your channels and recommendations!
            </EndLine>
          </div>
        </NavbarContainer>
      )
    }}
  </reactContext.Consumer>
)

export default Navbar
