import {FC, useCallback, useState} from 'react';
import {ITab} from "./index";
import {MemoizedTab, Tab} from "./Tab";
import styles from './Tabs.module.scss'

export interface ITabsProps {
    tabs: ITab[]
}

export const Tabs: FC<ITabsProps> = ({tabs}) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
    const selectTabHandler = useCallback((tab: ITab) => setSelectedTabIndex(tabs.findIndex(el => el.id === tab.id)), []);

    return (
        <div className={styles['tabs-row']}>
            {tabs.map(((tab, index) => {
                return <MemoizedTab key={tab.id} tab={tab} isSelected={index === selectedTabIndex}
                                    onClick={selectTabHandler}/>
            }))}
        </div>
    );
};
