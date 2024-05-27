"use client";

import { useState } from 'react';

const CheckboxSelector = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="flex items-center space-x-4">
            <label className="label-text">Select an option</label>
            <select className={`select w-full max-w-xs ${isChecked ? '' : 'opacity-50'}`} disabled={!isChecked}>
                <option value="">Choose an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text">Enable selector</span>
                    <input type="checkbox" className="checkbox checkbox-info" checked={isChecked} onChange={handleCheckboxChange} />
                </label>
            </div>
        </div>
    );
};

const AccordionWithCheckboxSelectors = () => {
    return (
        <div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <CheckboxSelector />
                    <CheckboxSelector />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <CheckboxSelector />
                    <CheckboxSelector />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <CheckboxSelector />
                    <CheckboxSelector />
                </div>
            </div>
        </div>
    );
};

export default AccordionWithCheckboxSelectors;

