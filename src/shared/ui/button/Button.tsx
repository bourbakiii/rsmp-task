import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from './Button.module.scss';
export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

// TODO: не понятно что делать с кнопкой. В самом макете она не используется, но используется в UI-kit
// TODO: привести к FSD (index.ts)
const Button: FC<IButtonProps> = ({children, ...restProps}) => {
    return (
        <button className={styles['button']} {...restProps}>
            {children}
        </button>
    );
};
export {Button};