import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const EChartComponent = ({ option }) => {
    const chartRef = useRef(null);
    let chartInstance = null;

    useEffect(() => {
        if (chartRef.current) {
            chartInstance = echarts.init(chartRef.current);
            chartRef.current.echartsInstance = chartInstance;
            try {
                chartInstance.setOption(option);
            } catch (e) {
                console.error('Error setting option:', e);
            }
        }

        const handleResize = () => {
            if (chartInstance) {
                chartInstance.resize();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (chartInstance) {
                chartInstance.dispose();
            }
        };
    }, [option]);

    return <div ref={chartRef} className="echarts-instance" style={{ width: '100%', height: '400px' }}></div>;
};

export default EChartComponent;
