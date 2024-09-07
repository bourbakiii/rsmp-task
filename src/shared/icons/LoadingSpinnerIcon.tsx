import {FC, SVGProps} from 'react';

export type ILoadingSpinnerIconProps = SVGProps<SVGSVGElement>

export const LoadingSpinnerIcon: FC<ILoadingSpinnerIconProps> = (restProps) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="transparent"
             xmlns="http://www.w3.org/2000/svg" {...restProps}>
            <path
                d="M23.001 12C23.5527 12 24.0043 12.4481 23.9584 12.9979C23.7766 15.1778 23.0014 17.2735 21.7082 19.0534C20.2187 21.1036 18.1183 22.6296 15.7082 23.4127C13.2981 24.1958 10.7019 24.1958 8.2918 23.4127C5.88168 22.6296 3.78133 21.1036 2.2918 19.0534C0.80226 17.0033 5.33694e-07 14.5342 0 12C-5.33693e-07 9.46585 0.802258 6.99675 2.29179 4.94658C3.78133 2.89641 5.88167 1.37042 8.29179 0.587323C10.3842 -0.0925529 12.6169 -0.182169 14.7463 0.318476C15.2834 0.44475 15.57 1.0127 15.3995 1.53743C15.229 2.06215 14.6659 2.34406 14.1268 2.22673C12.4011 1.85116 10.6002 1.9381 8.90921 2.48753C6.90037 3.14024 5.14974 4.41216 3.90821 6.12097C2.66668 7.82979 1.998 9.88779 1.998 12C1.998 14.1122 2.66668 16.1702 3.90821 17.879C5.14974 19.5878 6.90038 20.8598 8.90921 21.5125C10.918 22.1652 13.082 22.1652 15.0908 21.5125C17.0996 20.8598 18.8503 19.5878 20.0918 17.879C21.1369 16.4406 21.7761 14.7547 21.9522 12.9974C22.0072 12.4484 22.4493 12 23.001 12Z"
                fill="currentColor"/>
        </svg>
    );
};