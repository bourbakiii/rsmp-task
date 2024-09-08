import {FC} from 'react';
import {PeriodButton} from "./PeriodButton";
import styles from './PeriodButtons.module.scss';

export interface IPeriodButtonsProps {

}

export const PeriodButtons: FC<IPeriodButtonsProps> = () => {
    return (
        <div className={styles['period-buttons']}>
            <PeriodButton>Час</PeriodButton>
            <PeriodButton chevron>Смена</PeriodButton>
            <PeriodButton selected className={styles['selected']}>Сутки</PeriodButton>
        </div>
    );
};
