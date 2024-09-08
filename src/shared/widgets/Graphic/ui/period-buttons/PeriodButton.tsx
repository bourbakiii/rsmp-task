import {FC, DetailedHTMLProps, ButtonHTMLAttributes} from 'react';
import styles from './PeriodButton.module.scss';
import {classNames} from "../../../../helpers/classNamesParser";
import {ChevronIcon} from "../../../../icons/ChevronIcon";
import {SmallChevronIcon} from "../../../../icons/SmallChevronIcon";

export interface IPeriodButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    selected?: boolean;
    chevron?: boolean;
}

export const PeriodButton: FC<IPeriodButtonProps> = ({selected = false, chevron = false, children}) => {
    return (
        <button className={classNames(styles['period-button'], {
            [styles['selected']]: selected,
            [styles['with-chevron']]: chevron
        })}>
            <span>
                {children}
            </span>
            {chevron && <SmallChevronIcon className={styles['period-button-chevron']} direction={'bottom'}/>}
        </button>
    );
};
