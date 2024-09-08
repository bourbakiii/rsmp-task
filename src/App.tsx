import React from 'react';
import './App.css';
import {LoadingSpinner} from "./shared/ui/loading-spinner";
import {Button} from "./shared/ui/button/Button";
import {ITab, Tabs} from "./shared/ui/tabs";
import {InfoBlock} from "./shared/ui/info-block";
import {LoadedVideoIcon} from "./shared/icons/LoadedVideoIcon";
import {MarkedVideoIcon} from "./shared/icons/MarkedVideoIcon";
import {Graphic} from "./shared/widgets/Graphic/Graphic";
import {Header} from "./shared/widgets/Header/Header";
import {Container} from "./shared/ui/container/Container";
import {Recommendations} from "./shared/widgets/Recomendations/Recommendations";
import {Navigation} from "./shared/widgets/Navigation/Navigation";

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
            <div style={{margin: '16px'}}>
                <Navigation/>
            </div>
            <div style={{maxWidth: 960, display: 'flex', flexDirection: "column", gap: 32, margin: '0 auto'}}>
                <Header/>
                <Tabs tabs={__mock__tabs}/>
                {/*TODO: replace arrow function with useCallbacked*/}
                <div style={{display: 'flex', gap: 32, width: 'auto'}}>
                    <InfoBlock icon={<LoadedVideoIcon/>} text="Загружено файлов" afterText="1456"/>
                    <InfoBlock icon={<MarkedVideoIcon/>} text="Размечено файлов" afterText="123"/>
                </div>
                <Graphic/>
                <Recommendations/>
            </div>
            <hr/>
            <br/>
            Ui kit
            <LoadingSpinner/>
            <Button>Войти</Button>
        </div>
    );
}

export default App;
