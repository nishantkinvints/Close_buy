import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/logo.png';

const Header = () => {
    const [open_menu, setOpen_menu] = useState("false");

    const openMenu = () => {
        setOpen_menu(!open_menu);
    }

    useEffect(() => {
        document.body.classList.toggle('cm_overflow', !open_menu);
    },[open_menu])

    return(
        <div className="main-header">
            <div className="container">
                <div className="header-wrapper">
                    <header>
                        <div className="menu-main">
                            <a href="#0">
                                <img src={Logo} className="logo_img" alt="logo" />
                            </a>
                        </div>
                        <div className="menu">
                            <ul className={open_menu ? "menu_inner" : "menu_inner show"}>
                                <li className={open_menu ? "last" : "last open"}>
                                    <a href="#0">
                                        <span className="anim">Home</span>
                                    </a>
                                </li>
                                <li className={open_menu ? "" : "open"}>
                                    <a href="#0">
                                        <span className="anim">Feature</span>
                                    </a>
                                </li>
                                <li className={open_menu ? "" : "open"}>
                                    <a href="#0">
                                        <span className="anim">Explore</span> 
                                    </a>                         
                                </li>   
                                <li className={open_menu ? "" : "open"}>
                                    <a href="#0">
                                        <span className="anim">Faq</span>
                                    </a>
                                </li>
                                <li className={open_menu ? "" : "open"}>
                                    <a href="#0">
                                        <span className="anim">Contact</span>
                                    </a>
                                </li>
                            </ul>

                            <div id="toggle" onClick={openMenu} className={open_menu ? "" : "on"}>
                                <div className="one"></div>
                                <div className="two"></div>
                                <div className="three"></div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </div>  
    );
}

export default Header;