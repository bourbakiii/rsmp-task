import {FC, useState} from 'react';
import './RangeSlider.css';

export interface IRangeSliderProps {
    onChange: () => void
}

const RangeSlider: FC<IRangeSliderProps> = () => {
    const [value, setValue] = useState(0);
    const min = 0;
    const max = 100;
    const visibleRange = 10;

    const handleChange = (e: { target: { value: any; }; }) => {
        setValue(Number(e.target.value));
    };

    // Вычисляем процентное смещение thumb
    const thumbPosition = ((value - min) / (max - min)) * 100;

    return (
        <div className="range-container">
            <input
                type="range"
                min={min}
                max={max - visibleRange}
                value={value}
                onChange={handleChange}
                className="range-slider"
            />
            <div
                className="labels"
                style={{left: `calc(${thumbPosition}% + (${8 - thumbPosition * 0.15}px))`}}
            >
                <span>{value}</span>
                <span>{value + visibleRange <= max ? value + visibleRange : max}</span>
            </div>
        </div>
    );
};

export default RangeSlider;
