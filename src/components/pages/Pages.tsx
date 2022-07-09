import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {PasswordRecovery} from "./password-recovery/PasswordRecovery";
import {Register} from "./register/Register";
import {NewPassword} from "./new-password/NewPassword";
import {TestComponents} from "./test-components/TestComponents";
import {Error404} from "./error404/Error404";
import {Login} from "./login/Login";
import style from "./Pages.module.css"
import {Profile} from "./profile/Profile";

export const PATH = {
    LOGGING: '/login',
    REGISTRATION: '/register',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/password-recovery',
    ENTERING_NEW_PASSWORD: '/new-password',
    TEST_COMPONENTS: '/test',
}

export const Pages = () => {
    return (
        <div className={style.page}>
            <Routes>
                <Route path={PATH.LOGGING} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Register/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.ENTERING_NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.TEST_COMPONENTS} element={<TestComponents/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};
