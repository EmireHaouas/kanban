import React, { useState } from 'react';
import toggleTheme from '../Props/ToggleTheme/ToggleTheme';
import './Main.css';
import TaskCard from '../Props/TaskCard/TaskCard';
import oval from '../../assets/Imgs/oval.webp';
import oval2 from '../../assets/Imgs/oval2.webp';
import oval3 from '../../assets/Imgs/oval3.webp';
import sidebarIcon from '../../assets/Imgs/icon-show-sidebar.svg';



const Main = ({theme, toggleSideBar}) => { 

    const [board, setBoard] = useState([
        {
          id: 1,
          title: "Projet React",
          columns: {
            todo: [
              { id: 1, title: "Créer le design", completed: false, subtasks: [] },
              { id: 2, title: "Configurer l'environnement", completed: false, subtasks: [] }
            ],
            doing: [
              { id: 3, title: "Coder la homepage", completed: false, subtasks: [] }
            ],
            completed: [
              { id: 4, title: "Installer les dépendances", completed: true, subtasks: [] }
            ]
          }
        }
      ]);
      const todoCount = board.length > 0 ? board[0].columns.todo.length : 0;
      const doingCount = board.length > 0 ? board[0].columns.doing.length : 0;
      const doneCount = board.length > 0 ? board[0].columns.completed.length : 0;





   
    return (
        <>
        <main className={theme ? "mainLight" : "mainDark"}>

          <div className="board">
          <div className="toDo">
             <div className='subTitle_Categories'>
                <img src={oval} alt='oval' className='oval'/>
                <h1 className='categories_Todo'> To Do ({todoCount})</h1>
            </div>
          <TaskCard theme={theme}/>
          <TaskCard theme={theme}/>
          <TaskCard theme={theme}/>
          <TaskCard theme={theme}/>

        </div>

        <div className="doing">
        <div className='subTitle_Categories'>
        <img src={oval2} alt='oval icon' className='oval'/>
        <h1 className='categories_Todo'>Doing ({doingCount}) </h1>
        </div>
        <TaskCard theme={theme}/>
        <TaskCard theme={theme}/>
        <TaskCard theme={theme}/>
        <TaskCard theme={theme}/>
        <TaskCard theme={theme}/>
        <TaskCard theme={theme}/>
        </div>
        <div className="done">
        <div className='subTitle_Categories'>
        <img src={oval3} alt='oval' className='oval'/>
        <h1 className='categories_Todo'>Done ({doneCount})</h1>
        </div>
        <TaskCard theme={theme}/>
        <TaskCard theme={theme}/>
        <TaskCard theme={theme}/>
        <TaskCard theme={theme}/>
        <TaskCard theme={theme}/>
        <TaskCard theme={theme}/>
        <button onClick={toggleSideBar}>Hide Side Bar</button>
        </div>
        </div>
       <img src={sidebarIcon} alt='sidebar icon' className='sidebarIcon' onClick={null}/>
        
      
        </main>
        </>
    )
    };

     export default Main;
