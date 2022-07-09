import React from 'react';
import {SuperButton} from "../../../common/superButton/SuperButton";
import SuperInputText from "../../../common/superInputText/SuperInputText";
import SuperCheckbox from "../../../common/superCheckbox/SuperCheckbox";
import style from "./TestComponents.module.css"

export const TestComponents = () => {
    return (
        <div className={style.test_components}>
            <div><SuperButton>Click Me</SuperButton></div>
            <div><SuperInputText/></div>
            <div><SuperCheckbox/></div>
        </div>
    );
};
