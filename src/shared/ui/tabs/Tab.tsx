import {ButtonHTMLAttributes, DetailedHTMLProps, FC, memo, ReactNode} from 'react';
import {ITab} from "./types/tabs-types";
import styles from './Tab.module.scss';
import {classNames} from "../../helpers/classNamesParser";

export interface ITabProps {
    tab: ITab;
    isSelected?: boolean;
    onClick?: (tab: ITab) => void;
}

export const Tab: FC<ITabProps> = ({tab, isSelected = false, onClick}) => {
    return (
        <button className={classNames(styles['tab'], {[styles['selected']]: isSelected})}
                type={'button'} onClick={onClick?.bind(null, tab)}>
            {tab.name}
        </button>
    );
};
export const MemoizedTab = memo(Tab);
