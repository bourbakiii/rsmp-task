import React from 'react';
import styles from './Graphic.module.scss'
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {generateRandomValuesForRange} from "./helpers/generateDaysArray";

const data = generateRandomValuesForRange('2024-06-01', '2024-08-31');

// TODO: красить цифру при наведении + пунктирная полоска
// TODO: убрать tickSize
export const Graphic = () => {
    return (
        <div className={styles['graphic-block']} style={{width: 896, overflowX: 'auto', overflowY: 'hidden'}}>
            <ResponsiveContainer width={data.length * 29.4} height={150}>
                <AreaChart data={data}
                    // Показывать все тики
                >
                    {/*@ts-ignore*/}
                    <Tooltip content={<CustomTooltip/>}/>
                    <Area type="monotone" dataKey="value"
                          fill="var(--magnolia)" stroke="var(--royal-purple)" strokeWidth={2}/>
                    <XAxis
                        minTickGap={2000}
                        interval={0}
                        fontSize={100}
                        tickSize={5} dataKey="name" tick={renderCustomAxisTick}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

// @ts-ignore
function renderCustomAxisTick({x, y, payload, index}) {
    const isFirst = index === 0;
    const isLast = index === data.length - 1;
    const offset = isFirst ? 0 : isLast ? -0 : 0; // Смещение для первой и последней метки

    return (
        <text
            x={x + offset} // Смещаем метки
            y={y + 10}
            fontSize={10}
            textAnchor={isFirst ? 'start' : isLast ? 'end' : 'middle'}
            // TODO: Change color
            style={{fill: 'red'}}
        >
            {payload.value.substring(0,2)}
        </text>
    );
};

// @ts-ignore
const CustomTooltip = ({active, payload, label}) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles['custom-tooltip']}>
                <p className={styles['custom-label']}>{label}</p>
                <p className={styles['custom-value']}>{payload[0].value}</p>
            </div>
        );
    }

    return null;
};
