"use client"

import { useState } from 'react';

const TabsComponent = () => {
    const [selectedTab, setSelectedTab] = useState(2); // Default selected tab

    const handleTabChange = (tabIndex) => {
        setSelectedTab(tabIndex);
    };

    return (
        <div className="bg-black min-h-screen flex justify-center items-center">
            <div role="tablist" className="tabs tabs-lifted">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Tab 1"
                    checked={selectedTab === 1}
                    onChange={() => handleTabChange(1)}
                />
                <div role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${selectedTab === 1 ? '' : 'hidden'}`}>Tab content 1</div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Tab 2"
                    checked={selectedTab === 2}
                    onChange={() => handleTabChange(2)}
                />
                <div role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${selectedTab === 2 ? '' : 'hidden'}`}>Tab content 2</div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Tab 3"
                    checked={selectedTab === 3}
                    onChange={() => handleTabChange(3)}
                />
                <div role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${selectedTab === 3 ? '' : 'hidden'}`}>Tab content 3</div>
            </div>
        </div>
    );
};

export default TabsComponent;
