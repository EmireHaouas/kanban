import React from 'react';
import './TaskCard.css';



const TaskCard = ({theme}) => {
    return (
        <>
        <div className={theme ? 'cardLight' : 'cardDark'}>
        <h4 className={theme ? 'title_TaskLight' : 'tittle_TaskDark' }>Build UI for onboarding flow</h4>
        <p className={theme ? 'subtasks_CountLight' : 'subtasks_CountDark' }>0 of 3 substaks</p>
        </div>
        </>
    );
};

export default TaskCard;