import {FC, SVGProps, useMemo} from 'react';

export interface ISmallChevronIconProps extends SVGProps<SVGSVGElement> {
    direction: 'top' | 'right' | 'bottom' | 'left';
}


export const SmallChevronIcon: FC<ISmallChevronIconProps> = ({direction, ...restProps}) => {
    const rotateDegree = useMemo(() => {
        switch (direction) {
            case 'top': {
                return -180;
            }
            case 'right': {
                return -90;
            }
            case 'bottom': {
                return 0;
            }
            case 'left': {
                return 90;
            }
        }
    }, [direction])
    return (
        <svg style={{transform: `rotate(${rotateDegree}deg)`}} width="10" height="7" viewBox="0 0 10 7" fill="none"
             xmlns="http://www.w3.org/2000/svg" {...restProps}>
            <path d="M9 1.5L5 5.5L1 1.5" stroke="currentColor" strokeWidth="2"/>
        </svg>
    );
};


