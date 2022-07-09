import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Pages} from "./components/pages/Pages";

function App() {
    return (
        <div className={"App"}>
            <Header/>
            <Pages/>
        </div>
    );
}

export default App;
