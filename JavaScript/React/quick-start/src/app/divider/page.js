"use client";

import { useEffect, useState } from 'react';
import ChartComponent from '../components/ChartComponent';
import DataSeriesSelector from '../components/DataSeriesSelector';
import Navbar from '../components/Navbar';
import ResizableContainer from '../components/ResizableContainer';

const Home = () => {
    const [theme, setTheme] = useState('default');
    const [dataSeries, setDataSeries] = useState([]);
    const [chartConfig, setChartConfig] = useState({
        titleText: '',
        titlePosition: 'center',
        legendPosition: 'center',
        xAxisConfig: [],
        yAxisConfig: []
    });
    const [selectedSeries, setSelectedSeries] = useState([]);

    useEffect(() => {
        // 从后端获取数据
        fetch('/api/data')
            .then(response => response.json())
            .then(data => {
                setDataSeries(data);
            });
    }, []);

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const handleConfigChange = (config) => {
        setChartConfig(config);
    };

    const handleSeriesChange = (series) => {
        setSelectedSeries(series.filter(s => s.selected));
    };

    return (
        <div className={`container mx-auto p-4 h-screen flex flex-col items-start justify-start relative`} data-theme={theme}>
            <Navbar theme={theme} handleThemeChange={handleThemeChange} />
            <ResizableContainer>
                <ChartConfigForm handleConfigChange={handleConfigChange} dataSeries={dataSeries} />
                <DataSeriesSelector dataSeries={dataSeries} handleSeriesChange={handleSeriesChange} />
                <ChartComponent config={chartConfig} dataSeries={selectedSeries} />
            </ResizableContainer>
        </div>
    );
};

export default Home;

