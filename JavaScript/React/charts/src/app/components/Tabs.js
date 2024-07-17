import { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <div role="tablist" className="tabs tabs-lifted">
            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className={`tab ${activeTab === 0 ? 'tab-active' : ''}`}
                aria-label="Tab 1"
                onClick={() => handleTabChange(0)}
            />
            {activeTab === 0 && (
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    Tab content 1
                </div>
            )}

            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
                aria-label="Tab 2"
                onClick={() => handleTabChange(1)}
            />
            {activeTab === 1 && (
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    Tab content 2
                </div>
            )}

            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
                aria-label="Tab 3"
                onClick={() => handleTabChange(2)}
            />
            {activeTab === 2 && (
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    Tab content 3
                </div>
            )}
        </div>
    );
};

export default Tabs;
