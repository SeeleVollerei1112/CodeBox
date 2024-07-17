'use client'


import { useState } from 'react';
import Navbar from '../components/Navbar';
import TabsComponent from '../components/TabsComponent';

const Page = () => {
    const [theme, setTheme] = useState('default');

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
        document.documentElement.setAttribute('data-theme', e.target.value);
    };

    return (
        <div>
            <Navbar handleThemeChange={handleThemeChange} />
            <div className={`theme-${theme}`}>
                <TabsComponent />
                {/* Your other page content goes here */}
            </div>
        </div>
    );
};

export default Page;
