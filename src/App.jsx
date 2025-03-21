import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import ToggleTheme from './Components/Props/ToggleTheme/ToggleTheme'
import Main from './Components/Main/Main'
import TaskCard from './Components/Props/TaskCard/TaskCard'
import SideBar from './Components/SideBar/SideBar'

const  App = () => {
  const [theme, setTheme] = useState(true);
  const [isSideBarVisible, setSideBarVisible] = useState(true);


  const changeTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme.toString());
  }



  const toggleSideBar = () => {
    setSideBarVisible(!isSideBarVisible);
}
 
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setTheme(theme === 'true')
}, [])


  return (

    <>
 
    <Header theme={theme} onClick={changeTheme} />
    <div className="test">
    <Main theme={theme} toggleSideBar={toggleSideBar} />
    <SideBar theme={theme} changeTheme={changeTheme} isSideBarVisible={isSideBarVisible} />
  </div>
    </>

    
  )
}

export default App
