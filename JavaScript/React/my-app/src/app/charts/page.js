"use client";  //声明使用客户端模式

import RevenueChart from '../components/RevenueChart';

const HomePage = () => {
    return (
        <div>
            <h1>腾讯控股营收趋势图</h1>
            <RevenueChart />
        </div>
    );
};

export default HomePage;