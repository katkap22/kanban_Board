import React, {useState} from 'react';
import s from './Header.module.css';
import userAvatar from '../../assets/userAvatar.png';


const Header = () => {
    const [isCloseMenu, setIsCloseMenu] = useState(true);

    const handleMenu = () => {
        const newStatusMenu = !isCloseMenu;
        setIsCloseMenu(newStatusMenu);
    }
    return (
        <header className={s.header} style={!isCloseMenu ? {height: '125px'} : null}>
            <div className={s.container}>
                <div className={s.title}>Awesome Kanban Board</div>
                <div className={s.profile}>
                    <div className={s.reg}>
                        <img
                            alt="user's avatar"
                            src={userAvatar}/>

                        {
                            isCloseMenu ?
                                <div className={s.select} onClick={handleMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                         className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </div> :
                                <div className={s.select} onClick={handleMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                         className="bi bi-chevron-up" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                    </svg>
                                </div>
                        }
                    </div>
                    {
                        !isCloseMenu &&
                        <>

                            <div className={s.dropdown}>
                                <div className={s.corner}></div>
                                <div className={s.item}>Profile</div>
                                <div className={s.item}>Log Out</div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;