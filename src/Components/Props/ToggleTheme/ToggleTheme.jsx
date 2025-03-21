import React from "react";
import iconLightTheme from '../../../assets/Imgs/icon-light-theme.svg';
import iconDarkTheme from '../../../assets/Imgs/icon-dark-theme.svg';
import './ToggleTheme.css';



const toggleTheme =  ({onClick}) => {

  
    
    return (
        <>
        <button onClick={onClick}>Change theme</button>
                </>
    );
};

export default toggleTheme; 
