import {FC} from 'react';
import styles from './Sticker.module.scss'

export interface IStickerProps {

}

export const Sticker: FC<IStickerProps> = () => {
    return (
        <div className={styles['sticker']}>
            <div className={styles['sticker-body']}>
                <h4 className={styles['sticker-title']}>Производится анализ данных</h4>
                <p className={styles['sticker-text']}>Этот процесс может занять значительное время. Можете проверить
                    результат позже или дождаться приглашения на почту</p>
            </div>
            <img className={styles['sticker-image']} src="./WorkerTransparent.png" alt="Worker"/>
        </div>
    );
};
