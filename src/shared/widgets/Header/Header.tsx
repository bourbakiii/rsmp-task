import {FC} from 'react';
import styles from './Header.module.scss';
import {PencilIcon} from "../../icons/PencilIcon";

export interface IHeaderProps {

}

export const Header: FC<IHeaderProps> = () => {
    return (
        <section className={styles['header']}>
            <div className={styles['header-head']}>
                <h1 className={styles['header-title']}>Ваш первый проект</h1>
                <button className={styles['header-edit-button']}><PencilIcon/></button>
            </div>
            <div className={styles['header-body']}>
                <p className={styles['header-block']}>Добавьте описание проекта</p>
                <p className={styles['header-block']}>Напишите какую продукцию производите</p>
                <p className={styles['header-block']}>Опишите цель, которую стремитесь достичь</p>
            </div>
        </section>
    );
};
