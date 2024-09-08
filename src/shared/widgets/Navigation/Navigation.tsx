import styles from './Navigation.module.scss';
import {BookIcon} from "../../icons/BookIcon";

export const Navigation = () => {
    return (
        <div className={styles['navigation']}>
            <img className={styles['navigation-logotype']} src="/logotype.png" alt="РСМП Логотип"/>
            <button className={styles['navigation-projects-button']}>
                <BookIcon className={styles['navigation-projects-icon']}/>
                <span className={styles['navigation-projects-text']}>Проекты</span>
            </button>
            <div className={styles['navigation-account']}>
                <span className={styles['navigation-account-name']}>Константинопольский.К</span>
                <img className={styles['navigation-account-image']} src="/account-image.png"
                     alt="Константинопольский.К"/>
            </div>
        </div>
    );
};
