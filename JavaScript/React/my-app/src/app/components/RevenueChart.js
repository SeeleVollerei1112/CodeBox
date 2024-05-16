import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';

const RevenueChart = () => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // Fetch data from the backend using fetch API
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/revenue-data');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setChartData(data);
            } catch (error) {
                console.error('Error fetching the data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!chartData) return;

        const chart = echarts.init(chartRef.current);

        const option = {
            title: {
                text: '腾讯控股营收趋势图-单季度',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999',
                    },
                },
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            legend: {
                data: ['营业收入', '营收同比'],
            },
            xAxis: [
                {
                    type: 'category',
                    data: chartData.xAxis,
                    axisPointer: {
                        type: 'shadow',
                    },
                    axisLabel: {
                        interval: 0, // 强制显示所有标签
                        rotate: 45, // 标签旋转角度
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '营业收入',
                    min: 1200,
                    max: 1650,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value}',
                    },
                },
                {
                    type: 'value',
                    name: '营收同比',
                    min: -5,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} %',
                    },
                    splitLine: {
                        show: false, // 隐藏网格线
                    },
                },
            ],
            series: [
                {
                    name: '营业收入',
                    type: 'bar',
                    data: chartData.series.revenue,
                    itemStyle: {
                        color: 'rgba(60,160,255,0.8)', // 设置柱状图颜色
                    },
                },
                {
                    name: '营收同比',
                    type: 'line',
                    yAxisIndex: 1,
                    tooltip: {
                        valueFormatter: function (value) {
                            return value + ' %';
                        },
                    },
                    data: chartData.series.growth,
                    lineStyle: {
                        color: '#a6e22e', // 设置折线图颜色
                    },
                    itemStyle: {
                        color: '#a6e22e', // 设置折线图数据点颜色
                    },
                },
            ],
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
        };

        chart.setOption(option);

        const resizeChart = () => {
            chart.resize();
        };

        window.addEventListener('resize', resizeChart);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', resizeChart);
            chart.dispose();
        };
    }, [chartData]);

    return <div ref={chartRef} style={{ height: '400px', width: '100%' }} />;
};

export default RevenueChart;

