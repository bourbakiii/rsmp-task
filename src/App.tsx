import React from 'react';
import {Navigation} from "./shared/widgets/Navigation/Navigation";
import {HomePage} from "./pages/HomePage/HomePage";
import styles from './App.module.scss';

export interface IInfoBlockResponse {
    loadedFiles: number,
    markedFiles: number
}

function App() {

    return (
        <div className={styles['App']}>
            <Navigation/>
            <HomePage/>
        </div>
    );
}

export default App;
