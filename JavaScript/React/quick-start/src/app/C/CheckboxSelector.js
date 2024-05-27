"use client";

const CheckboxSelector = ({ seriesName, isChecked, handleCheckboxChange, handleChartTypeChange, chartType }) => {
    return (
        <div className="flex items-center space-x-4">
            <label className="label-text">{seriesName}</label>
            <select
                className={`select w-full max-w-xs ${isChecked ? '' : 'opacity-50'}`}
                disabled={!isChecked}
                value={chartType}
                onChange={handleChartTypeChange}
            >
                <option value="line">折线图</option>
                <option value="bar">柱状图</option>
            </select>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text">Enable selector</span>
                    <input
                        type="checkbox"
                        className="checkbox checkbox-info"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default CheckboxSelector;
