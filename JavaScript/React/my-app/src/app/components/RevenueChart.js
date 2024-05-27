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

        const colors = ['#5470C6', '#91CC75', '#EE6666'];

        const option = {
            title: {
                text: chartData.title,
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
                data: ['收入', '扣归母净利润', '扣归母净利润率'],
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
                    name: 'chart.yAxis.name_left',
                    min: 0,
                    max: 1800,
                    interval: 200,
                    axisLabel: {
                        formatter: '{value}',
                    },
                },
                {
                    type: 'value',
                    name: 'chartData.yAxis.name_right',
                    min: -5,
                    max: 50,
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
                    name: '收入',
                    type: 'bar',
                    data: chartData.series.s1,
                    yAxisIndex: 0,
                    // itemStyle: {
                    //     color: '#5470C6', // 设置柱状图颜色
                    // },
                },
                {
                    name: '扣归母净利润',
                    type: 'bar',
                    data: chartData.series.s2,
                    yAxisIndex: 0,
                    // itemStyle: {
                    //     color: '#91CC75', // 设置柱状图颜色
                    // },
                },
                {
                    name: '扣归母净利润率',
                    type: 'line',
                    yAxisIndex: 1,
                    tooltip: {
                        valueFormatter: function (value) {
                            return value + ' %';
                        },
                    },
                    data: chartData.series.s3,
                    // lineStyle: {
                    //     color: '#EE6666', // 设置折线图颜色
                    // },
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

