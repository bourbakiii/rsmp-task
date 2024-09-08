import {FC} from 'react';
import styles from './Graphic.module.scss'
import {Area, AreaChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis} from 'recharts';
import {Container} from "../../ui/container/Container";
import {NameType, ValueType,} from 'recharts/types/component/DefaultTooltipContent';
import {CustomTickProps} from "./types/types";
import {MonthsPicker} from "./ui/months-picker/MonthsPicker";
import {PeriodButtons} from "./ui/period-buttons/PeriodButtons";
import {LoadingSpinner} from "../../ui/loading-spinner";

export type IGraphicPair = { name: string, value: number };

export interface IGraphicProps {
    data?: IGraphicPair[]
    isLoading?: boolean;
}

export const Graphic: FC<IGraphicProps> = ({data, isLoading}) => {
    return (
        <Container className={styles['graphic']}>
            <h3>График производительности</h3>
            <div className={styles['graphic-head']}>
                <PeriodButtons/>
                <MonthsPicker fromMonth={'Июнь'} toMonth={'Август'} toYear={2024}/>
            </div>
            <div className={styles['graphic-body']}
            >
                {data && !isLoading &&
                    <ResponsiveContainer width={data.length * 29.5} height={150}>
                        <AreaChart data={data}>
                            <Tooltip content={<CustomTooltip/>}
                                     cursor={{strokeDasharray: "5 5"}}/>
                            <Area type="monotone" dataKey="value"
                                  fill="var(--magnolia)" stroke="var(--royal-purple)" strokeWidth={2}/>
                            <XAxis
                                interval={0}
                                fontSize={100}
                                axisLine={false}
                                tickSize={0}
                                tickMargin={8} dataKey="name" tick={(props) => renderCustomAxisTick(props, data)}/>
                        </AreaChart>
                    </ResponsiveContainer>
                }
                {isLoading && <LoadingSpinner className={styles['loading']}/>}
            </div>
        </Container>
    );
};

const renderCustomAxisTick = (props: CustomTickProps, data: IGraphicPair[]): JSX.Element => {
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
            style={{fill: 'var(--royal-purple)', opacity: 0.5, fontSize: 14}}
        >
            {payload.value.substring(0, 2)}
        </text>
    );
};

const CustomTooltip: FC<TooltipProps<ValueType, NameType>> = ({active, payload, label}) => {
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
