import React from "react";
import './Header.css';
import logoMobile from '../../assets/Imgs/logo-mobile.svg';
import verticalEllipsisIcon from '../../assets/Imgs/icon-vertical-ellipsis.svg';
import addTaskMobile from '../../assets/Imgs/icon-add-task-mobile.svg';
import iconDown from '../../assets/Imgs/icon-chevron-down.svg';
import { useState } from 'react';


const Header = () => {


    
    const [theme, setTheme] = useState(true)
    
    const changeTheme = () => {
        setTheme(!theme)
    }


    return (    
        <>
        <header className={theme ? "headerLight" : "headerDark"}>
            <div className="header_Pack1">
              <img className="logoMobile" src={logoMobile} alt="logo" />
              <h1 className={theme ? 'task_CategoriesLight' : 'task_CategoriesDark'}>Plateform Lunch</h1>
              <img className="iconDown" src={iconDown} alt="arrow down icon" />
            </div>
            <div className="header_Pack2">
            
              <img className="addTaskMobile" src={addTaskMobile} alt="add task" />
            
            <img className="verticalIcon" src={verticalEllipsisIcon} alt="vertical ellipsis" />
            </div>
        </header>
        <div>
            <button onClick={changeTheme}>{theme ? 'light mode' : 'dark mode'}</button>
        </div>
        </>
    );
}
export default Header;