import {FC} from 'react';
import {Container} from "../../ui/container/Container";
import styles from './Recomendations.module.scss';
import {Sticker} from "../Sticker/Sticker";

export interface IRecomendationsProps {

}

export const Recommendations: FC<IRecomendationsProps> = () => {
    return (
        <Container className={styles['recommendations']}>
            <h3 className={styles['recommendations-title']}>Рекомендации</h3>
            <p className={styles['recommendations-text']}>Система РСМП анализирует данные и видео вашего производства и
                дает рекомендации о повышении производительности
            </p>
            <Sticker />
        </Container>
    );
};