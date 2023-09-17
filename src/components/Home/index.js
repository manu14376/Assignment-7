import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {RiCloseFill} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import Navbar from '../Navbar'
import VideoPlayer from '../VideoPlayer'
import {
  HomeContainer,
  NavbarAndContentContainer,
  ContentContainer,
  CloseButton,
  PopupContainer,
  SearchInput,
  SearchIconContainer,
  SearchContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryBtn,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
} from './StyledComponents'
import reactContext from '../../context/reactContext'

import './index.css'

const apiStatusObj = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    apiStatus: apiStatusObj.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusObj.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedData = data.videos.map(each => ({
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusObj.success,
      })
    } else {
      this.setState({apiStatus: apiStatusObj.failure})
    }
  }

  OnChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderLoader = () => (
    <reactContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <LoaderContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              height="50"
              width="50"
              color={darkMode ? '#f9f9f9' : '#3b82f6'}
            />
          </LoaderContainer>
        )
      }}
    </reactContext.Consumer>
  )

  RetryResults = () => {
    this.getVideosList()
  }

  renderFailure = () => (
    <reactContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <FailureContainer>
            <FailureImage
              src={
                darkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="theme"
            />
            <FailureHeading darkMode={darkMode}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription darkMode={darkMode}>
              We are having some trouble to complete,your request <br /> Please
              try again.
            </FailureDescription>
            <RetryBtn type="button" onClick={this.RetryResults}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </reactContext.Consumer>
  )

  NoVideosFound = () => (
    <reactContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading darkMode={darkMode}>
              No Search results found
            </NoVideosHeading>
            <NoVideosDescription darkMode={darkMode}>
              Try different key words or remove search filter
            </NoVideosDescription>
            <RetryBtn type="button" onClick={this.RetryResults}>
              Retry
            </RetryBtn>
          </NoVideosContainer>
        )
      }}
    </reactContext.Consumer>
  )

  renderResults = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.NoVideosFound()
    }
    return (
      <>
        {videosList.map(each => (
          <VideoPlayer key={each.id} details={each} />
        ))}
      </>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusObj.inProgress:
        return this.renderLoader()
      case apiStatusObj.success:
        return this.renderResults()
      case apiStatusObj.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <reactContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <HomeContainer darkMode={darkMode}>
              <Header />
              <NavbarAndContentContainer>
                <Navbar />
                <ContentContainer>
                  <PopupContainer>
                    <Popup
                      modal
                      trigger={<button type="button">Trigger</button>}
                      className="popup-container"
                    >
                      {close => (
                        <>
                          <CloseButton type="button" onClick={() => close()}>
                            <RiCloseFill />
                          </CloseButton>
                        </>
                      )}
                    </Popup>
                  </PopupContainer>
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      darkMode={darkMode}
                      placeholder="Search"
                      onChange={this.OnChangeInput}
                      value={searchInput}
                    />
                    <SearchIconContainer
                      darkMode={darkMode}
                      onClick={this.getVideosList}
                    >
                      <AiOutlineSearch />
                    </SearchIconContainer>
                  </SearchContainer>
                  {this.renderApiStatus()}
                </ContentContainer>
              </NavbarAndContentContainer>
            </HomeContainer>
          )
        }}
      </reactContext.Consumer>
    )
  }
}

export default Home
