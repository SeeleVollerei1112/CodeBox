"use client";

import { useEffect, useState } from 'react';
import ChartAuxiliaryConfig from '../C/ChartAuxiliaryConfig';
import ChartTypeSelector from '../C/ChartTypeSelector';
import DataSeriesSelector from '../C/DataSeriesSelector';
import Navbar from '../C/Navbar';
import ResizableContainer from '../C/ResizableContainer';

const Home = () => {
    const [theme, setTheme] = useState('default');
    const [selectedOption, setSelectedOption] = useState('option1');
    const [dataSeries, setDataSeries] = useState([]);
    const [chartConfig, setChartConfig] = useState({
        titleText: '',
        titlePosition: 'center',
        legendPosition: 'center',
        xAxisConfig: [],
        yAxisConfig: []
    });

    useEffect(() => {
        // 模拟从后端获取数据
        const fetchDataSeries = async () => {
            const data = [
                { name: '邮件营销', data: [120, 200, 150, 80, 70, 110, 130], type: 'bar', selected: true },
                { name: '联盟广告', data: [60, 80, 70, 90, 110, 130, 150], type: 'bar', selected: true },
                { name: '搜索引擎', data: [320, 332, 301, 334, 390, 330, 320], type: 'line', selected: true }
            ];
            setDataSeries(data);
            setChartConfig((prevConfig) => ({
                ...prevConfig,
                xAxisConfig: data.map(() => ({ selected: false, position: 'bottom', index: 0, offset: 0 })),
                yAxisConfig: data.map(() => ({ selected: false, position: 'left', index: 0, offset: 0 }))
            }));
        };

        fetchDataSeries();
    }, []);

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const handleCheckboxChange = (index) => {
        const newSeries = [...dataSeries];
        newSeries[index].selected = !newSeries[index].selected;
        setDataSeries(newSeries);
    };

    const handleTypeChange = (index, newType) => {
        const newSeries = [...dataSeries];
        newSeries[index].type = newType;
        setDataSeries(newSeries);
    };

    const handleConfigChange = (config) => {
        setChartConfig(config);
    };

    const getOption = () => {
        const seriesData = dataSeries.filter(series => series.selected).map(series => ({
            name: series.name,
            type: series.type,
            data: series.data
        }));

        const isPieChart = selectedOption === 'option1';
        const isBarOrLineChart = !isPieChart;

        const xAxis = isBarOrLineChart ? {
            type: 'category',
            data: []
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        } : undefined;

        const yAxis = isBarOrLineChart ? { type: 'value' } : undefined;

        return {
            title: {
                text: chartConfig.titleText,
                left: chartConfig.titlePosition
            },
            tooltip: {
                trigger: isPieChart ? 'item' : 'axis'
            },
            legend: {
                left: chartConfig.legendPosition
            },
            xAxis: xAxis,
            yAxis: yAxis,
            series: isPieChart ? seriesData.map(data => ({
                ...data,
                type: 'pie',
                radius: '50%',
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            })) : seriesData
        };
    };

    return (
        <div className={`container mx-auto p-4 h-screen flex flex-col items-start justify-start relative`} data-theme={theme}>
            <Navbar handleThemeChange={handleThemeChange} />
            <ResizableContainer getOption={getOption}>
                <ChartTypeSelector selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                <DataSeriesSelector dataSeries={dataSeries} handleCheckboxChange={handleCheckboxChange} handleTypeChange={handleTypeChange} />
                <ChartAuxiliaryConfig dataSeries={dataSeries} handleConfigChange={handleConfigChange} />
            </ResizableContainer>
        </div>
    );
}

export default Home;