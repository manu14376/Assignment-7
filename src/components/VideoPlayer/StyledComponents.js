import styled from 'styled-components'

export const VideoContainer = styled.div`
  height: 150px;
  width: 300px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 350px;
`
export const ProfileImage = styled.img`
  height: 30px;
  margin: 10px;
`
export const DescriptionContainer = styled.div``

export const Title = styled.h1`
  font-family: 'roboto';
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#424242')};
  font-size: 16px;
  font-weight: 500;
`
export const Name = styled.p`
  font-family: 'roboto';
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#909090')};
  font-size: 14px;
  margin: 0px;
`
export const ViewsAndOtherDetails = styled.div`
  display: flex;
  width: 100%;
`
export const Title1 = styled.p`
  font-family: 'roboto';
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#424242')};
  font-size: 14px;
  margin-right: 10px;
`
