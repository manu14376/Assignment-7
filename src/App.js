import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import reactContext from './context/reactContext'

// Replace your code here
class App extends Component {
  state = {
    darkMode: false,
    activeTab: 'HOME',
  }

  toggleTheme = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  ChangeActiveTab = value => {
    this.setState({activeTab: value})
  }

  render() {
    const {darkMode, activeTab} = this.state
    console.log(activeTab)
    return (
      <reactContext.Provider
        value={{
          darkMode,
          activeTab,
          toggleTheme: this.toggleTheme,
          ChangeActiveTab: this.ChangeActiveTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
        </Switch>
      </reactContext.Provider>
    )
  }
}

export default App
