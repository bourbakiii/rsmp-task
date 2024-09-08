import React, {FC} from 'react';
import styles from './Graphic.module.scss'
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, TooltipProps, XAxisProps} from 'recharts';
import {generateRandomValuesForRange} from "./helpers/generateDaysArray";
import {Container} from "../../ui/container/Container";
import {
    ValueType,
    NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import {CustomTickProps} from "./types/types";
import {MonthsPicker} from "./ui/months-picker/MonthsPicker";
import {PeriodButtons} from "./ui/period-buttons/PeriodButtons";

const data = generateRandomValuesForRange('2024-06-01', '2024-08-31');

// TODO: красить цифру при наведении + пунктирная полоска
// TODO: убрать tickSize
export const Graphic = () => {
    return (
        <Container className={styles['graphic']}>
            <h3>График производительности</h3>
            <div className={styles['graphic-head']}>
                <PeriodButtons/>
                <MonthsPicker fromMonth={'Июнь'} toMonth={'Август'} toYear={2024}/>
            </div>
            <div className={styles['graphic-body']} style={{width: '100%', overflowX: 'auto', overflowY: 'hidden'}}>
                <ResponsiveContainer width={data.length * 29.4} height={150}>
                    <AreaChart data={data}>
                        <Tooltip content={<CustomTooltip/>}

                                 cursor={{strokeDasharray: "5 5"}}/>
                        <Area type="monotone" dataKey="value"
                              fill="var(--magnolia)" stroke="var(--royal-purple)" strokeWidth={2}/>
                        <XAxis
                            minTickGap={2000}
                            interval={0}
                            fontSize={100}
                            tickSize={0}
                            tickMargin={8} dataKey="name" tick={renderCustomAxisTick}/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Container>
    );
};

const renderCustomAxisTick = (props: CustomTickProps): JSX.Element => {
    const {x, y, payload, index} = props;
    const isFirst = index === 0;
    const isLast = index === data.length - 1;
    const offset = isFirst ? 0 : isLast ? 0 : 0; // Смещение для первой и последней метки

    return (
        <text
            x={+x + offset} // Смещаем метки
            y={+y + 10}
            fontSize={10}
            textAnchor={isFirst ? 'start' : isLast ? 'end' : 'middle'}
            // TODO: Change color
            style={{fill: 'var(--royal-purple)'}}
        >
            {payload.value.substring(0, 2)}
        </text>
    );
};

const CustomTooltip: FC<TooltipProps<ValueType, NameType>> = ({active, payload, label}) => {
    console.log(payload);
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
