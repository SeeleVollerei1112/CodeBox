import { useEffect, useState } from 'react';
import EChartComponent from './EChartComponent';

const ChartComponent = ({
    selectedOption,
    seriesTypes,
    enabledSeries,
    titleEnabled,
    titleText,
    titlePosition,
    legendPosition,
    axisPointerType,
    yAxisConfigs,
    dataZoomXEnabled,
    dataZoomYEnabled,
    xAxisSeriesIndex,
    toolboxEnabled
}) => {
    const [seriesData, setSeriesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSeriesData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`/api/series-data?option=${selectedOption}`, {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setSeriesData(data);
            } catch (error) {
                console.error('Error fetching series data:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSeriesData();
    }, [selectedOption]);

    const getOption = () => {
        if (!seriesData.length) {
            return {};
        }

        const xAxisData = xAxisSeriesIndex !== 'none' && xAxisSeriesIndex !== null ? seriesData[xAxisSeriesIndex].data : [];

        const filteredSeriesData = seriesData.filter((_, index) => enabledSeries[index]);
        const filteredSeriesTypes = Object.keys(seriesTypes).filter(index => enabledSeries[index]).map(index => seriesTypes[index]);
        const filteredYAxisConfigs = yAxisConfigs.filter((_, index) => enabledSeries[index]);

        const enabledYAxes = filteredYAxisConfigs.filter(config => config.enabled);

        let yAxisLeftConfigs = [];
        let yAxisRightConfigs = [];
        let seriesConfig = [];

        if (enabledYAxes.length === 1) {
            const sharedYAxisConfig = enabledYAxes[0];
            const sharedYAxisIndex = filteredYAxisConfigs.indexOf(sharedYAxisConfig);
            const maxValue = Math.max(...filteredSeriesData.flatMap(series => series.data));
            const adjustedMaxValue = (maxValue * 6) / 5;
            const interval = Math.ceil(adjustedMaxValue / 6 / 10) * 10;

            const yAxisConfig = {
                type: 'value',
                position: sharedYAxisConfig.position,
                axisLabel: {
                    formatter: `{value} ${sharedYAxisConfig.suffix || ''}`,
                    show: true
                },
                splitLine: { show: true },
                min: 0,
                max: interval * 6,
                interval: interval
            };

            if (sharedYAxisConfig.position === 'left') {
                yAxisLeftConfigs.push(yAxisConfig);
            } else {
                yAxisRightConfigs.push(yAxisConfig);
            }

            seriesConfig = filteredSeriesData.map((item, index) => ({
                name: item.name,
                type: filteredSeriesTypes[index] || 'bar',
                data: item.data,
                yAxisIndex: sharedYAxisIndex
            }));
        } else {
            yAxisLeftConfigs = [];
            yAxisRightConfigs = [];

            seriesConfig = filteredSeriesData.map((series, index) => {
                if (!series.data || !Array.isArray(series.data)) {
                    return null;
                }
                const config = filteredYAxisConfigs[index] || { enabled: false, position: 'left', suffix: '' };
                const maxValue = Math.max(...series.data);
                const adjustedMaxValue = (maxValue * 6) / 5;
                const interval = Math.ceil(adjustedMaxValue / 6 / 10) * 10;

                const yAxisConfig = {
                    type: 'value',
                    position: config.position,
                    axisLabel: {
                        formatter: `{value} ${config.suffix || ''}`,
                        show: config.enabled
                    },
                    splitLine: { show: config.enabled },
                    min: 0,
                    max: interval * 6,
                    interval: interval
                };

                if (config.position === 'left') {
                    yAxisLeftConfigs.push(yAxisConfig);
                } else {
                    yAxisRightConfigs.push(yAxisConfig);
                }

                return {
                    name: series.name,
                    type: filteredSeriesTypes[index] || 'bar',
                    data: series.data,
                    yAxisIndex: index
                };
            }).filter(series => series !== null);

            yAxisLeftConfigs.forEach((config, index) => {
                config.offset = index * 50;
            });

            yAxisRightConfigs.forEach((config, index) => {
                config.offset = index * 50;
            });
        }

        const yAxis = [
            ...yAxisLeftConfigs,
            ...yAxisRightConfigs
        ];

        const dataZoom = [
            dataZoomXEnabled ? {
                type: 'slider',
                xAxisIndex: 0,
                start: 0,
                end: 100
            } : null,
            dataZoomYEnabled ? {
                type: 'slider',
                yAxisIndex: 0,
                start: 0,
                end: 100
            } : null
        ].filter(Boolean);

        const toolbox = toolboxEnabled ? {
            feature: {
                dataZoom: { yAxisIndex: 'none' },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
            }
        } : {};

        const option = {
            title: titleEnabled ? {
                text: titleText,
                left: titlePosition
            } : null,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: axisPointerType
                },
                formatter: (params) => {
                    let tooltipText = `${params[0].axisValueLabel}<br/>`;
                    params.forEach(param => {
                        tooltipText += `${param.marker} ${param.seriesName}: ${param.value}<br/>`;
                    });
                    return tooltipText;
                },
                backgroundColor: 'rgba(50,50,50,0.7)',
                borderColor: '#333',
                borderWidth: 1,
                padding: [5, 10, 5, 10],
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            },
            legend: {
                left: legendPosition === 'left' ? 'left' : legendPosition === 'center' ? 'center' : 'right'
            },
            xAxis: {
                type: 'category',
                data: xAxisData,
                axisLabel: {
                    interval: 0,
                    rotate: 30,
                    margin: 8,
                    align: 'center',
                    fontStyle: 'normal',
                    show: xAxisSeriesIndex !== 'none' && xAxisSeriesIndex !== null
                }
            },
            yAxis,
            series: seriesConfig,
            dataZoom,
            toolbox,
        };

        return option;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <EChartComponent option={getOption()} />;
};

export default ChartComponent;
