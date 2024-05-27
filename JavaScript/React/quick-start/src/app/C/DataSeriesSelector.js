"use client";

const DataSeriesSelector = ({ dataSeries, handleCheckboxChange, handleTypeChange }) => {
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
                数据系列
            </div>
            <div className="collapse-content">
                {dataSeries.map((series, index) => (
                    <div key={index} className="flex items-center mt-4">
                        <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg flex-grow">
                            <span className="label-text mr-2">{series.name}</span>
                            <input
                                type="checkbox"
                                className="checkbox checkbox-info"
                                checked={series.selected}
                                onChange={() => handleCheckboxChange(index)}
                            />
                        </label>
                        <select
                            className="select w-full max-w-xs ml-2"
                            value={series.type}
                            onChange={(e) => handleTypeChange(index, e.target.value)}
                        >
                            <option value="line">折线图</option>
                            <option value="bar">柱状图</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataSeriesSelector;
