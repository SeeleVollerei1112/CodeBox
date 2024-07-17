"use client";

const ChartTypeSelector = ({ selectedOption, setSelectedOption }) => {
    return (
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
    );
}

export default ChartTypeSelector;
