import {FC, ReactNode} from 'react';
import styles from './InfoBlock.module.scss';
import {ChevronIcon} from "../../icons/ChevronIcon";

export interface IInfoBlockProps {
    icon: ReactNode;
    text: string;
    afterText: string;
    onClick?: () => void;
}

export const InfoBlock: FC<IInfoBlockProps> = ({icon, text, afterText, onClick}) => {
    return (
        <button className={styles['info-block']} onClick={onClick}>
            <div className={styles['info-block-icon-wrapper']}>
                {icon}
            </div>
            <span className={styles["info-block-content"]}>
                <p className={styles["info-block-text"]}>{text}</p>
                <p className={styles["info-block-after-text"]}>{afterText}</p>
            </span>
            <button className={styles["info-block-chevron-button"]}>
                <ChevronIcon direction={'right'}/>
            </button>
        </button>
    );
};