export interface CustomTickProps {
    x: number;
    y: number;
    payload: {
        value: any;
        index: number;
    };
    stroke: string;
    index: number;
    textAnchor?: string;
    fontSize?: number;
    verticalAnchor?: string;
    width?: number;
    height?: number;
    isActive?: boolean
}