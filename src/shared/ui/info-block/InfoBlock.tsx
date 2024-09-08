import {FC, ReactNode} from 'react';
import styles from './InfoBlock.module.scss';
import {ChevronIcon} from "../../icons/ChevronIcon";
import {LoadingSpinner} from "../loading-spinner";

export interface IInfoBlockProps {
    icon: ReactNode;
    text: string;
    value?: number;
    isLoading?: boolean;
    onClick?: () => void;
}

export const InfoBlock: FC<IInfoBlockProps> = ({icon, text, isLoading = false, value, onClick}) => {
    return (
        <button className={styles['info-block']} onClick={onClick}>
            <div className={styles['info-block-icon-wrapper']}>
                {icon}
            </div>
            <span className={styles["info-block-content"]}>
                <p className={styles["info-block-text"]}>{text}</p>
                <p className={styles["info-block-after-text"]}>{isLoading ? <LoadingSpinner/> : value}</p>
            </span>
            <button className={styles["info-block-chevron-button"]}>
                <ChevronIcon direction={'right'}/>
            </button>
        </button>
    );
};