// src/app/page.js
"use client"

import { useEffect, useState } from 'react';
import ChartComponent from '../components/ChartComponent';
import ChartOptions from '../components/ChartOptions';
import Navbar from '../components/Navbar';
import ResizableContainer from '../components/ResizableContainer';

const Home = () => {
    const [theme, setTheme] = useState('default');
    const [selectedOption, setSelectedOption] = useState('option1');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [seriesData, setSeriesData] = useState([]);
    const [seriesTypes, setSeriesTypes] = useState({});
    const [enabledSeries, setEnabledSeries] = useState({});
    const [titleEnabled, setTitleEnabled] = useState(false);
    const [titleText, setTitleText] = useState('');
    const [titlePosition, setTitlePosition] = useState('center');
    const [legendPosition, setLegendPosition] = useState('top');
    const [axisPointerType, setAxisPointerType] = useState('line');
    const [yAxisConfigs, setYAxisConfigs] = useState([]);  // Initialize as empty array
    const [dataZoomXEnabled, setDataZoomXEnabled] = useState(false);
    const [dataZoomYEnabled, setDataZoomYEnabled] = useState(false);
    const [xAxisSeriesIndex, setXAxisSeriesIndex] = useState('none');  // Add state for x axis series index and set default to 'none'
    const [toolboxEnabled, setToolboxEnabled] = useState(false);  // Add state for toolbox enabled

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const handleCheckboxChange = (event) => {
        setIsCheckboxChecked(event.target.checked);
    };

    const handleSeriesTypeChange = (e, index) => {
        const newSeriesTypes = { ...seriesTypes, [index]: e.target.value };
        setSeriesTypes(newSeriesTypes);
    };

    const handleSeriesEnabledChange = (index) => {
        const newEnabledSeries = { ...enabledSeries, [index]: !enabledSeries[index] };
        setEnabledSeries(newEnabledSeries);
    };

    const handleYAxisConfigChange = (index, key, value) => {
        const newYAxisConfigs = [...yAxisConfigs];
        newYAxisConfigs[index] = { ...newYAxisConfigs[index], [key]: value };
        setYAxisConfigs(newYAxisConfigs);
    };

    const handleToolboxConfigChange = (key, value) => {
        const newToolboxConfig = { ...toolboxConfig, [key]: value };
        setToolboxConfig(newToolboxConfig);
    };

    const fetchSeriesData = async () => {
        try {
            const response = await fetch(`/api/series-data?option=${selectedOption}`, {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setSeriesData(data);

            // Initialize seriesTypes and enabledSeries
            const newSeriesTypes = data.reduce((acc, _, index) => ({ ...acc, [index]: 'bar' }), {});
            const newEnabledSeries = data.reduce((acc, _, index) => ({ ...acc, [index]: index !== 0 }), {});
            setSeriesTypes(newSeriesTypes);
            setEnabledSeries(newEnabledSeries);

            // Initialize Y-axis configs without enabling any series
            const newYAxisConfigs = data.map(() => ({
                enabled: false,
                position: 'left',
                suffix: ''
            }));
            setYAxisConfigs(newYAxisConfigs);
        } catch (error) {
            console.error('Error fetching series data:', error);
        }
    };

    useEffect(() => {
        fetchSeriesData();
    }, [selectedOption]);

    return (
        <div className={`container mx-auto p-4 h-screen flex flex-col items-start justify-start relative`} data-theme={theme}>
            <Navbar handleThemeChange={handleThemeChange} />
            <ResizableContainer>
                <div className="place-items-center p-4">
                    <ChartComponent
                        selectedOption={selectedOption}
                        seriesTypes={seriesTypes}
                        enabledSeries={enabledSeries}
                        titleEnabled={titleEnabled}
                        titleText={titleText}
                        titlePosition={titlePosition}
                        legendPosition={legendPosition}
                        axisPointerType={axisPointerType}
                        yAxisConfigs={yAxisConfigs}
                        dataZoomXEnabled={dataZoomXEnabled}
                        dataZoomYEnabled={dataZoomYEnabled}
                        xAxisSeriesIndex={xAxisSeriesIndex}
                        toolboxEnabled={toolboxEnabled}
                    />
                </div>
                <div>
                    <ChartOptions
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        isCheckboxChecked={isCheckboxChecked}
                        handleCheckboxChange={handleCheckboxChange}
                        seriesData={seriesData}
                        handleSeriesTypeChange={handleSeriesTypeChange}
                        handleSeriesEnabledChange={handleSeriesEnabledChange}
                        seriesTypes={seriesTypes}
                        enabledSeries={enabledSeries}
                        titleEnabled={titleEnabled}
                        setTitleEnabled={setTitleEnabled}
                        titleText={titleText}
                        setTitleText={setTitleText}
                        titlePosition={titlePosition}
                        setTitlePosition={setTitlePosition}
                        legendPosition={legendPosition}
                        setLegendPosition={setLegendPosition}
                        axisPointerType={axisPointerType}
                        setAxisPointerType={setAxisPointerType}
                        yAxisConfigs={yAxisConfigs}
                        handleYAxisConfigChange={handleYAxisConfigChange}
                        dataZoomXEnabled={dataZoomXEnabled}
                        setDataZoomXEnabled={setDataZoomXEnabled}
                        dataZoomYEnabled={dataZoomYEnabled}
                        setDataZoomYEnabled={setDataZoomYEnabled}
                        xAxisSeriesIndex={xAxisSeriesIndex}
                        setXAxisSeriesIndex={setXAxisSeriesIndex}
                        toolboxEnabled={toolboxEnabled}
                        setToolboxEnabled={setToolboxEnabled}
                    />
                </div>
            </ResizableContainer>
        </div>
    );
};

export default Home;
