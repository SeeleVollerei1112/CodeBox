
const SidePanel = ({ selectedOption, setSelectedOption, isCheckboxChecked, handleCheckboxChange }) => (
    <div className="flex-grow h-auto card bg-base-300 rounded-box" style={{ width: `calc(100% - ${leftWidth})` }}>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">图表类型</div>
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
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">数据系列</div>
            <div className="collapse-content">
                <div className="flex items-center mt-4">
                    <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg flex-grow">
                        <span className="label-text mr-2">Enable selector</span>
                        <input
                            type="checkbox"
                            className="checkbox checkbox-info"
                            checked={isCheckboxChecked}
                            onChange={handleCheckboxChange}
                        />
                    </label>
                    <select className={`select w-full max-w-xs ml-2 ${isCheckboxChecked ? '' : 'opacity-50'}`} disabled={!isCheckboxChecked}>
                        <option value="">Choose an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
    </div>
);

export default SidePanel;
