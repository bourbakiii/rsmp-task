import {FC, SVGProps} from 'react';

export type IBookIconProps = SVGProps<SVGSVGElement>

export const BookIcon: FC<IBookIconProps> = (restProps) => {
    return (
        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
            <path
                d="M20.7779 12V17C20.7779 18.8856 20.7779 19.8284 20.1921 20.4142C19.6063 21 18.6635 21 16.7779 21H7.27789C5.89718 21 4.77789 19.8807 4.77789 18.5V18.5C4.77789 17.1193 5.89718 16 7.27789 16H16.7779C18.6635 16 19.6063 16 20.1921 15.4142C20.7779 14.8284 20.7779 13.8856 20.7779 12V7C20.7779 5.11438 20.7779 4.17157 20.1921 3.58579C19.6063 3 18.6635 3 16.7779 3H8.77789C6.89227 3 5.94947 3 5.36368 3.58579C4.77789 4.17157 4.77789 5.11438 4.77789 7V18.5"
                stroke="currentColor" strokeWidth="2"/>
        </svg>
    )
};
