import React, { useState } from "react";
import "./Header.css";
import logoMobile from "../../assets/Imgs/logo-mobile.svg";
import verticalEllipsisIcon from "../../assets/Imgs/icon-vertical-ellipsis.svg";
import addTaskMobile from "../../assets/Imgs/icon-add-task-mobile.svg";
import iconDown from "../../assets/Imgs/icon-chevron-down.svg";
import logoLight from "../../assets/Imgs/logo-light.svg";
import logoDark from "../../assets/Imgs/logo-dark.svg";
import iconBoard from "../../assets/Imgs/icon-board.svg";

const Header = ({theme, onClick}) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

 

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  
 

  return (
    <>
      <header className={theme ? "headerLight" : "headerDark"}>
        <div className="header_Pack1">
          <img className="logoMobile" src={logoMobile} alt="logo" />
          <img className="logo_BigScreen" src={theme ? logoDark : logoLight} alt="logo" />
          <h1 className={theme ? "task_CategoriesLight" : "task_CategoriesDark"}>Plateform Launch</h1>
          <img onClick={toggleOverlay} className={isOverlayVisible ? "iconDownOpen" : "iconDownClose"} src={iconDown} alt="arrow down icon" />
        </div>

        <div className="header_Pack2">
          <div className="addTask">
            <img className="addTaskMobile" src={addTaskMobile} alt="add task" />
            <p className="p_AddTask">Add New Task</p>
          </div>
          <img className="verticalIcon" src={verticalEllipsisIcon} alt="vertical ellipsis" />
        </div>
      </header>
      

      {isOverlayVisible && (
        <div className="overlay">
          <div className="bordCount">
            <p>ALL BOARDS (3)</p>
          </div>
          <div className="allBoards">
            <p>Plateform Launch</p>
            <p>Marketing Plan</p>
            <p>Roadmap</p>
          </div>
          <img className="boardIcon" src={iconBoard} alt="Board Icon" />
          <button className="newBoard">+ Create a New Board</button>
        </div>
        
       
      )}
    </>
  );
};

export default Header;
