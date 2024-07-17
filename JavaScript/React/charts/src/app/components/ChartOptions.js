"use client"

const ChartOptions = ({
    selectedOption,
    setSelectedOption,
    seriesData,
    handleSeriesTypeChange,
    handleSeriesEnabledChange,
    seriesTypes,
    enabledSeries,
    titleEnabled,
    setTitleEnabled,
    titleText,
    setTitleText,
    titlePosition,
    setTitlePosition,
    legendPosition,
    setLegendPosition,
    axisPointerType,
    setAxisPointerType,
    yAxisConfigs,
    handleYAxisConfigChange,
    handlePanelClose,
    dataZoomXEnabled,
    setDataZoomXEnabled,
    dataZoomYEnabled,
    setDataZoomYEnabled,
    xAxisSeriesIndex,
    setXAxisSeriesIndex,
    toolboxEnabled,
    setToolboxEnabled
}) => (
    <div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
                图表类型
            </div>
            <div className="collapse-content">
                <div className="form-control mt-4">
                    <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg">
                        <span className="label-text mr-2">饼图</span>
                        <input
                            type="radio"
                            name="custom-radio"
                            className="checkbox checkbox-info"
                            checked={selectedOption === 'option1'}
                            onChange={() => setSelectedOption('option1')}
                        />
                    </label>
                </div>
                <div className="form-control mt-4">
                    <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg">
                        <span className="label-text mr-2">柱形/折线图</span>
                        <input
                            type="radio"
                            name="custom-radio"
                            className="checkbox checkbox-info"
                            checked={selectedOption === 'option2'}
                            onChange={() => setSelectedOption('option2')}
                        />
                    </label>
                </div>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" onClick={handlePanelClose} />
            <div className="collapse-title text-xl font-medium">
                数据系列
            </div>
            <div className="collapse-content">
                {seriesData.map((series, index) => (
                    <div key={index} className="flex items-center mt-4">
                        <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg flex-grow">
                            <span className="label-text mr-2">{series.name}</span>
                            <input
                                type="checkbox"
                                className="checkbox checkbox-info"
                                checked={enabledSeries[index] || false}
                                onChange={() => handleSeriesEnabledChange(index)}
                            />
                        </label>
                        <select
                            className={`select w-full max-w-xs ml-2 ${enabledSeries[index] ? '' : 'opacity-50 cursor-not-allowed'}`}
                            value={seriesTypes[index] || 'bar'}
                            onChange={(e) => handleSeriesTypeChange(e, index)}
                            disabled={!enabledSeries[index]}
                        >
                            <option value="bar">Bar</option>
                            <option value="line">Line</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
                基本样式
            </div>
            <div className="collapse-content">
                <div className="collapse bg-base-200 mt-4">
                    <input type="checkbox" checked={titleEnabled} onChange={() => setTitleEnabled(!titleEnabled)} />
                    <div className="collapse-title text-xl font-medium">
                        标题配置
                    </div>
                    <div className="collapse-content flex flex-col md:flex-row items-center">
                        <label className="form-control w-full max-w-xs mt-4 mr-4">
                            <div className="label">
                                <span className="label-text">图表标题</span>
                            </div>
                            <input
                                type="text"
                                placeholder="输入标题"
                                className="input input-bordered w-full max-w-xs"
                                value={titleText}
                                onChange={(e) => setTitleText(e.target.value)}
                                onBlur={() => setTitleEnabled(titleEnabled)}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs mt-4">
                            <div className="label">
                                <span className="label-text">标题位置</span>
                            </div>
                            <select
                                className="select w-full max-w-xs"
                                value={titlePosition}
                                onChange={(e) => setTitlePosition(e.target.value)}
                            >
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="collapse bg-base-200 mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        图例/坐标轴指示器
                    </div>
                    <div className="collapse-content flex flex-col md:flex-row items-center">
                        <label className="form-control w-full max-w-xs mt-4 mr-4">
                            <div className="label">
                                <span className="label-text">图例位置</span>
                            </div>
                            <select
                                className="select w-full max-w-xs"
                                value={legendPosition}
                                onChange={(e) => setLegendPosition(e.target.value)}
                            >
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>
                        </label>
                        <label className="form-control w-full max-w-xs mt-4">
                            <div className="label">
                                <span className="label-text">坐标轴指示器</span>
                            </div>
                            <select
                                className="select w-full max-w-xs"
                                value={axisPointerType}
                                onChange={(e) => setAxisPointerType(e.target.value)}
                            >
                                <option value="line">Line</option>
                                <option value="shadow">Shadow</option>
                                <option value="none">None</option>
                                <option value="cross">Cross</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="collapse bg-base-200 mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        x轴选项
                    </div>
                    <div className="collapse-content">
                        <label className="form-control w-full max-w-xs mt-4 mr-4">
                            <div className="label">
                                <span className="label-text">绑定到x轴的数据系列</span>
                            </div>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                value={xAxisSeriesIndex !== null ? xAxisSeriesIndex : 'none'}
                                onChange={(e) => setXAxisSeriesIndex(e.target.value)}
                            >
                                <option value="none">None</option>
                                {seriesData.map((series, index) => (
                                    <option key={index} value={index}>{series.name}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>
                <div className="collapse bg-base-200 mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        y轴配置
                    </div>
                    <div className="collapse-content">
                        {seriesData.map((series, index) => (
                            <div key={index} className="flex items-center mt-4">
                                <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg flex-grow">
                                    <span className="label-text mr-2">{series.name}</span>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-info"
                                        checked={yAxisConfigs[index]?.enabled || false}
                                        onChange={() => handleYAxisConfigChange(index, 'enabled', !yAxisConfigs[index]?.enabled)}
                                    />
                                </label>
                                <div className="flex items-center w-full max-w-xs ml-2">
                                    <select
                                        className={`select w-full max-w-xs ${yAxisConfigs[index]?.enabled ? '' : 'opacity-50 cursor-not-allowed'}`}
                                        value={yAxisConfigs[index]?.position || 'left'}
                                        onChange={(e) => handleYAxisConfigChange(index, 'position', e.target.value)}
                                        disabled={!yAxisConfigs[index]?.enabled}
                                    >
                                        <option value="left">Left</option>
                                        <option value="right">Right</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="坐标后缀"
                                        className={`input input-bordered w-full max-w-xs ml-2 ${yAxisConfigs[index]?.enabled ? '' : 'opacity-50 cursor-not-allowed'}`}
                                        value={yAxisConfigs[index]?.suffix || ''}
                                        onChange={(e) => handleYAxisConfigChange(index, 'suffix', e.target.value)}
                                        disabled={!yAxisConfigs[index]?.enabled}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
                高级样式
            </div>
            <div className="collapse-content">
                <div className="collapse bg-base-200 mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        数据缩放配置
                    </div>
                    <div className="collapse-content">
                        <div className="form-control mt-4">
                            <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg flex-grow">
                                <span className="label-text mr-2">启用X轴数据缩放</span>
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-info"
                                    checked={dataZoomXEnabled}
                                    onChange={() => setDataZoomXEnabled(!dataZoomXEnabled)}
                                />
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg flex-grow">
                                <span className="label-text mr-2">启用Y轴数据缩放</span>
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-info"
                                    checked={dataZoomYEnabled}
                                    onChange={() => setDataZoomYEnabled(!dataZoomYEnabled)}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="collapse bg-base-200 mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        工具箱配置
                    </div>
                    <div className="collapse-content">
                        <div className="form-control mt-4 flex flex-wrap gap-4">
                            <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg flex-grow">
                                <span className="label-text mr-2">启用工具箱功能</span>
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-info"
                                    checked={toolboxEnabled}
                                    onChange={() => setToolboxEnabled(!toolboxEnabled)}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ChartOptions;
