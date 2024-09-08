import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from './Button.module.scss';
export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const Button: FC<IButtonProps> = ({children, ...restProps}) => {
    return (
        <button className={styles['button']} {...restProps}>
            {children}
        </button>
    );
};
export {Button};