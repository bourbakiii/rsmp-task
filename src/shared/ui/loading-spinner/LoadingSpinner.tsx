import {FC, SVGProps} from 'react';
import {LoadingSpinnerIcon} from "../../icons/LoadingSpinnerIcon";
import animations from '../../../assets/styles/animation.module.css';
import styles from './LoadingSpinner.module.css';
import {classNames} from "../../helpers/classNamesParser";

export interface ILoadingSpinnerProps extends SVGProps<SVGSVGElement> {
    size?: number;
}

export const LoadingSpinner: FC<ILoadingSpinnerProps> = ({size = 24, ...restProps}) => {
    return (
        <LoadingSpinnerIcon width={size}
                            className={classNames(animations['full-rotate'], styles['loading-spinner'])}/>
    );
};
