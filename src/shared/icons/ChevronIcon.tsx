import {FC, SVGProps, useMemo} from 'react';

export interface IChevronIconProps extends SVGProps<SVGSVGElement> {
    direction: 'top' | 'right' | 'bottom' | 'left';
}


export const ChevronIcon: FC<IChevronIconProps> = ({direction, ...restProps}) => {
    const rotateDegree = useMemo(() => {
        switch (direction) {
            case 'top': {
                return -90;
            }
            case 'right': {
                return 0;
            }
            case 'bottom': {
                return 90;
            }
            case 'left': {
                return 180;
            }
        }
    }, [direction])
    return (
        <svg style={{transform: `rotate(${rotateDegree}deg)`}} width="20" height="20" viewBox="0 0 20 20"
             fill="transparent" xmlns="http://www.w3.org/2000/svg" {...restProps}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12.7071 10.8477L7.70711 15.8477C7.31658 16.2383 6.68342 16.2383 6.29289 15.8477C5.90237 15.4572 5.90237 14.824 6.29289 14.4335L10.5858 10.1406L6.29289 5.84773C5.90237 5.45721 5.90237 4.82404 6.29289 4.43352C6.68342 4.04299 7.31658 4.04299 7.70711 4.43352L12.7071 9.43352C13.0976 9.82404 13.0976 10.4572 12.7071 10.8477Z"
                  fill="currentColor"/>
        </svg>
    );
};
