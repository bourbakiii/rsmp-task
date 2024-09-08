import {Header} from "../../shared/widgets/Header/Header";
import {ITab, Tabs} from "../../shared/ui/tabs";
import styles from "./HomePage.module.scss";
import {InfoBlock} from "../../shared/ui/info-block";
import {LoadedVideoIcon} from "../../shared/icons/LoadedVideoIcon";
import {MarkedVideoIcon} from "../../shared/icons/MarkedVideoIcon";
import {Graphic, IGraphicPair} from "../../shared/widgets/Graphic/Graphic";
import {Recommendations} from "../../shared/widgets/Recomendations/Recommendations";
import useFetch from "../../shared/hooks/useFetch";
import {IInfoBlockResponse} from "../../App";


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
export const HomePage = () => {
    const {data: infoBlocks__mock__, isLoading: isInfoBlocksLoading} = useFetch<IInfoBlockResponse>('/info-blocks');
    const {data: graphics__mock__, isLoading: isGraphinsLoading} = useFetch<IGraphicPair[]>('/graphics-data');
    return (
        <div className={styles['home-page']}>
            <Header/>
            <Tabs tabs={__mock__tabs}/>
            <div className={styles['info-blocks']}>
                <InfoBlock className={styles['info-blocks-item']} isLoading={isInfoBlocksLoading} icon={<LoadedVideoIcon/>} text="Загружено файлов"
                           value={infoBlocks__mock__?.loadedFiles}/>
                <InfoBlock className={styles['info-blocks-item']} isLoading={isInfoBlocksLoading} icon={<MarkedVideoIcon/>} text="Размечено файлов"
                           value={infoBlocks__mock__?.markedFiles}/>
            </div>
            <Graphic data={graphics__mock__ || []} isLoading={isGraphinsLoading}/>
            <Recommendations/>
        </div>
    );
};
