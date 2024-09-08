import {FC} from 'react';
import {ChevronIcon} from "../../../../icons/ChevronIcon";
import styles from './MonthsPicker.module.scss';

export interface IMonthsPickerProps {
    fromMonth: string;
    toMonth: string;
    fromYear?: number;
    toYear: number;
}

export const MonthsPicker: FC<IMonthsPickerProps> = ({
                                                         fromMonth,
                                                         toMonth,
                                                         fromYear,
                                                         toYear,
                                                     }) => {
    return (
        <div className={styles['months-picker']}>
            <button className={styles['months-picker-button']}><ChevronIcon direction={'left'}/></button>
            <div className={styles['months-picker-content']}>{fromMonth} {fromYear} – {toMonth} {toYear}</div>
            <button className={styles['months-picker-button']}><ChevronIcon direction={'right'}/></button>
        </div>
    );
};
