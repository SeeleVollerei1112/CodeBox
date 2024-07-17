'use client';
// pages/index.js
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Tabs from '../components/Tabs';

const Home = () => {
    const [theme, setTheme] = useState('default');

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
        document.documentElement.setAttribute('data-theme', event.target.value);
    };

    return (
        <div>
            <Navbar handleThemeChange={handleThemeChange} />
            <div className="p-4">
                <Tabs />
            </div>
        </div>
    );
};

export default Home;
