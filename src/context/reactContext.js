import React from 'react'

const reactContext = React.createContext({
  darkMode: false,
  toggleTheme: () => {},
  activeTab: 'HOME',
  ChangeActiveTab: () => {},
})

export default reactContext
