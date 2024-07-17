"use client";

import { useEffect, useState } from 'react';

const ChartAuxiliaryConfig = ({ dataSeries, handleConfigChange }) => {
    const [titleText, setTitleText] = useState('');
    const [titlePosition, setTitlePosition] = useState('center');
    const [legendPosition, setLegendPosition] = useState('center');
    const [xAxisConfig, setXAxisConfig] = useState([]);
    const [yAxisConfig, setYAxisConfig] = useState([]);

    useEffect(() => {
        if (dataSeries.length > 0) {
            setXAxisConfig(dataSeries.map(() => ({ selected: false, position: 'bottom', index: 0, offset: 0 })));
            setYAxisConfig(dataSeries.map(() => ({ selected: false, position: 'left', index: 0, offset: 0 })));
        }
    }, [dataSeries]);

    const handleTitleTextChange = (e) => {
        setTitleText(e.target.value);
        handleConfigChange({ titleText: e.target.value, titlePosition, legendPosition, xAxisConfig, yAxisConfig });
    };

    const handleTitlePositionChange = (e) => {
        setTitlePosition(e.target.value);
        handleConfigChange({ titleText, titlePosition: e.target.value, legendPosition, xAxisConfig, yAxisConfig });
    };

    const handleLegendPositionChange = (e) => {
        setLegendPosition(e.target.value);
        handleConfigChange({ titleText, titlePosition, legendPosition: e.target.value, xAxisConfig, yAxisConfig });
    };

    const handleXAxisConfigChange = (index, key, value) => {
        const newXAxisConfig = [...xAxisConfig];
        newXAxisConfig[index][key] = value;
        setXAxisConfig(newXAxisConfig);
        handleConfigChange({ titleText, titlePosition, legendPosition, xAxisConfig: newXAxisConfig, yAxisConfig });
    };

    const handleYAxisConfigChange = (index, key, value) => {
        const newYAxisConfig = [...yAxisConfig];
        newYAxisConfig[index][key] = value;
        setYAxisConfig(newYAxisConfig);
        handleConfigChange({ titleText, titlePosition, legendPosition, xAxisConfig, yAxisConfig: newYAxisConfig });
    };


    const toggleCollapse = (index, type) => {
        if (type === 'xAxis') {
            handleXAxisConfigChange(index, 'selected', !xAxisConfig[index].selected);
        } else {
            handleYAxisConfigChange(index, 'selected', !yAxisConfig[index].selected);
        }
    };


    if (!xAxisConfig.length || !yAxisConfig.length) {
        return null; // or a loading spinner
    }

    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
                图表辅助配置
            </div>
            <div className="collapse-content">
                <div className="collapse bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        标题配置
                    </div>
                    <div className="collapse-content">
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text">标题</span>
                            </label>
                            <input
                                type="text"
                                placeholder="输入标题"
                                className="input input-bordered w-full max-w-xs"
                                value={titleText}
                                onChange={handleTitleTextChange}
                            />
                            <label className="label mt-4">
                                <span className="label-text">标题位置</span>
                            </label>
                            <select className="select select-info w-full max-w-xs" value={titlePosition} onChange={handleTitlePositionChange}>
                                <option value="left">靠左</option>
                                <option value="center">居中</option>
                                <option value="right">靠右</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="collapse bg-base-200 mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        图例配置
                    </div>
                    <div className="collapse-content">
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text">图例位置</span>
                            </label>
                            <select className="select select-info w-full max-w-xs" value={legendPosition} onChange={handleLegendPositionChange}>
                                <option value="left">靠左</option>
                                <option value="center">居中</option>
                                <option value="right">靠右</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="collapse bg-base-200 mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        X轴配置
                    </div>
                    <div className="collapse-content">
                        <div className="form-control mt-4">
                            {dataSeries.map((series, index) => (
                                <div key={index} className="mt-2 flex items-center">
                                    <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg flex-grow">
                                        <span className="label-text mr-2">{series.name}</span>
                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-info"
                                            checked={xAxisConfig[index].selected}
                                            onChange={() => toggleCollapse(index, 'xAxis')}
                                        />
                                    </label>
                                    <div className="flex-grow flex items-center">
                                        <select
                                            className={`select select-info w-full max-w-xs ml-2 ${!xAxisConfig[index].selected ? 'opacity-50' : ''}`}
                                            value={xAxisConfig[index].position}
                                            onChange={(e) => handleXAxisConfigChange(index, 'position', e.target.value)}
                                            disabled={!xAxisConfig[index].selected}
                                        >
                                            <option value="bottom">底部</option>
                                            <option value="top">顶部</option>
                                        </select>
                                        <input
                                            type="number"
                                            placeholder="Index"
                                            className={`input input-bordered w-full max-w-xs ml-2 ${!xAxisConfig[index].selected ? 'opacity-50' : ''}`}
                                            value={xAxisConfig[index].index}
                                            onChange={(e) => handleXAxisConfigChange(index, 'index', e.target.value)}
                                            disabled={!xAxisConfig[index].selected}
                                        />
                                        <input
                                            type="number"
                                            placeholder="Offset"
                                            className={`input input-bordered w-full max-w-xs ml-2 ${!xAxisConfig[index].selected ? 'opacity-50' : ''}`}
                                            value={xAxisConfig[index].offset}
                                            onChange={(e) => handleXAxisConfigChange(index, 'offset', e.target.value)}
                                            disabled={!xAxisConfig[index].selected}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="collapse bg-base-200 mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Y轴配置
                    </div>
                    <div className="collapse-content">
                        <div className="form-control mt-4">
                            {dataSeries.map((series, index) => (
                                <div key={index} className="mt-2 flex items-center">
                                    <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg flex-grow">
                                        <span className="label-text mr-2">{series.name}</span>
                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-info"
                                            checked={yAxisConfig[index].selected}
                                            onChange={() => toggleCollapse(index, 'yAxis')}
                                        />
                                    </label>
                                    <div className="flex-grow flex items-center">
                                        <select
                                            className={`select select-info w-full max-w-xs ml-2 ${!yAxisConfig[index].selected ? 'opacity-50' : ''}`}
                                            value={yAxisConfig[index].position}
                                            onChange={(e) => handleYAxisConfigChange(index, 'position', e.target.value)}
                                            disabled={!yAxisConfig[index].selected}
                                        >
                                            <option value="left">左边</option>
                                            <option value="right">右边</option>
                                        </select>
                                        <input
                                            type="number"
                                            placeholder="Index"
                                            className={`input input-bordered w-full max-w-xs ml-2 ${!yAxisConfig[index].selected ? 'opacity-50' : ''}`}
                                            value={yAxisConfig[index].index}
                                            onChange={(e) => handleYAxisConfigChange(index, 'index', e.target.value)}
                                            disabled={!yAxisConfig[index].selected}
                                        />
                                        <input
                                            type="number"
                                            placeholder="Offset"
                                            className={`input input-bordered w-full max-w-xs ml-2 ${!yAxisConfig[index].selected ? 'opacity-50' : ''}`}
                                            value={yAxisConfig[index].offset}
                                            onChange={(e) => handleYAxisConfigChange(index, 'offset', e.target.value)}
                                            disabled={!yAxisConfig[index].selected}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartAuxiliaryConfig;
