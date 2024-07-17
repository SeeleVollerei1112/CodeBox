import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const EChartComponent = ({ option }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current);
        chartInstance.setOption(option);

        return () => {
            chartInstance.dispose();
        };
    }, [option]);

    return <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default EChartComponent;
