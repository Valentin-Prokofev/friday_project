import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../pages/Pages"
import style from "./Header.module.css"

export const Header = () => {
    return (
        <div>
            <ul className={style.nav}>
                <li><NavLink to={PATH.LOGGING}>login</NavLink></li>
                <li><NavLink to={PATH.REGISTRATION}>registration</NavLink></li>
                <li><NavLink to={PATH.PROFILE}>profile</NavLink></li>
                <li><NavLink to={PATH.PASSWORD_RECOVERY}>password recovery</NavLink></li>
                <li><NavLink to={PATH.ENTERING_NEW_PASSWORD}>entering new password</NavLink></li>
                <li><NavLink to={PATH.TEST_COMPONENTS}>components for test</NavLink></li>
            </ul>
        </div>
    );
};

