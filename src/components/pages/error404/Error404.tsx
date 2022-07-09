import React from 'react';
import {Link} from "react-router-dom";
import style from "./Error404.module.css"

export const Error404 = () => {
    return (
        <div className={style.error}>
            <h1>Page not found</h1>
            <h2>Error 404</h2>
            <Link to={"/"}/>
        </div>
    );
};
