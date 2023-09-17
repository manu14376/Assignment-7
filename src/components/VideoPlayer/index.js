import ReactPlayer from 'react-player'
import reactContext from '../../context/reactContext'

import {
  VideoContainer,
  VideoDetailsContainer,
  ProfileImage,
  Title,
  Name,
  ViewsAndOtherDetails,
  Title1,
} from './StyledComponents'

const VideoPlayer = props => {
  const {details} = props
  const {
    name,
    profileImageUrl,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = details
  return (
    <reactContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <>
            <ReactPlayer url={thumbnailUrl} controls />
            <VideoDetailsContainer>
              <ProfileImage src={profileImageUrl} alt="nxt watch logo" />
              <div>
                <Title darkMode={darkMode}>{title}</Title>
                <Name darkMode={darkMode}>{name}</Name>
                <ViewsAndOtherDetails>
                  <Title1>{viewCount} views</Title1>
                  <Title1>{publishedAt}</Title1>
                </ViewsAndOtherDetails>
              </div>
            </VideoDetailsContainer>
          </>
        )
      }}
    </reactContext.Consumer>
  )
}

export default VideoPlayer
