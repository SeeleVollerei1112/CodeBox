'use client'

import { useState } from 'react';

const Dropdown = ({ options }) => {
    const [checked, setChecked] = useState(false);
    const [selected, setSelected] = useState('');

    return (
        <div className="collapse bg-base-200 my-2">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <div className="collapse-title text-xl font-medium">
                Click me to show/hide content
            </div>
            <div className="collapse-content">
                {checked && (
                    <div>
                        <select
                            className="select select-bordered w-full max-w-xs"
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                        >
                            <option value="" disabled>Select an option</option>
                            {options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                        <div className="form-control mt-2">
                            <label className="label cursor-pointer">
                                <span className="label-text">Confirm selection</span>
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={!!selected}
                                    onChange={(e) => setChecked(e.target.checked)}
                                />
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
