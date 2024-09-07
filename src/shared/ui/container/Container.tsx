import {DetailedHTMLProps, FC, HTMLAttributes} from 'react';
import styles from './Container.module.scss';
import {classNames} from "../../helpers/classNamesParser";

export type IContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Container: FC<IContainerProps> = (restProps) => {
    return (
        <div  {...restProps} className={classNames(styles['container'], restProps.className)}>
            {restProps.children}
        </div>
    );
};
