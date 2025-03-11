import React from "react";
import './Header.css';
import logoMobile from '../../assets/Imgs/logo-mobile.svg';
import verticalEllipsisIcon from '../../assets/Imgs/icon-vertical-ellipsis.svg';
import addTaskMobile from '../../assets/Imgs/icon-add-task-mobile.svg';
import iconDown from '../../assets/Imgs/icon-chevron-down.svg';
import { useState } from 'react';
import logoLight from '../../assets/Imgs/logo-light.svg';
import logoDark from '../../assets/Imgs/logo-dark.svg';
import iconBoard from '../../assets/Imgs/icon-board.svg';
import iconLightTheme from '../../assets/Imgs/icon-light-theme.svg';
import iconDarkTheme from '../../assets/Imgs/icon-dark-theme.svg';


const Header = () => {


    
    const [theme, setTheme] = useState(true)
    const [isOverlayVisible, setOverlayVisible] = useState(false)
    
    const changeTheme = () => {
        setTheme(!theme)
    }
    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible)
    }


    return (    
        <>
        
        <header className={theme ? "headerLight" : "headerDark"}>
            
            <div className="header_Pack1">
              <img className="logoMobile" src={logoMobile} alt="logo" />
              <img className="logo_BigScreen" src={theme ?  logoDark : logoLight} alt="logo" />
              <h1 className={theme ? 'task_CategoriesLight' : 'task_CategoriesDark'}>Plateform Launch</h1>
              <img onClick={toggleOverlay} className={isOverlayVisible ? 'iconDownOpen' : 'iconDownClose'} src={iconDown} alt="arrow down icon" />
              
            </div>

            <div className="header_Pack2">
              
              <div className="addTask">
              <img className="addTaskMobile" src={addTaskMobile} alt="add task" />
              <p className="p_AddTask">Add New Task</p>
            </div>
            
            <img className="verticalIcon" src={verticalEllipsisIcon} alt="vertical ellipsis" />
            </div>
        
        </header>
        
        
        
        { isOverlayVisible && <div class="overlay">
            <div className="bordCount">
                <p>ALL BOARDS(3)</p>
            </div>
            <div className="allBoards">
                <p>Plateform Launch</p>
                <p>Marketing Plan</p>
                <p>Roadmap</p>
            </div>
           <img className="boardIcon" src={iconBoard} alt="Board Icon" /> <button className="newBoard">+ Create a New Board</button>
            <div className="toggleTheme">
            <img className="iconLightTheme" src={iconLightTheme} alt="Light Theme" />
            <label className="theme-switch">
           
            <input 
            value={theme}
            onChange={changeTheme}
            type="checkbox"/>
            <span className="slider"></span>
            </label>
            <img className="iconDarkTheme" src={iconDarkTheme} alt="Dark Theme" />
            </div>
          
          </div>}
          </>
    );
}
export default Header;