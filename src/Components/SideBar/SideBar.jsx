import React from 'react';
import './SideBar.css';
import lightIcon from '../../assets/Imgs/icon-light-theme.svg';
import darkIcon from '../../assets/Imgs/icon-dark-theme.svg';

const SideBar = ({isSideBarVisible, theme, changeTheme}) => {
    return (
        <div className={isSideBarVisible ? 'sideBarContainerOpen' : 'sideBarContainerClose'}>
        <div className={theme ? 'sideBarLight' : 'sideBarDark'}>
            <p className='titleBoards'>ALL BOARDS (8)</p>
            <ul className='boardsList'>
                <p>Plateform Launch</p>
                <p>Marketing Plan</p>
                <p>Road Map</p>
            </ul>
            <button>+ Create a New Board</button>

            <div className={isSideBarVisible ? 'sideBarContainerOpen' :'sideBarContainerClose'}>
            <img src={darkIcon} alt='dark icon' className='darkIcon'/>
             <label className="switch">
               <input type="checkbox"  onChange={changeTheme}  checked={theme} />
               <span className="slider"></span>
             </label>
             <img src={lightIcon} alt='light icon' className='lightIcon'/>
           </div>
            
        </div>
        </div>
    );
};
export default SideBar;