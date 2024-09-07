import React from 'react';
import './App.css';
import {LoadingSpinner} from "./shared/ui/loading-spinner";
import {Button} from "./shared/ui/button/Button";
import {ITab, Tabs} from "./shared/ui/tabs";
import {InfoBlock} from "./shared/ui/info-block";
import {LoadedVideoIcon} from "./shared/icons/LoadedVideoIcon";
import {MarkedVideoIcon} from "./shared/icons/MarkedVideoIcon";

const __mock__tabs: ITab[] = [{
    id: 'monitoring',
    name: "Мониторинг"
},
    {
        id: 'data-uploading',
        name: "Загрузка данных"
    },
    {
        id: 'video-uploading',
        name: "Загрузка видео"
    }, {
        id: 'video-markup',
        name: "Разметка видео"
    }]

function App() {
    return (
        <div className="App">
            <LoadingSpinner/>
            <br/>
            Primary button (not completed, because unused):
            <Button>Войти</Button>
            <br/>
            Tabs:
            <Tabs tabs={__mock__tabs}/>
            <br/>
            Info blocks:
            {/*TODO: replace arrow function with useCallbacked*/}
            <div style={{display: 'flex', gap: 32, width:'auto'}}>
                <InfoBlock icon={<LoadedVideoIcon/>} text="Загружено файлов" afterText="1456"
                           onClick={() => console.log("Info block 1 clicked")}/>
                <InfoBlock icon={<MarkedVideoIcon/>} text="Размечено файлов" afterText="123"
                           onClick={() => console.log("Info block 2 clicked")}/>
            </div>
        </div>
    );
}

export default App;
