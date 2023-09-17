import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props =>
    props.darkMode === true ? '#181818' : '#f9f9f9'};
`

export const NavbarAndContentContainer = styled.div`
  display: flex;
`
export const ContentContainer = styled.div`
  padding: 20px;
  width: 100%;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 0px;
  font-size: 20px;
`
export const PopupContainer = styled.div`
  height: 200px;
  width: 100%;
`

export const SearchInput = styled.input`
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: transparent;
  border: 1px solid ${props => (props.darkMode === true ? 'white' : 'black')};
`
export const SearchIconContainer = styled.button`
  color: ${props => (props.darkMode === true ? 'white' : 'black')};
  background-color: ${props => (props.darkMode === true ? 'black' : '#e2e8f0')};
  height: 26px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${props => (props.darkMode === false ? '#313131' : '#f4f4f4')};
`
export const SearchContainer = styled.div`
  display: flex;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#3b82f6')};
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const FailureImage = styled.img`
  height: 300px;
  width: 400px;
  margin: 10px;
`

export const FailureHeading = styled.h1`
  font-size: 25px;
  font-family: 'roboto';
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#424242')};
`

export const FailureDescription = styled.p`
  font-size: 20px;
  font-family: 'roboto';
  color: ${props => (props.darkMode === true ? '#424242' : '#d7dfe9')};
  line-height: 2;
`

export const RetryBtn = styled.button`
  color: white;
  background-color: #4f46e5;
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
  border: 0px;
  border-radius: 3px;
  font-family: 'roboto';
  font-size: 12px;
  font-weight: 500;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100%;
`
export const NoVideosImage = styled.img`
  height: 250px;
  width: 250px;
  margin: 10px;
`
export const NoVideosHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.darkMode === true ? '#f9f9f9' : '#424242')};
  font-family: 'roboto';
  margin: 0px;
`
export const NoVideosDescription = styled.p`
  font-size: 16px;
  color: ${props => (props.darkMode === true ? '#cccccc' : '#424242')};
  font-family: 'roboto';
`
export const RouteImageContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: ${props =>
    props.darkMode === true ? '#000000' : '#f4f4f4'};
`
