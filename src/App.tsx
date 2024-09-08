import React from 'react';
import './App.css';
import {LoadingSpinner} from "./shared/ui/loading-spinner";
import {Button} from "./shared/ui/button/Button";
import {ITab, Tabs} from "./shared/ui/tabs";
import {InfoBlock} from "./shared/ui/info-block";
import {LoadedVideoIcon} from "./shared/icons/LoadedVideoIcon";
import {MarkedVideoIcon} from "./shared/icons/MarkedVideoIcon";
import {Graphic, IGraphicPair} from "./shared/widgets/Graphic/Graphic";
import {Header} from "./shared/widgets/Header/Header";
import {Container} from "./shared/ui/container/Container";
import {Recommendations} from "./shared/widgets/Recomendations/Recommendations";
import {Navigation} from "./shared/widgets/Navigation/Navigation";
import useFetch from "./shared/hooks/useFetch";

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
    }];

export interface IInfoBlockResponse {
    loadedFiles: number,
    markedFiles: number
}

function App() {
    const {data: infoBlocks__mock__, isLoading: isInfoBlocksLoading} = useFetch<IInfoBlockResponse>('/info-blocks');
    const {data: graphics__mock__, isLoading: isGraphinsLoading} = useFetch<IGraphicPair[]>('/graphics-data');
    return (
        <div className="App">
            <div style={{margin: '16px'}}>
                <Navigation/>
            </div>
            <div style={{maxWidth: 960, display: 'flex', flexDirection: "column", gap: 32, margin: '0 auto'}}>
                <Header/>
                <Tabs tabs={__mock__tabs}/>
                <div style={{display: 'flex', gap: 32, width: 'auto'}}>
                    <InfoBlock isLoading={isInfoBlocksLoading} icon={<LoadedVideoIcon/>} text="Загружено файлов"
                               value={infoBlocks__mock__?.loadedFiles}/>
                    <InfoBlock isLoading={isInfoBlocksLoading} icon={<MarkedVideoIcon/>} text="Размечено файлов"
                               value={infoBlocks__mock__?.markedFiles}/>
                </div>
                <Graphic data={graphics__mock__ || []} isLoading={isGraphinsLoading}/>
                <Recommendations/>
            </div>
        </div>
    );
}

export default App;
